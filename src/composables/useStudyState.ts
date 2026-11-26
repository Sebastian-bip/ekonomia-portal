import { computed, ref } from 'vue';

export type StoredColorScheme = 'light' | 'dark' | null;
export type FontScale = 'standard' | 'large';

const COLOR_SCHEME_KEY = 'color-scheme';
const FONT_SCALE_KEY = 'ekonomia-font-scale';
const PROGRESS_KEY = 'ekonomia-completed-topics';

function safeGetStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage quota / blocked storage errors while still applying UI state
  }
}

function safeRemoveStorage(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Ignore storage errors
  }
}

function readStoredScheme(): StoredColorScheme {
  const raw = safeGetStorage(COLOR_SCHEME_KEY);
  return raw === 'light' || raw === 'dark' ? raw : null;
}

function getSystemScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readFontScale(): FontScale {
  return safeGetStorage(FONT_SCALE_KEY) === 'large' ? 'large' : 'standard';
}

function readCompletedTopics(): string[] {
  const raw = safeGetStorage(PROGRESS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === 'string') : [];
  } catch {
    return [];
  }
}

const storedScheme = ref<StoredColorScheme>(
  typeof window !== 'undefined' ? readStoredScheme() : null,
);
const systemScheme = ref<'light' | 'dark'>(
  typeof window !== 'undefined' ? getSystemScheme() : 'light',
);
const fontScale = ref<FontScale>(typeof window !== 'undefined' ? readFontScale() : 'standard');
const completedTopics = ref<string[]>(
  typeof window !== 'undefined' ? readCompletedTopics() : [],
);

let initialized = false;
let searchOpener: (() => void) | null = null;

function syncColorSchemeMeta(scheme: StoredColorScheme): void {
  if (typeof document === 'undefined') return;
  let meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'color-scheme';
    document.head.appendChild(meta);
  }
  meta.content = scheme ?? 'light dark';
}

function syncFontScaleAttr(scale: FontScale): void {
  if (typeof document === 'undefined') return;
  if (scale === 'large') {
    document.documentElement.dataset.fontScale = 'large';
  } else {
    delete document.documentElement.dataset.fontScale;
  }
}

export function initStudyState(): void {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  syncColorSchemeMeta(storedScheme.value);
  syncFontScaleAttr(fontScale.value);

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onMediaChange = (e: MediaQueryListEvent) => {
    // Only track resolved system preference; never retroactively remove a pinned storedScheme
    systemScheme.value = e.matches ? 'dark' : 'light';
  };
  mq.addEventListener('change', onMediaChange);

  window.addEventListener('storage', (event) => {
    if (event.key === COLOR_SCHEME_KEY) {
      storedScheme.value = readStoredScheme();
      syncColorSchemeMeta(storedScheme.value);
    } else if (event.key === FONT_SCALE_KEY) {
      fontScale.value = readFontScale();
      syncFontScaleAttr(fontScale.value);
    } else if (event.key === PROGRESS_KEY) {
      completedTopics.value = readCompletedTopics();
    }
  });
}

export function registerSearchOpener(fn: (() => void) | null): void {
  searchOpener = fn;
}

export function openGlobalSearch(): void {
  searchOpener?.();
}

export function useStudyState() {
  initStudyState();

  const resolvedScheme = computed<'light' | 'dark'>(
    () => storedScheme.value ?? systemScheme.value,
  );

  /**
   * Two-state toggle per modern-web-guidance `dark-mode-toggle`:
   * Target = opposite of currently rendered scheme.
   * If target differs from OS system preference -> store literally.
   * If target matches OS system preference -> remove stored value so it follows system again.
   */
  function toggleColorScheme(): void {
    const currentRendered = resolvedScheme.value;
    const target: 'light' | 'dark' = currentRendered === 'dark' ? 'light' : 'dark';
    const currentSystem = getSystemScheme();
    systemScheme.value = currentSystem;

    if (target !== currentSystem) {
      storedScheme.value = target;
      safeSetStorage(COLOR_SCHEME_KEY, target);
    } else {
      storedScheme.value = null;
      safeRemoveStorage(COLOR_SCHEME_KEY);
    }
    syncColorSchemeMeta(storedScheme.value);
  }

  function toggleFontScale(): void {
    const next: FontScale = fontScale.value === 'standard' ? 'large' : 'standard';
    fontScale.value = next;
    syncFontScaleAttr(next);
    safeSetStorage(FONT_SCALE_KEY, next);
  }

  function isTopicCompleted(slug: string): boolean {
    return completedTopics.value.includes(slug);
  }

  function toggleTopicCompleted(slug: string): void {
    const set = new Set(completedTopics.value);
    if (set.has(slug)) {
      set.delete(slug);
    } else {
      set.add(slug);
    }
    completedTopics.value = Array.from(set);
    safeSetStorage(PROGRESS_KEY, JSON.stringify(completedTopics.value));
  }

  return {
    storedScheme,
    systemScheme,
    resolvedScheme,
    fontScale,
    completedTopics,
    toggleColorScheme,
    toggleFontScale,
    isTopicCompleted,
    toggleTopicCompleted,
    openGlobalSearch,
  };
}
