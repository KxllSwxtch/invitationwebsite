# Wedding Invitation

Цифровое свадебное приглашение с анимациями и обратным отсчетом времени.

## Технологии

- React с Vite
- Tailwind CSS для стилей
- Framer Motion для анимаций
- Firebase для сохранения RSVP-ответов

## Локальная разработка

```bash
# Установка зависимостей
yarn install

# Запуск в режиме разработки
yarn dev

# Сборка для продакшена
yarn build

# Предпросмотр собранного проекта
yarn preview
```

## Деплой на Netlify

### Вариант 1: Через пользовательский интерфейс Netlify

1. Создайте аккаунт на [Netlify](https://www.netlify.com/)
2. Перейдите в панель управления и нажмите "New site from Git"
3. Подключите ваш репозиторий GitHub/GitLab/Bitbucket
4. Настройте параметры сборки:
   - Build command: `yarn build`
   - Publish directory: `dist`
5. Нажмите "Deploy site"

### Вариант 2: Деплой вручную

1. Соберите проект с помощью `yarn build`
2. Установите Netlify CLI: `npm install -g netlify-cli`
3. Войдите в аккаунт Netlify: `netlify login`
4. Разверните сайт: `netlify deploy --prod --dir=dist`

## Настройка переменных окружения Firebase

Для работы с Firebase создайте файл `.env.local` в корне проекта и добавьте следующие переменные:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Не забудьте добавить эти же переменные в настройках окружения на Netlify.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
