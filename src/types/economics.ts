export type Track = 'micro' | 'macro';

export type CalloutVariant = 'definition' | 'law' | 'trap' | 'tip' | 'example';

export interface CalloutBlock {
  id?: string;
  variant: CalloutVariant;
  title: string;
  content: string;
  points?: string[];
}

export interface FormulaSymbol {
  symbol: string;
  meaning: string;
}

export interface FormulaBlock {
  id?: string;
  title?: string;
  latex: string;
  plainReading?: string;
  symbols?: FormulaSymbol[];
  note?: string;
}

export interface ComparisonTable {
  caption?: string;
  headers: string[];
  rows: string[][];
  highlightFirstColumn?: boolean;
}

export type GraphType =
  | 'supply-demand'
  | 'elasticity-compare'
  | 'monopoly'
  | 'consumer'
  | 'cost-curves'
  | 'gdp-chart';

export interface GraphEmbed {
  type: GraphType;
  /**
   * Preset identifier understood by the target graph component:
   * - supply-demand: 'sandbox' | 'roz3a-q20' | 'cigars-q3' | 'oranges-q4' | 'football-q5' | 'chocolate-q6' | 'good-a-equilibrium' | 'price-controls'
   * - elasticity-compare: 'riviera-vs-cars' | 'tax-incidence' | 'demand-elasticity'
   * - monopoly: 'q180-dwl' | 'standard' | 'monopoly-vs-competition'
   * - consumer: 'interactive' | 'income-shift' | 'price-rotation'
   * - cost-curves: 'interactive' | 'shutdown-point'
   * - gdp-chart: 'both' | 'nominal-vs-real' | 'gdp-components'
   */
  preset?: string;
  title?: string;
  caption?: string;
  interactive?: boolean;
}

export interface QuickCheckQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TopicSubsection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  callouts?: CalloutBlock[];
  formulas?: FormulaBlock[];
  table?: ComparisonTable;
  graph?: GraphEmbed;
}

export interface TopicSection {
  id: string;
  title: string;
  summary?: string;
  paragraphs?: string[];
  bullets?: string[];
  callouts?: CalloutBlock[];
  formulas?: FormulaBlock[];
  table?: ComparisonTable;
  graph?: GraphEmbed;
  subsections?: TopicSubsection[];
  quickCheck?: QuickCheckQuestion;
}

export interface Topic {
  slug: string;
  track: Track;
  order: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  sourceLecture: string;
  estimatedMinutes: number;
  examWeight: 'kluczowa' | 'wysoka' | 'średnia';
  learningObjectives: string[];
  keyTakeaways: string[];
  sections: TopicSection[];
}

export type ExerciseDifficulty = 'podstawowe' | 'średnie' | 'kolokwium';

export type ExerciseCategory =
  | 'popyt-i-podaz'
  | 'elastycznosc'
  | 'monopol-i-koszty'
  | 'konsument'
  | 'makro-pkb';

export interface ExerciseStep {
  stepNumber: number;
  title: string;
  explanation: string;
  latex?: string;
  result?: string;
}

export interface LectureExercise {
  id: string;
  numberLabel: string;
  title: string;
  sourceBadge: string;
  track: Track;
  category: ExerciseCategory;
  difficulty: ExerciseDifficulty;
  topicSlug: string;
  originalStatement: string;
  dataTable?: ComparisonTable;
  intuition: string;
  steps: ExerciseStep[];
  formulas?: FormulaBlock[];
  finalAnswer: string;
  graph?: GraphEmbed;
  examTraps?: string[];
}

export interface ExamFormatTip {
  title: string;
  badge?: string;
  description: string;
  points?: string[];
}

export interface ExamAbcdQuestion {
  id: string;
  track: Track;
  topicSlug?: string;
  sourceNote?: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  trapNote?: string;
}

export interface ExamSentenceCompletion {
  id: string;
  track: Track;
  topicSlug?: string;
  promptBefore: string;
  blankAnswer: string;
  promptAfter?: string;
  hint?: string;
  fullExplanation: string;
}

export interface ExamFlashcard {
  id: string;
  track: Track;
  topicSlug?: string;
  term: string;
  category: string;
  definition: string;
  example?: string;
  formulaLatex?: string;
}

export interface ExamCalculationProblem {
  id: string;
  track: Track;
  topicSlug?: string;
  title: string;
  difficulty: ExerciseDifficulty;
  statement: string;
  given?: string[];
  hint: string;
  steps: ExerciseStep[];
  finalAnswer: string;
}

export interface ExamData {
  overview: {
    title: string;
    subtitle: string;
    seniorTipCallout: CalloutBlock;
    structureCards: ExamFormatTip[];
    studyStrategySteps: string[];
  };
  abcdQuestions: ExamAbcdQuestion[];
  sentenceCompletions: ExamSentenceCompletion[];
  flashcards: ExamFlashcard[];
  calculationProblems: ExamCalculationProblem[];
}

export interface GlossaryEntry {
  id: string;
  term: string;
  englishTerm?: string;
  track: Track;
  topicSlug: string;
  category: string;
  definition: string;
  example?: string;
  formulaLatex?: string;
  isExamKey?: boolean;
}

export interface FormulaReferenceEntry {
  id: string;
  name: string;
  track: Track;
  topicSlug: string;
  category: string;
  latex: string;
  plainReading: string;
  symbols: FormulaSymbol[];
  whenToUse: string;
  examTrap?: string;
}

export interface SearchResultItem {
  id: string;
  kind: 'topic' | 'section' | 'glossary' | 'formula' | 'exercise';
  title: string;
  subtitle: string;
  track?: Track;
  to: string;
  keywords: string;
}
