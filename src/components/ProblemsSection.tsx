import { useScrollReveal } from '../hooks/useScrollReveal'

const problems = [
  {
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Processos Manuais que Drenam Seu Tempo',
    description:
      'Horas desperdiçadas em tarefas repetitivas. Planilhas, e-mails manuais, cobranças — tudo consumindo o tempo que deveria ser investido em crescimento.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'Presença Digital Amadora',
    description:
      'Seu concorrente tem app e site profissional. Seu negócio depende de WhatsApp e indicações. Cada dia sem profissionalizar é cliente perdido.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Vendas que Escapam Todos os Dias',
    description:
      'Sem funil automatizado e página de conversão, você perde vendas 24h por dia. Clientes encontram o concorrente porque ele tem o sistema.',
  },
]

export default function ProblemsSection() {
  const sectionRef = useScrollReveal()

  return (
    <section id="problemas" ref={sectionRef} style={{ padding: '6rem 0' }}>
      <div className="container-main text-center">
        <p className="reveal font-display text-accent text-sm tracking-[0.3em] uppercase mb-4">
          Você se identifica?
        </p>
        <h2 className="reveal stagger-1 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
          Os Problemas que Estão{' '}
          <span className="text-text-muted">Travando Seu Crescimento</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`reveal stagger-${i + 1} bg-surface border border-border rounded-sm text-center`}
              style={{ padding: '2rem' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-sm mb-5">
                {problem.icon}
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-3">
                {problem.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
