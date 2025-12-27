/**
 * App Constants
 */

export const APP_CONFIG = {
  APP_NAME: 'Tell Me About Palestine',
  APP_NAME_AR: 'احكيلي عن فلسطين',
  VERSION: '1.0.0',
  BUILD_NUMBER: 1,

  // Supported Languages
  SUPPORTED_LANGUAGES: ['en', 'ar'] as const,
  DEFAULT_LANGUAGE: 'en' as const,

  // Age Groups
  AGE_GROUPS: {
    YOUNG: { min: 6, max: 8, label: '6-8 years' },
    OLDER: { min: 9, max: 12, label: '9-12 years' },
  },

  // Content Types
  CONTENT_TYPES: {
    STORY: 'story',
    FACT: 'fact',
    LOCATION: 'location',
    GAME: 'game',
    MUSIC: 'music',
  } as const,

  // Game Types
  GAME_TYPES: {
    MEMORY: 'memory',
    PUZZLE: 'puzzle',
    QUIZ: 'quiz',
    COLORING: 'coloring',
    WORD_SEARCH: 'word_search',
  } as const,

  // Achievement Categories
  ACHIEVEMENT_CATEGORIES: {
    EXPLORER: 'explorer',
    READER: 'reader',
    GAMER: 'gamer',
    SCHOLAR: 'scholar',
  } as const,

  // Rarity Levels
  RARITY: {
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic',
    LEGENDARY: 'legendary',
  } as const,

  // Audio Settings
  AUDIO: {
    DEFAULT_VOLUME: 0.7,
    MUSIC_VOLUME: 0.5,
    SFX_VOLUME: 0.8,
    NARRATION_VOLUME: 1.0,
  },

  // Sync Settings
  SYNC: {
    AUTO_SYNC_INTERVAL: 1000 * 60 * 30, // 30 minutes
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 2000, // 2 seconds
  },

  // Cache Settings
  CACHE: {
    MAX_SIZE_MB: 200,
    CLEANUP_THRESHOLD_MB: 180,
  },

  // Progress Tracking
  PROGRESS: {
    POINTS_PER_STORY: 10,
    POINTS_PER_GAME: 5,
    POINTS_PER_FACT: 2,
    POINTS_PER_LOCATION: 3,
  },

  // Parent Gate Settings
  PARENT_GATE: {
    TIMEOUT_SECONDS: 30,
    MATH_DIFFICULTY: 'medium',
  },
};

export const STORAGE_KEYS = {
  LANGUAGE: '@app/language',
  USER_PROFILE: '@app/user_profile',
  PROGRESS: '@app/progress',
  SETTINGS: '@app/settings',
  CONTENT_VERSION: '@app/content_version',
  ACHIEVEMENTS: '@app/achievements',
  FAVORITES: '@app/favorites',
  ANALYTICS_CONSENT: '@app/analytics_consent',
  ONBOARDING_COMPLETED: '@app/onboarding_completed',
};

export const API_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_API_URL || 'https://api.palestine-education.app',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Mascot Names
export const MASCOTS = {
  OLIVE_TREE: {
    id: 'olive_tree',
    name: 'Zaytoun',
    nameAr: 'زيتون',
  },
  EXPLORER: {
    id: 'explorer',
    name: 'Noor',
    nameAr: 'نور',
  },
  BIRD: {
    id: 'bird',
    name: 'Huda',
    nameAr: 'هدى',
  },
} as const;

// Navigation Routes
export const ROUTES = {
  SPLASH: 'Splash',
  ONBOARDING: 'Onboarding',
  HOME: 'Home',
  EXPLORE: 'Explore',
  EXPLORE_REGION: 'ExploreRegion',
  FUN_FACTS: 'FunFacts',
  STORIES: 'Stories',
  STORY_READER: 'StoryReader',
  GAMES: 'Games',
  GAME_PLAY: 'GamePlay',
  MUSIC: 'Music',
  PROGRESS: 'Progress',
  PARENT: 'Parent',
  PARENT_DASHBOARD: 'ParentDashboard',
  PARENT_SETTINGS: 'ParentSettings',
} as const;

export type RouteNames = typeof ROUTES[keyof typeof ROUTES];

// Screen Dimensions (for responsive design)
export const SCREEN_BREAKPOINTS = {
  SMALL: 320,
  MEDIUM: 375,
  LARGE: 414,
  TABLET: 768,
  LARGE_TABLET: 1024,
};

export default APP_CONFIG;
