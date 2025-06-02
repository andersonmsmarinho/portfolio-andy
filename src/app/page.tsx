'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const sections = [
  {
    title: 'Sobre',
    description: 'Conheça minha trajetória profissional e habilidades',
    icon: '👋',
    path: '/about',
    color: '#4299e1'
  },
  {
    title: 'Experiência Profissional',
    description: 'Minha jornada profissional e conquistas',
    icon: '💼',
    path: '/professional-experience',
    color: '#48bb78'
  },
  {
    title: 'Experiência Acadêmica',
    description: 'Formação acadêmica e certificações',
    icon: '🎓',
    path: '/academic-experience',
    color: '#ed8936'
  },
  {
    title: 'Projetos',
    description: 'Conheça meus projetos e contribuições',
    icon: '🚀',
    path: '/projects',
    color: '#9f7aea'
  },
  {
    title: 'Jogo da Senha',
    description: 'Divirta-se com este jogo de lógica',
    icon: '🎮',
    path: '/password-game',
    color: '#f56565'
  }
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>Olá, eu sou</span>
          <span className={styles.name}>Andy</span>
        </h1>
        <p className={styles.subtitle}>
          Gerente de Projetos & Desenvolvedor
        </p>
        <div className={styles.heroDescription}>
          <p>
            Transformando ideias em realidade através de tecnologia e inovação.
            Especialista em gestão de projetos ágeis e desenvolvimento de soluções digitais.
          </p>
        </div>
      </header>

      <section className={styles.sectionsGrid}>
        {sections.map((section, index) => (
          <Link
            key={index}
            href={section.path}
            className={styles.sectionCard}
            style={{ '--card-color': section.color } as React.CSSProperties}
          >
            <div className={styles.sectionIcon}>{section.icon}</div>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionDescription}>{section.description}</p>
            </div>
            <div className={styles.sectionArrow}>→</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
