# React TODO project

Учебный шаблон приложения со списком задач.

## Быстрый старт

```bash
npm install       # установить зависимости
npm run dev:all   # запустить mock API и dev-сервер одновременно
```

Либо по отдельности:

```bash
npm run mock      # mock API на http://localhost:3001
npm run dev       # dev-сервер на http://localhost:3000
```

## Технологии

- **React 19** + **React Router 8**
- **TypeScript 7**
- **Webpack 5** + **esbuild** (`esbuild-loader`)
- **CSS Modules** (чистый CSS, без препроцессоров)
- **Oxlint** (линтер) и **Oxfmt** (форматтер) вместо ESLint/Prettier
- **json-server** — локальный REST API для данных

## Скрипты

| Скрипт              | Что делает                                            |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | dev-сервер webpack (http://localhost:3000)            |
| `npm run dev:all`   | mock API + dev-сервер вместе                          |
| `npm run build`     | production-сборка в `dist/`                           |
| `npm run typecheck` | проверка типов (`tsc --noEmit`)                       |
| `npm run lint`      | линт через oxlint                                     |
| `npm run format`    | форматирование через oxfmt                            |
| `npm run mock`      | mock API на http://localhost:3001 (данные из db.json) |

## Данные

Данные берутся из `db.json` через `json-server` (REST API на `http://localhost:3001`).
Работа с сетью — в папке `src/api`, по файлу на сущность.

Доступные эндпоинты для `todos`:

| Метод       | URL                | Действие    |
| ----------- | ------------------ | ----------- |
| GET         | `/todos`           | список      |
| GET         | `/todos/:id`       | одна запись |
| POST        | `/todos`           | создать     |
| PUT / PATCH | `/todos/:id`       | обновить    |
| DELETE      | `/todos/:id`       | удалить     |
| GET         | `/todos?q=react`   | поиск       |
| GET         | `/todos?_sort=...` | сортировка  |

## Структура шаблона

```
.
├── .vscode                          # конфигурация под VS Code
├── dist                             # папка для билда (появится после npm run build)
├── public
│   └── index.html                   # корневой html (шаблон для HtmlWebpackPlugin)
├── src
│   ├── api                          # работа с сетью, файл под каждую сущность
│   │   └── todos.ts
│   ├── app                          # компоненты с бизнес-логикой (страницы)
│   │   └── TodoList                 # страница списка задач
│   │       ├── TodoList.tsx         # корневой файл компонента
│   │       └── TodoList.module.css  # стили компонента
│   ├── components                   # компоненты без бизнес-логики (dumb components)
│   │   ├── Checkbox
│   │   ├── Loader
│   │   ├── PageContainer
│   │   ├── SearchInput
│   │   ├── TextField
│   │   └── index.ts                 # реэкспорт всех компонентов
│   ├── constants                    # общие константы, разбитые по файлам
│   ├── router
│   │   └── router.tsx               # конфигурация роутера
│   ├── types                        # интерфейсы для сущностей, напр. для Todo
│   ├── utils                        # вспомогательные функции, разбитые по файлам
│   ├── index.tsx                    # точка входа в приложение
│   └── react-app-env.d.ts           # декларации модулей и переменных
├── .browserslistrc                  # список браузеров для webpack/esbuild
├── .editorconfig                    # настройки для редакторов
├── .gitignore                       # игнор-файл для git
├── .oxlintrc.json                   # конфиг oxlint
├── .oxfmtrc.json                    # конфиг oxfmt
├── db.json                          # данные для json-server
├── package.json
├── tsconfig.json                    # конфиг TypeScript
├── webpack.config.mjs               # конфиг webpack
└── README.md
```

## Правила по проекту

1. Один файл — один компонент.
2. Импорты относительные.
3. Типы (`types`), константы (`constants`), вспомогательные функции (`utils`) — в отдельных файлах.
4. Стили — через CSS Modules (`*.module.css`), классы подключаются как `styles.className`.
