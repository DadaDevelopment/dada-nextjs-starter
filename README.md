# Next.js starter for Dada Cloud

[![Deploy to Dada Cloud](https://img.shields.io/badge/Deploy%20to-Dada%20Cloud-2563eb?style=for-the-badge)](https://cloud.dada-tuda.ru/deploy?repo=DadaDevelopment/dada-nextjs-starter&utm_source=github_template&utm_campaign=nextjs)

Минимальный шаблон Next.js, готовый к деплою из GitHub в **[Dada Cloud](https://cloud.dada-tuda.ru)** — российское облако для разработчиков.

## Зачем это нужно

Vercel и Heroku больше не принимают российские карты, а часть их инфраструктуры недоступна из РФ без VPN. Dada Cloud — деплой прямо из GitHub-репозитория, оплата рублями, данные хранятся в России (152-ФЗ). Есть бесплатный тариф.

## Как задеплоить

1. Нажми **Use this template → Create a new repository** (или форкни репозиторий).
2. Зарегистрируйся на [cloud.dada-tuda.ru](https://cloud.dada-tuda.ru/deploy?repo=DadaDevelopment/dada-nextjs-starter&utm_source=github_template&utm_campaign=nextjs).
3. Подключи свой GitHub, выбери этот репозиторий — Dada соберёт образ по `Dockerfile` и выдаст HTTPS-домен.
4. Каждый `git push` пересобирает приложение автоматически.

## Локальный запуск

```bash
npm install
npm run dev
# http://localhost:3000
```

## Что внутри

- `app/` — Next.js App Router, одна страница.
- `Dockerfile` — production-сборка (standalone), Dada использует его для деплоя.

## Лицензия

MIT — используй как хочешь.
