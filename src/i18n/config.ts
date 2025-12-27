/**
 * i18n Configuration
 * Internationalization setup for Arabic and English
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';

// Import translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enExplore from './locales/en/explore.json';
import enStories from './locales/en/stories.json';
import enGames from './locales/en/games.json';
import enProgress from './locales/en/progress.json';

import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';
import arExplore from './locales/ar/explore.json';
import arStories from './locales/ar/stories.json';
import arGames from './locales/ar/games.json';
import arProgress from './locales/ar/progress.json';

import { STORAGE_KEYS } from '@/config/constants';

const LANGUAGE_STORAGE_KEY = STORAGE_KEYS.LANGUAGE;

// Language detector
const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  detect: async (callback: (lng: string) => void) => {
    try {
      // Try to get saved language from storage
      const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }

      // Fall back to device language
      const deviceLocale = Localization.locale || Localization.getLocales()[0]?.languageCode || 'en';
      const deviceLanguage = deviceLocale.split('-')[0];
      const supportedLanguage = ['en', 'ar'].includes(deviceLanguage)
        ? deviceLanguage
        : 'en';
      callback(supportedLanguage);
    } catch (error) {
      console.error('Error detecting language:', error);
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      console.error('Error caching language:', error);
    }
  },
};

// Initialize i18n
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        explore: enExplore,
        stories: enStories,
        games: enGames,
        progress: enProgress,
      },
      ar: {
        common: arCommon,
        home: arHome,
        explore: arExplore,
        stories: arStories,
        games: arGames,
        progress: arProgress,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

/**
 * Change app language and update RTL layout
 */
export const changeLanguage = async (language: 'en' | 'ar') => {
  try {
    const isRTL = language === 'ar';

    // Update i18n
    await i18n.changeLanguage(language);

    // Save language preference
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    // Update RTL layout if needed (requires app restart)
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);
      return { requiresRestart: true };
    }

    return { requiresRestart: false };
  } catch (error) {
    console.error('Error changing language:', error);
    throw error;
  }
};

/**
 * Get current language
 */
export const getCurrentLanguage = (): 'en' | 'ar' => {
  return i18n.language as 'en' | 'ar';
};

/**
 * Check if current language is RTL
 */
export const isRTL = (): boolean => {
  return I18nManager.isRTL;
};

export default i18n;
