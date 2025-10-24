// Breakpoints для адаптивного дизайна
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultrawide: 1536,
};

// Анимации
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
};

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

// Цвета (дополнительно к Tailwind)
export const COLORS = {
  primary: {
    light: '#60a5fa',
    main: '#3b82f6',
    dark: '#2563eb',
  },
  secondary: {
    light: '#a78bfa',
    main: '#8b5cf6',
    dark: '#7c3aed',
  },
  success: {
    light: '#4ade80',
    main: '#22c55e',
    dark: '#16a34a',
  },
  warning: {
    light: '#fbbf24',
    main: '#f59e0b',
    dark: '#d97706',
  },
  error: {
    light: '#f87171',
    main: '#ef4444',
    dark: '#dc2626',
  },
};

// Навигация
export const NAV_LINKS = [
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'integrations', label: 'Integrations', href: '#integrations' },
  { id: 'learn', label: 'Learn', href: '#learn' },
];

// Соцсети
export const SOCIAL_LINKS = [
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
];

// Features данные
export const FEATURES = [
  {
    id: 'fast',
    title: 'Fast. Really fast.',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    color: 'yellow',
    icon: 'lightning',
  },
  {
    id: 'value',
    title: 'More bang for buck.',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    color: 'blue',
    icon: 'camera',
  },
  {
    id: 'secure',
    title: 'Safe and secure.',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    color: 'pink',
    icon: 'shield',
  },
];

// Blog posts
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Automating Daily Tasks from Your Phone',
    category: 'Improvements',
    date: 'April 24, 2022',
    excerpt: 'Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.',
    color: 'pink',
    emoji: '📱',
  },
  {
    id: 2,
    title: 'Can You Automate Group Learning?',
    category: 'Tips & Tricks',
    date: 'April 24, 2022',
    excerpt: 'Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.',
    color: 'blue',
    emoji: '🎓',
  },
  {
    id: 3,
    title: 'Our $3,000,000 B Round Investors',
    category: 'News',
    date: 'April 24, 2022',
    excerpt: 'Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.',
    color: 'yellow',
    emoji: '💰',
  },
];

// Footer links
export const FOOTER_LINKS = {
  info: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Support', href: '#support' },
  ],
  admin: [
    { label: 'Style Guide', href: '#style-guide' },
    { label: 'Licenses', href: '#licenses' },
    { label: 'Instructions', href: '#instructions' },
    { label: 'Changelog', href: '#changelog' },
    { label: 'Password', href: '#password' },
    { label: '404', href: '#404' },
  ],
  newsletter: [
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ],
};

// API endpoints (для будущего использования)
export const API_ENDPOINTS = {
  subscribe: '/api/subscribe',
  contact: '/api/contact',
  demo: '/api/demo',
};

// Локальное хранилище ключи
export const STORAGE_KEYS = {
  theme: 'whirl_theme',
  language: 'whirl_language',
  newsletter: 'whirl_newsletter_subscribed',
};
