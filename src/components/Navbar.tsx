export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border/50">
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '110px' }}>
        <a href="#hero" className="flex items-center gap-2 md:gap-4 no-underline">
          {/* Logo Mark: Square with C and D */}
          <svg viewBox="0 0 64 64" className="h-10 w-10 md:h-16 md:w-16 flex-shrink-0">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#7B61FF" />
                <stop offset="100%" stopColor="#FF4D9A" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="60" height="60" fill="none" stroke="url(#logoGrad)" strokeWidth="3.5" />
            <text x="12" y="36" fill="url(#logoGrad)" className="font-display font-light text-[24px] md:text-[36px]">
              C
            </text>
            <text x="32" y="56" fill="url(#logoGrad)" className="font-display font-light text-[24px] md:text-[36px]">
              D
            </text>
          </svg>
          
          {/* Logo Text: Stacked CUCA DIGITAL */}
          <div className="flex flex-col justify-center leading-[0.95]">
            <span className="brand-gradient font-display font-black tracking-wide text-[16px] md:text-[30px]">
              CUCA
            </span>
            <span className="brand-gradient font-display font-black tracking-wide text-[16px] md:text-[30px]">
              DIGITAL
            </span>
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problemas" className="text-text-muted text-sm font-display tracking-wide hover:text-text transition-colors duration-200">
            Problemas
          </a>
          <a href="#solucao" className="text-text-muted text-sm font-display tracking-wide hover:text-text transition-colors duration-200">
            Soluções
          </a>
          <a href="#beneficios" className="text-text-muted text-sm font-display tracking-wide hover:text-text transition-colors duration-200">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-text-muted text-sm font-display tracking-wide hover:text-text transition-colors duration-200">
            Processo
          </a>
          <a href="#faq" className="text-text-muted text-sm font-display tracking-wide hover:text-text transition-colors duration-200">
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contato"
          className="inline-flex items-center justify-center whitespace-nowrap brand-gradient-bg text-bg font-display font-bold text-sm rounded-sm
                     transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{ padding: '12px 28px', flexShrink: 0 }}
        >
          Fale Conosco
        </a>
      </div>
    </nav>
  )
}
