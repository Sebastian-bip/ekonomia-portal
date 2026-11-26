import { microTopics } from './topics-micro';
import { macroTopics } from './topics-macro';
import { lectureExercises } from './exercises';
import { examData } from './exam';
import { glossaryEntries, formulaEntries } from './glossary';
import type { SearchResultItem, Topic } from '@/types/economics';

export {
  microTopics,
  macroTopics,
  lectureExercises,
  examData,
  glossaryEntries,
  formulaEntries,
};

export const allTopics: Topic[] = [...microTopics, ...macroTopics].sort(
  (a, b) => a.order - b.order,
);

export function getTopicBySlug(slug: string): Topic | undefined {
  return allTopics.find((t) => t.slug === slug);
}

export function getAdjacentTopics(slug: string): { prev: Topic | null; next: Topic | null } {
  const index = allTopics.findIndex((t) => t.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? allTopics[index - 1] : null,
    next: index < allTopics.length - 1 ? allTopics[index + 1] : null,
  };
}

export function buildSearchIndex(): SearchResultItem[] {
  const items: SearchResultItem[] = [];

  for (const topic of allTopics) {
    items.push({
      id: `topic-${topic.slug}`,
      kind: 'topic',
      title: topic.title,
      subtitle: `${topic.track === 'micro' ? 'Mikroekonomia' : 'Makroekonomia'} • ${topic.subtitle}`,
      track: topic.track,
      to: `/temat/${topic.slug}`,
      keywords: [topic.title, topic.shortTitle, topic.subtitle, ...topic.learningObjectives].join(' '),
    });

    for (const section of topic.sections) {
      items.push({
        id: `section-${topic.slug}-${section.id}`,
        kind: 'section',
        title: section.title,
        subtitle: `Sekcja w: ${topic.shortTitle}`,
        track: topic.track,
        to: `/temat/${topic.slug}#${section.id}`,
        keywords: [
          section.title,
          section.summary ?? '',
          ...(section.paragraphs ?? []),
          ...(section.bullets ?? []),
        ].join(' '),
      });
    }
  }

  for (const entry of glossaryEntries) {
    items.push({
      id: `glossary-${entry.id}`,
      kind: 'glossary',
      title: entry.term,
      subtitle: entry.definition,
      track: entry.track,
      to: `/wzory?tab=definicje&q=${encodeURIComponent(entry.term)}`,
      keywords: [entry.term, entry.englishTerm ?? '', entry.category, entry.definition].join(' '),
    });
  }

  for (const formula of formulaEntries) {
    items.push({
      id: `formula-${formula.id}`,
      kind: 'formula',
      title: formula.name,
      subtitle: formula.plainReading,
      track: formula.track,
      to: `/wzory?tab=wzory&q=${encodeURIComponent(formula.name)}`,
      keywords: [formula.name, formula.category, formula.plainReading, formula.whenToUse, formula.latex].join(' '),
    });
  }

  for (const ex of lectureExercises) {
    items.push({
      id: `exercise-${ex.id}`,
      kind: 'exercise',
      title: `${ex.numberLabel}: ${ex.title}`,
      subtitle: ex.originalStatement,
      track: ex.track,
      to: `/cwiczenia#${ex.id}`,
      keywords: [ex.numberLabel, ex.title, ex.sourceBadge, ex.originalStatement, ex.intuition, ex.finalAnswer].join(' '),
    });
  }

  return items;
}
