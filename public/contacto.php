<?php
// Recebe o formulário de contacto e envia por email.
// Funciona em alojamento PHP normal (Plesk, cPanel). Sem dependências.

declare(strict_types=1);

const DESTINO = 'mkt@phyrius.pt';
const REMETENTE = 'site@phyrius.pt'; // tem de ser um endereço do domínio

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['erro' => 'Método não permitido']);
    exit;
}

// Armadilha anti-spam: se vier preenchida, é um robô.
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['ok' => true]);
    exit;
}

$limpar = static fn (string $v): string => trim(str_replace(["\r", "\n", "%0a", "%0d"], '', $v));

$nome     = $limpar($_POST['nome'] ?? '');
$empresa  = $limpar($_POST['empresa'] ?? '');
$email    = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$telefone = $limpar($_POST['telefone'] ?? '');
$procura  = $limpar($_POST['procura'] ?? '');
$origem   = $limpar($_POST['origem'] ?? '');
$mensagem = trim($_POST['mensagem'] ?? '');

if ($nome === '' || $email === false || $mensagem === '') {
    http_response_code(422);
    echo json_encode(['erro' => 'Preencha o nome, o email e a mensagem.']);
    exit;
}

$etiqueta = $origem !== '' ? $origem : 'Site';
$assunto = sprintf('[%s] %s — %s', $etiqueta, $nome, $procura !== '' ? $procura : 'Contacto');

$corpo = <<<TXT
Novo pedido de contacto em phyrius.pt

Origem:   {$etiqueta}
Nome:     {$nome}
Empresa:  {$empresa}
Email:    {$email}
Telefone: {$telefone}
Procura:  {$procura}

Mensagem:
{$mensagem}

--
Enviado a partir do formulário do site.
TXT;

$cabecalhos = implode("\r\n", [
    'From: Site Phyrius <' . REMETENTE . '>',
    'Reply-To: ' . $nome . ' <' . $email . '>',
    'Content-Type: text/plain; charset=utf-8',
    'MIME-Version: 1.0',
]);

if (mail(DESTINO, '=?UTF-8?B?' . base64_encode($assunto) . '?=', $corpo, $cabecalhos)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['erro' => 'Falha no envio']);
}
