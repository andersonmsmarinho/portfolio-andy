import React from 'react';
import styles from './professional-experience.module.css';

interface ProfessionalExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  achievements?: string[];
}

interface Recognition {
  id: string;
  title: string;
  issuer: string;
  date: string;
  position?: string;
}

const professionalExperiences: ProfessionalExperience[] = [
  {
    id: 'cognitbuild',
    role: 'Gerente de Projetos',
    company: 'Cognitbuild Tecnologia Inova Simples (I.s)',
    period: 'Desde janeiro de 2025',
    location: 'Recife, PE',
    description: 'Gestão de projetos ágeis com foco em tecnologia e inovação.',
    responsibilities: [
      'Planejamento e priorização de entregas',
      'Facilitação de cerimônias ágeis (Daily, Planning, Review, Retrospective)',
      'Atuação proativa na remoção de impedimentos que afetam a performance da equipe',
      'Alinhamento contínuo e comunicação com stakeholders',
      'Garantia de entregas incrementais',
      'Promoção de ciclos de melhoria contínua com base em feedbacks e métricas ágeis',
      'Identificação e mitigação de riscos'
    ],
    technologies: ['Scrum', 'Kanban', 'Jira', 'Confluence', 'Métricas Ágeis']
  },
  {
    id: 'port-promotora',
    role: 'Analista de Projetos Pedagógico',
    company: 'Port Promotora',
    period: 'Desde janeiro de 2025',
    location: 'Recife, PE',
    description: 'Desenvolvimento e gestão de projetos educacionais.',
    responsibilities: [
      'Planejamento de cursos, trilhas e conteúdos',
      'Formação e Capacitação de Colaboradores',
      'Desenvolvimento e Avaliação de Materiais Didáticos',
      'Implementação de Metodologias Educacionais',
      'Acompanhamento do Processo de Ensino-Aprendizagem',
      'Suporte na Elaboração de Projetos Educacionais',
      'Controle e Gestão de Indicadores Educacionais'
    ],
    technologies: ['Design Instrucional', 'EAD', 'Métricas Educacionais']
  },
  {
    id: 'outlier-ai',
    role: 'Consultor',
    company: 'Outlier AI',
    period: 'Desde fevereiro de 2024',
    location: 'Remoto',
    description: 'Consultoria em inteligência artificial e análise de dados.',
    responsibilities: [
      'Análise e auditoria de dados',
      'Treinamento de modelos de inteligência artificial',
      'Aprimoramento de modelos de inteligência artificial',
      'Escrita técnica e criativa'
    ],
    technologies: ['Python', 'Machine Learning', 'NLP', 'Data Analysis']
  },
  {
    id: 'mindindex',
    role: 'Gerente de Projetos',
    company: 'MindIndex Ltda',
    period: 'Jan. 2024 até fev. 2025',
    location: 'Recife, PE',
    description: 'Gestão de projetos ágeis com foco em tecnologia e inovação.',
    responsibilities: [
      'Planejamento e priorização de entregas',
      'Facilitação de cerimônias ágeis (Daily, Planning, Review, Retrospective)',
      'Atuação proativa na remoção de impedimentos que afetam a performance da equipe',
      'Alinhamento contínuo e comunicação com stakeholders',
      'Garantia de entregas incrementais',
      'Promoção de ciclos de melhoria contínua com base em feedbacks e métricas ágeis',
      'Identificação e mitigação de riscos'
    ],
    technologies: ['Scrum', 'Kanban', 'Jira', 'Confluence', 'Métricas Ágeis']
  },
  {
    id: 'itau',
    role: 'Assistente de Negócios Caixa',
    company: 'Itaú Unibanco',
    period: 'Mar 2023 até jun. 2023',
    location: 'Recife, PE',
    description: 'Atendimento e gestão de relacionamento com clientes.',
    responsibilities: [
      'Abertura de contas',
      'Vendas de produtos e serviços bancários',
      'Relacionamento com clientes de baixa renda',
      'Atividades de caixa e tesouraria'
    ]
  },
  {
    id: 'sicredi',
    role: 'Assistente de Negócios',
    company: 'Sicredi',
    period: 'Nov. 2021 até fev. 2023',
    location: 'Recife, PE',
    description: 'Gestão de relacionamento com associados e vendas.',
    responsibilities: [
      'Abertura de contas',
      'Vendas de produtos e serviços bancários',
      'Assessoria em investimentos de renda fixa',
      'Relacionamento com associados de alta renda'
    ]
  },
  {
    id: 'pedragon',
    role: 'Auxiliar Administrativo Financeiro',
    company: 'Pedragon Autos Ltda',
    period: 'Jan. 2021 até jun. 2021',
    location: 'Recife, PE',
    description: 'Gestão administrativa e financeira.',
    responsibilities: [
      'Conferência de follow-up',
      'Pagamentos de contas, impostos e tributos',
      'Gestão de documentos',
      'Negociação com fornecedores',
      'Conciliação bancária'
    ]
  },
  {
    id: 'caixa',
    role: 'Atendimento ao Cliente',
    company: 'Caixa Econômica Federal',
    period: 'Jan. 2019 até dez. 2019',
    location: 'Recife, PE',
    description: 'Atendimento e gestão de relacionamento com clientes.',
    responsibilities: [
      'Triagem',
      'Vendas de produtos e serviços bancários',
      'Gestão de documentos',
      'Abertura de contas'
    ]
  }
];

