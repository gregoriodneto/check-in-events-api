# 📋 Projeto: Sistema de Check-in

Este projeto é um sistema simples de eventos com check-ins de participantes, desenvolvido com Node.js, TypeScript, Prisma ORM e banco de dados SQLite.

## 🚀 Tecnologias
- Node.js
- TypeScript
- Express
- Prisma ORM
- SQLite

## 📦 Instalação
```bash
# Instale as dependências
npm install
```

## ⚙️ Configuração do Prisma
1. Gerar o client Prisma (depois de instalar as dependências):
```bash
npx prisma generate
```

2. Rodar as migrations (irá criar o banco dev.db):
```bash
npx prisma migrate dev --name init
```

3. (Opcional) Visualizar o banco de dados com Studio:
```bash
npx prisma studio
```

## ▶️ Executar o projeto
```bash
npm run dev
```

## 📂 Estrutura de Pastas (Clean Architecture)
```bash
src/
├── domain/
│   └── entities/
├── application/
│   └── usecases/
|   └── dtos/
|   └── mappers/
|   └── ports/
|   └── use-cases/
├── infrastructure/
│   └── database/
|   └── repositories/
├── interface/
│   └── controllers/
|   └── routes/
├── shared/
│   └── enums/
```

## ✅ Funcionalidades (Desafio)
- Criar eventos com data e hora
- Registrar participantes
- Fazer check-in
- Listar participantes com status de presença
- Filtros por data ou status