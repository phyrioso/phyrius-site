/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática: gera HTML/CSS/JS em ./out para alojamento normal (Plesk, Apache).
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
