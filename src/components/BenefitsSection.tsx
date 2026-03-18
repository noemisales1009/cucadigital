import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Escalabilidade Real',
    description: 'Sistemas projetados para crescer com você. Do primeiro cliente ao milésimo, sem gargalos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Redução de Custos',
    description: 'Automações eliminam tarefas repetitivas. Invista em crescimento, não em retrabalho.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Autoridade de Marca',
    description: 'App próprio, funil profissional e presença digital impecável. Seja referência no mercado.',
  },
]

export default function BenefitsSection() {
  const sectionRef = useScrollReveal()

  return (
    <section id="beneficios" ref={sectionRef} style={{ padding: '6rem 0' }}>
      <div className="container-main text-center">
        <p className="reveal font-display text-accent text-sm tracking-[0.3em] uppercase mb-4">
          Benefícios
        </p>
        <h2 className="reveal stagger-1 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
          O Que Você Ganha{' '}
          <span className="text-text-muted">Com Nosso Ecossistema</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`reveal stagger-${i + 1} group relative bg-surface border border-border rounded-sm text-center`}
              style={{ padding: '2rem' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 text-accent rounded-sm mb-6
                             transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 brand-gradient-bg transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
