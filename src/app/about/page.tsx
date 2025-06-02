import React from 'react';
import styles from './about.module.css';

interface Skill {
  category: string;
  items: string[];
}

interface MediaAppearance {
  title: string;
  description: string;
  link: string;
  linkText: string;
  source: string;
}

const skills: Skill[] = [
  {
    category: 'Gestão de Projetos',
    items: [
      'Scrum',
      'Kanban',
      'ClickUp',
      'Métricas Ágeis',
      'Design Instrucional',
      'EAD',
      'Métricas Educacionais'
    ]
  },
  {
    category: 'Tecnologia',
    items: [
      'Python',
      'Machine Learning',
      'NLP',
      'Data Analysis',
      'Next.js',
      'React',
      'TypeScript',
      'Git', 
      'SQL',
      'AWS',
      'Docker',
      'Azure',
      'CI/CD',
      'DevOps'
    ]
  },
  {
    category: 'Idiomas',
    items: [
      'Português (Nativo)',
      'Inglês (Avançado)'
    ]
  }
];

const mediaAppearances: MediaAppearance[] = [
  {
    title: 'Equipe de alunos de Sistemas para Internet fica entre as 10 melhores do Brasil em Hackathon da Petrobras',
    description: 'A equipe Mindindex, formada por Anderson Marinho, Arthur Levy, Beatriz Martins, Felipe Liberato e Mateus Sobral, competiu com 117 equipes de todo o Brasil, cerca de 500 participantes, ficando entre as 10 melhores equipes em competição da Petrobras.',
    link: 'https://www.instagram.com/p/CkivCYHOwlV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D',
    linkText: 'Assistir',
    source: 'Instagram'
  },
  {
    title: 'Entrevista concedida para 11ª Semana Socioambiental da Unicap',
    description: 'As mudanças climáticas são transformações a longo prazo nos padrões de temperatura e clima. As atividades humanas têm sido o principal impulsionador das mudanças climáticas, principalmente devido à queima de combustíveis fósseis como carvão, petróleo e gás.',
    link: 'https://www.youtube.com/watch?v=Tra1_kPsmt0',
    linkText: 'Assistir',
    source: 'Unicap'
  },
  {
    title: 'Entrevista concedida à TV Brasil/TV Pernambuco',
    description: 'Entrevista sobre projetos e iniciativas inovadoras.',
    link: 'https://www.youtube.com/watch?v=RB58OU5mRGs',
    linkText: 'Assistir',
    source: 'TV Brasil'
  },
  {
    title: 'Católica vence Hacker Cidadão com app para mudanças climáticas',
    description: 'Anderson Marinho explica que o aplicativo disponibiliza uma rede de rota de fuga, botão de pânico, disparo de localização preciso que pode ser usado em caso de a pessoa estar soterrada ou ilhada. As informações foram trabalhadas a partir do banco de dados do Limcs coletados em comunidades da periferia do Recife localizadas em áreas de risco.',
    link: 'https://portal.unicap.br/-/catolica-vence-hacker-cidadao-com-app-para-mudancas-climaticas',
    linkText: 'Ler mais',
    source: 'Portal Unicap'
  },
  {
    title: 'Modelo em Campanha Publicitária do Sicredi',
    description: 'Cooperativismo vai além do seu dinheiro, é um movimento financeiro e social em que a união verdadeiramente faz a força. Todos crescem juntos e quanto mais as pessoas se unem, mais fortes elas ficam. Aqui, você é associado e não cliente.',
    link: 'https://www.instagram.com/p/CkivCYHOwlV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D',
    linkText: 'Ver mais',
    source: 'Sicredi'
  }
];

const siteTechnologies = {
  frontend: [
    'Next.js',
    'React',
    'TypeScript',
    'CSS Modules',
    'Tailwind CSS'
  ],
  development: [
    'Git & GitHub',
    'VS Code',
    'ESLint',
    'Prettier',
    'Node.js'
  ],
  deployment: [
    'Vercel',
    'Continuous Deployment'
  ]
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Sobre Mim</h1>
        <div className={styles.profile}>
          <div className={styles.profileContent}>
            <p className={styles.summary}>
              Sou um profissional apaixonado por tecnologia e inovação, com experiência em gestão de projetos ágeis e desenvolvimento de soluções digitais. 
              Atualmente, atuo como Gerente de Projetos na Cognitbuild, onde lidero iniciativas de transformação digital e inovação.
            </p>
            <p className={styles.summary}>
              Minha trajetória combina experiência em gestão de projetos, análise de dados e inteligência artificial, 
              permitindo-me criar soluções que unem tecnologia e impacto social. Sou reconhecido por minha capacidade 
              de liderar equipes e entregar resultados significativos em projetos desafiadores.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skillGroup, index) => (
            <div key={index} className={styles.skillCard}>
              <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
              <div className={styles.skillTags}>
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.mediaSection}>
        <h2 className={styles.sectionTitle}>Na Mídia</h2>
        <div className={styles.mediaGrid}>
          {mediaAppearances.map((appearance, index) => (
            <div key={index} className={styles.mediaCard}>
              <div className={styles.mediaSource}>{appearance.source}</div>
              <h3 className={styles.mediaTitle}>{appearance.title}</h3>
              <p className={styles.mediaDescription}>{appearance.description}</p>
              <a 
                href={appearance.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mediaLink}
              >
                {appearance.linkText} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle}>Como construi este site?</h2>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <h3 className={styles.techCategory}>Frontend</h3>
            <ul className={styles.techList}>
              {siteTechnologies.frontend.map((tech, index) => (
                <li key={index} className={styles.techItem}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.techCard}>
            <h3 className={styles.techCategory}>Desenvolvimento</h3>
            <ul className={styles.techList}>
              {siteTechnologies.development.map((tech, index) => (
                <li key={index} className={styles.techItem}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.techCard}>
            <h3 className={styles.techCategory}>Deploy</h3>
            <ul className={styles.techList}>
              {siteTechnologies.deployment.map((tech, index) => (
                <li key={index} className={styles.techItem}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles.techDescription}>
          Este site foi construído utilizando tecnologias modernas e boas práticas de desenvolvimento web.
          O Next.js foi escolhido por sua excelente performance, SEO otimizado e facilidade de desenvolvimento.
          A combinação de TypeScript com React proporciona uma experiência de desenvolvimento robusta e segura,
          enquanto o CSS Modules e Tailwind CSS garantem um design responsivo e consistente.
        </p>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Contato</h2>
        <div className={styles.contactGrid}>
          <a href="mailto:andersonmarinhoprofissional@gmail.com" className={styles.contactCard}>
            <span className={styles.contactIcon}>📧</span>
            <span className={styles.contactLabel}>Email</span>
          </a>
          <a href="https://linkedin.com/in/andersonmsmarinho" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <span className={styles.contactIcon}>💼</span>
            <span className={styles.contactLabel}>LinkedIn</span>
          </a>
          <a href="https://github.com/andersonmsmarinho" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <span className={styles.contactIcon}>💻</span>
            <span className={styles.contactLabel}>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
} 