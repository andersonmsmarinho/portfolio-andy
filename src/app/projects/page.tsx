import React from 'react';
import { getGitHubRepos } from '@/utils/github';
import styles from './projects.module.css';

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  topics: string[];
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
}

async function getProjects(): Promise<Project[]> {
  // Get GitHub repositories
  const repos = await getGitHubRepos(process.env.GITHUB_USERNAME || '');
  
  // Convert GitHub repos to our Project interface
  return repos.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description || 'Sem descrição',
    url: repo.url,
    topics: repo.topics,
    language: repo.language || 'Outro',
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    updatedAt: repo.updated_at ?? '',
  }));
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projetos Desenvolvidos</h1>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Meus Projetos</h2>
        <div className={styles.projectsGrid}>
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3>{project.name}</h3>
                  <span className={styles.language}>{project.language}</span>
                </div>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.topics}>
                  {project.topics.map((topic, index) => (
                    <span key={index} className={styles.topicTag}>{topic}</span>
                  ))}
                </div>
                <div className={styles.projectMeta}>
                  <div className={styles.stats}>
                    <span className={styles.stat}>
                      <svg viewBox="0 0 16 16" width="16" height="16">
                        <path fill="currentColor" d="M8 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L8 18.347l-6.116 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      {project.stars}
                    </span>
                    <span className={styles.stat}>
                      <svg viewBox="0 0 16 16" width="16" height="16">
                        <path fill="currentColor" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      </svg>
                      {project.forks}
                    </span>
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Ver no GitHub
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.loadingState}>
              <p>Nenhum projeto encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 