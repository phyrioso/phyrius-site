'use client';

import { useState } from 'react';
import { Arrow } from '@/components/ui/Bits';

type Estado = 'idle' | 'a-enviar' | 'ok' | 'erro';

type Props = {
  /** Título do cartão. */
  titulo?: string;
  /** De onde veio o pedido: vai no assunto do email. */
  origem?: string;
  /** Se vier lista de opções, o campo "procura" passa a ser um select. */
  campo?: string;
  opcoes?: string[];
  botao?: string;
  /** Caixa de consentimento obrigatória (landing pages). */
  consentimento?: boolean;
};

const OPCOES_BASE = ['Phyrius 100', 'Phyrius 48', 'Ainda não sei'];

export default function Formulario({
  titulo = 'Pedido de contacto',
  origem,
  campo = 'O que procura?',
  opcoes,
  botao = 'Enviar mensagem',
  consentimento = false,
}: Props) {
  const [estado, setEstado] = useState<Estado>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setEstado('a-enviar');
    const dados = new FormData(form);
    try {
      // contacto.php vive em /public e é copiado para a raiz do site no build.
      const res = await fetch('/contacto.php', { method: 'POST', body: dados });
      setEstado(res.ok ? 'ok' : 'erro');
      if (res.ok) form.reset();
    } catch {
      setEstado('erro');
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>{titulo}</h2>

      <div className="form__grid">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" placeholder="O seu nome" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" placeholder="Nome da empresa" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="nome@empresa.pt" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" placeholder="+351" autoComplete="tel" />
        </div>
      </div>

      {opcoes ? (
        <div className="field">
          <label htmlFor="procura">{campo}</label>
          <select id="procura" name="procura" defaultValue={opcoes[0]}>
            {opcoes.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <fieldset>
          <legend>{campo}</legend>
          <div className="radios">
            {OPCOES_BASE.map((o, i) => (
              <label key={o}>
                <input type="radio" name="procura" value={o} defaultChecked={i === 0} />
                {o}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="field">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Conte-nos o que precisa" required />
      </div>

      {origem ? <input type="hidden" name="origem" value={origem} /> : null}

      {/* Armadilha anti-spam: os humanos não veem nem preenchem. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />

      {consentimento ? (
        <label className="form__aceite">
          <input type="checkbox" name="consentimento" value="sim" required />
          <span>Autorizo o contacto da Phyrius relativamente a este pedido.</span>
        </label>
      ) : null}

      <div className="form__bottom">
        <p>Usamos os seus dados apenas para responder a este pedido.</p>
        <button className="btn btn--red" type="submit" disabled={estado === 'a-enviar'}>
          {estado === 'a-enviar' ? 'A enviar…' : botao}
          <Arrow />
        </button>
      </div>

      {estado === 'ok' && (
        <p className="form__status" role="status">
          Obrigado. Respondemos em 24 horas úteis.
        </p>
      )}
      {estado === 'erro' && (
        <p className="form__status red" role="alert">
          Não foi possível enviar. Escreva-nos para mkt@phyrius.pt.
        </p>
      )}
    </form>
  );
}
