import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'Uma landing page leva 5 a 10 dias úteis, um app completo de 30 a 90 dias. Definimos o cronograma no briefing.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer: 'Sim. Todos os projetos incluem suporte pós-entrega. Oferecemos planos de manutenção contínua.',
  },
  {
    question: 'Preciso ter conhecimento técnico?',
    answer: 'Não. Cuidamos de tudo — do planejamento à execução. Você foca no seu negócio, nós na tecnologia.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Condições flexíveis: 50% na aprovação e 50% na entrega. Parcelamento disponível para projetos maiores.',
  },
  {
    question: 'Vocês atendem qualquer tipo de negócio?',
    answer: 'Sim. Atendemos empreendedores, prestadores de serviço, e-commerces e empresas de pequeno e médio porte.',
  },
]

export default function FAQSection() {
  const sectionRef = useScrollReveal()

  return (
    <section id="faq" ref={sectionRef} style={{ padding: '6rem 0' }}>
      <div className="container-narrow text-center">
        <p className="reveal font-display text-accent text-sm tracking-[0.3em] uppercase mb-4">
          Dúvidas?
        </p>
        <h2 className="reveal stagger-1 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
          Perguntas Frequentes
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
          {faqs.map((faq, i) => (
            <details
              key={i}
              className={`reveal stagger-${Math.min(i + 1, 4)} group border border-border rounded-sm
                         transition-colors duration-300 hover:border-accent/30
                         open:border-accent/30 open:bg-surface`}
            >
              <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.25rem 1.5rem' }}>
                <span className="font-display font-bold text-base md:text-lg">
                  {faq.question}
                </span>
                <span className="faq-icon shrink-0 text-accent text-xl font-light transition-transform duration-300">
                  +
                </span>
              </summary>
              <div style={{ padding: '0 1.5rem 1.25rem 1.5rem' }}>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
