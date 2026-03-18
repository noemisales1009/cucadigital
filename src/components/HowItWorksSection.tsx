import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico & Briefing',
    description: 'Entendemos o seu negócio, objetivos e dores em uma conversa estratégica.',
  },
  {
    number: '02',
    title: 'Desenvolvimento Estratégico',
    description: 'Construímos seu app, automações e páginas com as melhores tecnologias.',
  },
  {
    number: '03',
    title: 'Entrega & Suporte',
    description: 'Entrega com treinamento completo e suporte dedicado para seu crescimento.',
  },
]

export default function HowItWorksSection() {
  const sectionRef = useScrollReveal()

  return (
    <section id="como-funciona" ref={sectionRef} className="bg-surface" style={{ padding: '6rem 0' }}>
      <div className="container-main text-center">
        <p className="reveal font-display text-accent text-sm tracking-[0.3em] uppercase mb-4">
          Processo
        </p>
        <h2 className="reveal stagger-1 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
          Como Funciona
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal stagger-${i + 1} flex flex-col items-center text-center`}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-bg border-2 border-accent rounded-sm font-display font-bold text-accent text-xl mb-6">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed" style={{ maxWidth: '300px' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
