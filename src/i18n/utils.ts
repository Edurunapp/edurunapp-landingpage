// src/i18n/utils.ts
import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const translations = {
  es,
  en,
};

export function getLangFromUrl(url: URL): 'es' | 'en' {
  const pathname = url.pathname;
  // Check if it's English docs
  if (pathname.includes('/docs/en/')) return 'en';
  // Check if it's English regular page
  const [, lang] = pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: 'es' | 'en') {
  return translations[lang];
}

// Document mapping between Spanish and English
const docsMapping: Record<string, string> = {
  // Spanish to English
  'guia-docente': 'teacher-guide',
  'arquitectura': 'architecture',
  'instalacion/canvas': 'installation/canvas',
  'instalacion/moodle': 'installation/moodle',
  'instalacion/blackboard': 'installation/blackboard',
  // English to Spanish (reverse)
  'teacher-guide': 'guia-docente',
  'architecture': 'arquitectura',
  'installation/canvas': 'instalacion/canvas',
  'installation/moodle': 'instalacion/moodle',
  'installation/blackboard': 'instalacion/blackboard',
};

// Helper to get alternate URL for language switching
export function getAlternateUrl(currentPath: string, targetLang: 'es' | 'en'): string {
  // Handle docs specially - map documents between languages
  if (currentPath.includes('/docs/')) {
    // Extract the document slug, removing any language prefix
    let docSlug = currentPath
      .replace(/^\/docs\/en\//, '') // Remove /docs/en/ prefix
      .replace(/^\/docs\//, '')      // Remove /docs/ prefix
      .replace(/\/$/, '');             // Remove trailing slash
    
    if (targetLang === 'es') {
      // Going to Spanish - map English slug to Spanish
      const spanishSlug = docsMapping[docSlug] || docSlug;
      return `/docs/${spanishSlug}`;
    } else {
      // Going to English - map Spanish slug to English
      const englishSlug = docsMapping[docSlug] || docSlug;
      return `/docs/en/${englishSlug}`;
    }
  }
  
  // Handle regular pages
  if (targetLang === 'es') {
    // Remove /en prefix - replace /en or /en/
    const result = currentPath.replace(/^\/en\/?/, '/');
    return result === '' ? '/' : result;
  } else {
    // Add /en prefix if not already there
    if (currentPath.startsWith('/en')) {
      return currentPath;
    }
    // Handle root specially
    if (currentPath === '/') {
      return '/en/';
    }
    // Add /en prefix to other paths
    return `/en${currentPath}`;
  }
}
