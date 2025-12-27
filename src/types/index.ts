/**
 * Global Type Definitions
 */

export type Language = 'en' | 'ar';

export type AgeGroup = '6-8' | '9-12';

export type ContentType = 'story' | 'fact' | 'location' | 'game' | 'music';

export type GameType = 'memory' | 'puzzle' | 'quiz' | 'coloring' | 'word_search';

export type AchievementCategory = 'explorer' | 'reader' | 'gamer' | 'scholar';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

/**
 * Localized Text
 */
export interface LocalizedText {
  en: string;
  ar: string;
}

/**
 * User Profile
 */
export interface UserProfile {
  id: string;
  name: string;
  age: number;
  ageGroup: AgeGroup;
  preferredLanguage: Language;
  avatarUrl?: string;
  createdAt: Date;
  lastActiveAt: Date;
}

/**
 * User Progress
 */
export interface UserProgress {
  userId: string;
  currentLevel: number;
  totalPoints: number;
  storiesRead: number;
  gamesPlayed: number;
  factsViewed: number;
  locationsExplored: number;
  timeSpent: number; // in seconds
  lastActive: Date;
}

/**
 * Story
 */
export interface Story {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  summary: LocalizedText;
  ageGroup: AgeGroup;
  category: 'history' | 'culture' | 'daily-life' | 'nature' | 'heritage';
  coverImage: string;
  audioNarration?: {
    en?: string;
    ar?: string;
  };
  estimatedReadTime: number; // in minutes
  relatedFacts: string[];
  relatedLocations: string[];
  interactiveElements?: InteractiveElement[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

/**
 * Interactive Element
 */
export interface InteractiveElement {
  id: string;
  type: 'tap' | 'swipe' | 'drag' | 'quiz' | 'choice';
  position: { x: number; y: number };
  data: any;
}

/**
 * Fun Fact
 */
export interface FunFact {
  id: string;
  fact: LocalizedText;
  category: 'geography' | 'culture' | 'food' | 'nature' | 'history' | 'people';
  visualization: 'chart' | 'infographic' | 'image' | 'animation';
  visualAsset: string;
  relatedLocations?: string[];
  relatedStories?: string[];
  source?: string;
  ageGroup: AgeGroup;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Map Location
 */
export interface MapLocation {
  id: string;
  name: LocalizedText;
  type: 'city' | 'landmark' | 'natural-feature' | 'village';
  coordinates: {
    lat: number;
    lng: number;
  };
  description: LocalizedText;
  images: string[];
  funFacts: string[];
  audioGuide?: {
    en?: string;
    ar?: string;
  };
  relatedStories: string[];
  relatedLocations: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Achievement
 */
export interface Achievement {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  category: AchievementCategory;
  criteria: AchievementCriteria;
  rarity: Rarity;
  points: number;
  unlockedAt?: Date;
  isNew?: boolean;
}

/**
 * Achievement Criteria
 */
export interface AchievementCriteria {
  type: 'count' | 'sequence' | 'time' | 'score';
  target: number;
  metric: string; // e.g., 'storiesRead', 'gamesWon', 'locationsVisited'
}

/**
 * Game
 */
export interface Game {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  type: GameType;
  difficulty: 'easy' | 'medium' | 'hard';
  ageGroup: AgeGroup;
  thumbnail: string;
  estimatedPlayTime: number; // in minutes
  pointsReward: number;
  config: any; // Game-specific configuration
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Game Session
 */
export interface GameSession {
  id: string;
  gameId: string;
  userId: string;
  score: number;
  completed: boolean;
  timeSpent: number;
  startedAt: Date;
  completedAt?: Date;
}

/**
 * Music Track
 */
export interface MusicTrack {
  id: string;
  title: LocalizedText;
  artist: LocalizedText;
  description: LocalizedText;
  audioFile: string;
  thumbnail: string;
  duration: number; // in seconds
  category: 'traditional' | 'modern' | 'instrumental' | 'educational';
  tags: string[];
  createdAt: Date;
}

/**
 * App Settings
 */
export interface AppSettings {
  language: Language;
  volume: {
    music: number;
    sfx: number;
    narration: number;
    master: number;
  };
  autoPlayNarration: boolean;
  subtitlesEnabled: boolean;
  parentalControlsEnabled: boolean;
  analyticsEnabled: boolean;
  offlineMode: boolean;
  dataUsage: 'wifi-only' | 'always' | 'never';
}

/**
 * Content Manifest
 */
export interface ContentManifest {
  version: string;
  publishedAt: Date;
  changes: {
    newStories: string[];
    updatedStories: string[];
    newFacts: string[];
    newLocations: string[];
    newAchievements: string[];
    newGames: string[];
  };
  requiredAppVersion: string;
  assetPackages: AssetPackage[];
}

/**
 * Asset Package
 */
export interface AssetPackage {
  id: string;
  name: string;
  size: number; // in bytes
  downloadUrl: string;
  optional: boolean;
  priority: 'high' | 'medium' | 'low';
  checksum: string;
}

/**
 * Analytics Event
 */
export interface AnalyticsEvent {
  eventName: string;
  timestamp: Date;
  sessionId: string;
  properties?: Record<string, any>;
}

/**
 * Parent Report
 */
export interface ParentReport {
  userId: string;
  reportDate: Date;
  timeSpent: number;
  activitiesCompleted: number;
  achievementsUnlocked: number;
  favoriteContent: {
    stories: Story[];
    games: Game[];
    locations: MapLocation[];
  };
  progressSummary: {
    level: number;
    points: number;
    storiesRead: number;
    gamesPlayed: number;
  };
}
