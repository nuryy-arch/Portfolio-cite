// ============================================================
// ДАННЫЕ ПРОЕКТОВ — редактируйте здесь
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string | null; // null = проект в разработке
  imageUrl: string | null; // null = placeholder
  inDevelopment?: boolean;
}

export const projects: Project[] = [
  {
    id: 'dony-coffee',
    title: 'Dony Coffee',
    description:
      'Стильный сайт для кофейни с меню, атмосферными фотографиями и удобной навигацией. Адаптивный дизайн для всех устройств.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://donycoffee.vercel.app/',
    imageUrl: '/projects/dony-coffee.png',
  },
  {
    id: 'taskflow',
    title: 'TASKFLOW',
    description:
      'Веб-приложение для управления задачами с авторизацией, досками и удобным интерфейсом. Помогает организовать рабочий процесс.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://taskflow-app-nuryy.vercel.app/login',
    imageUrl: '/projects/taskflow.png',
  },
  {
    id: 'barber-studio',
    title: 'BARBER STUDIO',
    description:
      'Сайт для барбершопа с онлайн-записью, галереей работ, прайс-листом и стильным брутальным дизайном для мужской парикмахерской.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://barber-studio-theta.vercel.app',
    imageUrl: '/projects/barber-studio.png',
    inDevelopment: false,
  },
];

// ============================================================
// УСЛУГИ — что я разрабатываю
// ============================================================

export interface Service {
  title: string;
  description: string;
  iconName: string; // имя иконки из lucide-react
}

export const services: Service[] = [
  {
    title: 'Сайты для малого бизнеса',
    description:
      'Современные сайты, которые помогают привлекать клиентов и представлять ваш бизнес в интернете.',
    iconName: 'Building2',
  },
  {
    title: 'Лендинги и сайты услуг',
    description:
      'Одностраничные сайты с фокусом на конверсию — для продвижения продуктов и услуг.',
    iconName: 'Rocket',
  },
  {
    title: 'Каталоги товаров',
    description:
      'Удобные каталоги с фильтрацией, поиском и карточками товаров для вашего бизнеса.',
    iconName: 'ShoppingBag',
  },
  {
    title: 'Веб-приложения и панели управления',
    description:
      'Интерактивные веб-приложения и админ-панели для управления данными и процессами.',
    iconName: 'LayoutDashboard',
  },
];

// ============================================================
// ПРОЦЕСС РАБОТЫ
// ============================================================

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Обсуждение задачи',
    description:
      'Узнаю ваши цели, целевую аудиторию и пожелания к сайту. Определяем структуру и функционал.',
    iconName: 'MessageSquare',
  },
  {
    step: 2,
    title: 'Создание дизайна',
    description:
      'Разрабатываю визуальную концепцию, подбираю цвета, шрифты и продумываю расположение элементов.',
    iconName: 'Palette',
  },
  {
    step: 3,
    title: 'Разработка и тестирование',
    description:
      'Пишу чистый код, делаю адаптивную вёрстку и тестирую на разных устройствах и браузерах.',
    iconName: 'Code2',
  },
  {
    step: 4,
    title: 'Публикация сайта',
    description:
      'Размещаю сайт в интернете, подключаю домен и передаю вам все доступы.',
    iconName: 'Globe',
  },
];