const recognitions: Recognition[] = [
  {
    id: 'limcs',
    title: '1º Lugar – Prêmio LIMCS de Inovação Socioambiental',
    issuer: 'Laboratório de Inovação pelas Mudanças Climáticas e Sustentabilidade',
    date: 'Setembro de 2024'
  },
  {
    id: 'hacker-cidadao-11',
    title: '1º Lugar – Prêmio Hacker Cidadão 11.0',
    issuer: 'EMPREL; Prefeitura da Cidade do Recife',
    date: 'Julho de 2024'
  },
  {
    id: 'hacker-cidadao-13',
    title: '3º Lugar – Prêmio Hacker Cidadão 13.0',
    issuer: 'EMPREL; Prefeitura da Cidade do Recife',
    date: 'Maio de 2025'
  },
  {
    id: 'demoday',
    title: '3º Melhor Solução Digital (DemoDay 2024.1)',
    issuer: 'Porto Digital',
    date: 'Junho de 2024'
  },
  {
    id: 'sebrae-2022',
    title: '5º Lugar - Melhor Ideia de Negócio',
    issuer: 'Sebrae',
    date: 'Junho de 2022'
  },
  {
    id: 'startup-nordeste',
    title: '10º Lugar – Startup Nordeste 2024/2025',
    issuer: 'SEBRAE',
    date: 'Abril de 2025'
  },
  {
    id: 'sicredi',
    title: 'Colaborador Homenageado - Dia Internacional da Cooperativismo',
    issuer: 'Sicredi',
    date: 'Outubro de 2022'
  }
];

export default function ProfessionalExperiencePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experiência Profissional</h1>

      <section className={styles.timelineSection}>
        <div className={styles.timeline}>
          {professionalExperiences.map((experience) => (
            <div key={experience.id} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.roleHeader}>
                  <h2 className={styles.role}>{experience.role}</h2>
                  <span className={styles.company}>{experience.company}</span>
                </div>
                <div className={styles.metaInfo}>
                  <span className={styles.period}>{experience.period}</span>
                  <span className={styles.location}>{experience.location}</span>
                </div>
                <p className={styles.description}>{experience.description}</p>
                
                <div className={styles.responsibilities}>
                  <h3>Responsabilidades</h3>
                  <ul>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                {experience.technologies && (
                  <div className={styles.technologies}>
                    <h3>Tecnologias e Metodologias</h3>
                    <div className={styles.techTags}>
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.recognitionsSection}>
        <h2 className={styles.sectionTitle}>Reconhecimentos</h2>
        <div className={styles.recognitionsGrid}>
          {recognitions.map((recognition) => (
            <div key={recognition.id} className={styles.recognitionCard}>
              <h3>{recognition.title}</h3>
              <p className={styles.issuer}>{recognition.issuer}</p>
              <p className={styles.date}>{recognition.date}</p>
              {recognition.position && (
                <p className={styles.position}>{recognition.position}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 