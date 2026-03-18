export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="container-main text-center">
        {/* Eyebrow */}
        <span className="inline-block font-display text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-8">
          Apps · Automações · Landing Pages
        </span>

        {/* Headline */}
        <h1
          className="font-display font-bold leading-[0.92] tracking-tight mb-8"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}
        >
          Tecnologia Que Transforma{' '}
          <span className="brand-gradient">Negócios</span>
          <br />
          em Máquinas de Venda
        </h1>

        {/* Subheadline */}
        <p className="font-body text-text-muted text-lg md:text-xl leading-relaxed mb-12" style={{ maxWidth: '640px', margin: '0 auto 3rem auto' }}>
          Construímos o ecossistema digital completo para o seu negócio:
          aplicativos que resolvem problemas, automações que trabalham enquanto
          você dorme e páginas que convertem visitantes em clientes.
        </p>

        {/* CTA */}
        <a
          href="#contato"
          className="group inline-flex items-center justify-center whitespace-nowrap gap-3 brand-gradient-bg text-bg font-display font-bold text-base md:text-lg rounded-sm
                     transition-transform duration-300 ease-out
                     hover:scale-105 active:scale-95"
          style={{ padding: '16px 40px', flexShrink: 0 }}
        >
          Quero Escalar Meu Negócio
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-text-muted opacity-40 animate-pulse" />
      </div>
    </section>
  )
}
