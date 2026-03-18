import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  {
    tag: '01',
    title: 'Apps Personalizados',
    subtitle: 'Experiência que resolve problemas reais',
    description:
      'Aplicativos sob medida focados na dor do seu cliente. Interface intuitiva e funcionalidades que transformam a experiência do usuário em fidelização.',
    features: ['UX pensado para converter', 'Performance nativa', 'Integração com seus sistemas'],
  },
  {
    tag: '02',
    title: 'Automações Inteligentes',
    subtitle: 'Seu negócio trabalha enquanto você dorme',
    description:
      'Eliminamos tarefas repetitivas com automações inteligentes. Cobranças, e-mails, follow-ups — tudo no piloto automático, 24h por dia.',
    features: ['Fluxos automatizados 24/7', 'Integração com +100 ferramentas', 'Zero retrabalho manual'],
  },
  {
    tag: '03',
    title: 'Páginas de Vendas',
    subtitle: 'Conversão e persuasão visual na prática',
    description:
      'Landing pages com copywriting estratégico e design de alta conversão. Cada elemento guia o visitante até a ação.',
    features: ['Copywriting persuasivo', 'Design de alta conversão', 'Otimizadas para mobile'],
  },
]

export default function SolutionSection() {
  const sectionRef = useScrollReveal()

  return (
    <section id="solucao" ref={sectionRef} className="bg-surface" style={{ padding: '6rem 0' }}>
      <div className="container-main text-center">
        <p className="reveal font-display text-accent text-sm tracking-[0.3em] uppercase mb-4">
          A Solução
        </p>
        <h2 className="reveal stagger-1 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
          Três Pilares para{' '}
          <span className="brand-gradient">Dominar Seu Mercado</span>
        </h2>
        <p className="reveal stagger-2 text-text-muted text-lg mb-16" style={{ maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          Um ecossistema digital completo que trabalha junto para atrair, converter e fidelizar seus clientes.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`reveal stagger-${i + 1} group relative bg-bg border border-border rounded-sm text-center`}
              style={{ padding: '2rem' }}
            >
              <span className="inline-block font-display text-accent text-xs tracking-[0.2em] uppercase bg-accent/10 px-3 py-1 rounded-sm mb-5">
                Pilar {pillar.tag}
              </span>

              <h3 className="font-display font-bold text-xl md:text-2xl mb-2">
                {pillar.title}
              </h3>
              <p className="text-accent-secondary text-sm font-display tracking-wide mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {pillar.features.map((feat, j) => (
                  <li key={j} className="flex items-center justify-center gap-2.5 text-sm text-text mb-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 brand-gradient-bg transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
