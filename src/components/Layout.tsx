import React from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Basic Header Content */}
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/academic-experience">Experiência Acadêmica</Link>
          <Link href="/professional-experience">Experiência Profissional</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/password-game">Jogo da Senha</Link>
        </nav>
      </header>
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        {/* Basic Footer Content */}
        <p>&copy; {new Date().getFullYear()} Anderson Marinho. All rights reserved.</p>
      </footer>
    </div>
  );
} 