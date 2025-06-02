import React from 'react';
import styles from './academic-experience.module.css';

interface AcademicExperience {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export default function AcademicExperiencePage() {
  const academicExperiences: AcademicExperience[] = [
    {
      degree: "Tecnólogo em Sistemas para Internet",
      institution: "Universidade Católica de Pernambuco",
      period: "Março 2024 - Julho 2026",
      description: "Formação focada em desenvolvimento web, programação e tecnologias da internet.",
    },
    {
      degree: "Bacharelado em Administração de Empresas",
      institution: "Centro Universitário das Américas (FAM)",
      period: "Agosto 2020 - Julho 2024",
      description: "Formação em gestão empresarial, finanças e administração.",
    },
    {
      degree: "Técnico em Administração de Empresas",
      institution: "ETE Prof. Antônio Carlos Gomes da Costa (ETEPAC)",
      period: "Outubro 2019 - Julho 2021",
      description: "Formação técnica em administração e gestão empresarial.",
    }
  ];

  const certifications: Certification[] = [
    {
      title: "Foundations of Project Management",
      issuer: "Google",
      date: "Setembro 2023",
      description: "Fundamentos de gerenciamento de projetos e metodologias ágeis."
    },
    {
      title: "Financial Market",
      issuer: "Universidade de Yale",
      date: "Fevereiro 2023",
      description: "Estudos avançados sobre mercados financeiros e investimentos."
    },
    {
      title: "Compliance Legal, Ética e Análise do Perfil do Investidor",
      issuer: "ANBIMA",
      date: "Agosto 2021",
      description: "Certificação em compliance e análise de perfil de investimento."
    },
    {
      title: "Empreendedorismo",
      issuer: "FIA Business School",
      date: "Setembro 2021",
      description: "Fundamentos de empreendedorismo e gestão de negócios."
    },
    {
      title: "Trilha do Mercado Financeiro de A à Z",
      issuer: "ANBIMA Certificação e Educação",
      date: "Agosto 2021",
      description: "Formação completa sobre mercado financeiro."
    },
    {
      title: "Trilha do Microsoft Excel 2016 - Do Básico ao Intermediário",
      issuer: "Fundação Bradesco",
      date: "Setembro 2021",
      description: "Formação em Excel para análise de dados e gestão."
    }
  ];

  const languages = [
    { language: "Inglês", level: "Proficiente (C2)" },
    { language: "Português", level: "Nativo" }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experiência Acadêmica</h1>
      
      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Formação Acadêmica</h2>
        <div className={styles.timeline}>
          {academicExperiences.map((experience, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.degree}>{experience.degree}</h3>
                <h4 className={styles.institution}>{experience.institution}</h4>
                <p className={styles.period}>{experience.period}</p>
                <p className={styles.description}>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.certificationsSection}>
        <h2 className={styles.sectionTitle}>Certificações</h2>
        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationCard}>
              <h3>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <p className={styles.date}>{cert.date}</p>
              {cert.description && <p className={styles.description}>{cert.description}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.languagesSection}>
        <h2 className={styles.sectionTitle}>Idiomas</h2>
        <div className={styles.languagesGrid}>
          {languages.map((lang, index) => (
            <div key={index} className={styles.languageCard}>
              <h3>{lang.language}</h3>
              <p>{lang.level}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 