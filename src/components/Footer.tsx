export default function Footer() {
  return (
    <footer id="contato" className="bg-surface border-t border-border" style={{ padding: '6rem 0' }}>
      <div className="container-main text-center">
        {/* Final CTA */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="font-display text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Pronto para começar?
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Pare de Perder{' '}
            <span className="brand-gradient">Clientes e Vendas.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-10" style={{ maxWidth: '560px', margin: '0 auto 2.5rem auto' }}>
            Fale com nosso time e descubra como a tecnologia pode transformar seus resultados.
          </p>
          <a
            href="https://wa.me/5598984463403?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Cuca%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center whitespace-nowrap gap-3 brand-gradient-bg text-bg font-display font-bold text-base md:text-lg rounded-sm
                       transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
            style={{ padding: '16px 40px', flexShrink: 0 }}
          >
            Quero Falar com um Especialista
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Footer bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2.5rem', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <svg viewBox="0 0 64 64" style={{ height: '56px', width: '56px', flexShrink: 0 }}>
              <defs>
                <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="50%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#FF4D9A" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="60" height="60" fill="none" stroke="url(#logoGradFooter)" strokeWidth="3.5" />
              <text x="12" y="36" fill="url(#logoGradFooter)" style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 300 }}>
                C
              </text>
              <text x="32" y="56" fill="url(#logoGradFooter)" style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 300 }}>
                D
              </text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', lineHeight: '0.95', textAlign: 'left' }}>
              <span className="brand-gradient font-display font-black tracking-wide" style={{ fontSize: '26px' }}>
                CUCA
              </span>
              <span className="brand-gradient font-display font-black tracking-wide" style={{ fontSize: '26px' }}>
                DIGITAL
              </span>
            </div>
          </div>
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Cuca Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
