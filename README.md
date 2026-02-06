# Monetix (Starter TCC) — Monorepo Nx

Este repositório organiza, em um único _workspace_, os artefatos de um sistema web (front-end e back-end) com foco em modularidade, reutilização e padronização do desenvolvimento. A solução é estruturada como **monorepo com Nx**, contemplando:

- **Aplicação Web (Front-end)** em **Next.js** (React) com **NextAuth**.
- **API (Back-end)** em **NestJS** com **TypeORM** e **PostgreSQL**.
- **Bibliotecas internas (libs)** para componentes, configuração, utilitários e funcionalidades de domínio.

> Nota: este README privilegia uma linguagem acadêmica e uma abordagem operacional (como executar, como evoluir e como manter a qualidade). Para explorar dependências entre projetos, recomenda-se o uso de `npx nx graph`.

---

## Sumário

1. [Visão geral](#visão-geral)
2. [Arquitetura do workspace (Nx)](#arquitetura-do-workspace-nx)
3. [Tecnologias e ferramentas](#tecnologias-e-ferramentas)
4. [Pré-requisitos](#pré-requisitos)
5. [Instalação](#instalação)
6. [Variáveis de ambiente](#variáveis-de-ambiente)
7. [Execução em desenvolvimento](#execução-em-desenvolvimento)
8. [Execução via Docker (PostgreSQL)](#execução-via-docker-postgresql)
9. [Build e execução em produção](#build-e-execução-em-produção)
10. [Testes, lint e qualidade](#testes-lint-e-qualidade)
11. [Storybook (componentização)](#storybook-componentização)
12. [Documentação da API (Swagger/OpenAPI)](#documentação-da-api-swaggeropenapi)
13. [Boas práticas para evolução do código](#boas-práticas-para-evolução-do-código)
14. [Troubleshooting (problemas comuns)](#troubleshooting-problemas-comuns)

---

## Visão geral

O projeto segue uma separação clássica de responsabilidades:

- **Front-end**: interface do usuário, autenticação e consumo da API.
- **Back-end**: regras de negócio e persistência de dados no PostgreSQL.
- **Bibliotecas**: código reutilizável, dividido por camadas (shared/feature/utils), importado por meio de _path aliases_ (`@monetix/...`).

Em termos operacionais, os _ports_ típicos são:

- **API (NestJS)**: `http://localhost:3000`
- **Front (Next.js)**: `http://localhost:3004`
- **PostgreSQL (Docker)**: `localhost:5432`

---

## Arquitetura do workspace (Nx)

O Nx atua como _orquestrador_ de build, testes, lint e execução. A estrutura principal é:

- `apps/api`: API em NestJS (camadas por módulo: auth, student, course, finances, etc.)
- `apps/starter-tcc`: aplicação Next.js (Pages Router), autenticação com NextAuth e _middleware_ de proteção de rotas
- `libs/shared/*`: bibliotecas compartilhadas (UI, assets, config)
- `libs/feature/*`: bibliotecas por recorte funcional (login, finances, courses, professor)
- `libs/utils/*`: utilitários (core e integrações para Next)

### Convenção de imports (path aliases)

O `tsconfig.base.json` define aliases como:

```ts
import { api } from '@monetix/shared/config';
import { LoginScreen } from '@monetix/feature/login';
```

Essa estratégia reduz acoplamento por caminhos relativos extensos e melhora a coesão por domínio.

---

## Tecnologias e ferramentas

Principais elementos empregados no repositório:

### Core

- **Nx**: monorepo, _task runner_ e cache local
- **TypeScript**: tipagem estática no front e no back

### Front-end

- **Next.js 15** + **React 18**
- **NextAuth v4**: autenticação (provider de credenciais) e sessões com JWT
- **MUI (Material UI)** + **styled-components**: UI e estilização
- **Axios** + **SWR**: consumo de API e _data fetching_

### Back-end

- **NestJS 10**: arquitetura modular e _dependency injection_
- **TypeORM**: ORM e mapeamento objeto-relacional
- **PostgreSQL**: banco de dados relacional
- **Swagger (NestJS Swagger)**: documentação interativa

### Qualidade e produtividade

- **Jest**: testes unitários
- **ESLint** + **Prettier**: lint e formatação
- **Husky** + **lint-staged**: _hooks_ de pré-commit para manter consistência
- **Storybook**: documentação e teste visual de componentes

---

## Pré-requisitos

Recomenda-se:

- **Node.js**: versão compatível com Next.js 15 (tipicamente `>= 18.18` ou Node 20 LTS)
- **Gerenciador de pacotes**: recomenda-se **Yarn** (há `yarn.lock` e hooks usando `yarn`)
- **Docker** e **Docker Compose**: para subir PostgreSQL de forma reprodutível

Recurso opcional, porém altamente recomendado:

- **Nx Console** (extensão do VS Code): facilita execução de targets, geração de código e inspeção do grafo

---

## Instalação

Na raiz do repositório:

```bash
yarn install
```

> Recomendação metodológica: utilize **apenas um gerenciador** (Yarn _ou_ npm) para evitar inconsistências entre `yarn.lock` e `package-lock.json`.

---

## Variáveis de ambiente

### Front-end (Next.js)

O front utiliza variáveis para apontar a base da API e configurar o NextAuth. No código, observa-se uso de `NEXT_PUBLIC_API_URL` (cliente HTTP) e `NEXTAUTH_SECRET` (assinatura/criptografia do JWT).

Recomendação prática (desenvolvimento): criar um arquivo `apps/starter-tcc/.env.local` **(não versionado)** com:

```dotenv
# Base da API consumida pelo navegador
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Base URL da aplicação Next (importante para callbacks/URLs geradas pelo NextAuth)
NEXTAUTH_URL=http://localhost:3004

# Segredo do NextAuth (NUNCA commitar em repositório público)
NEXTAUTH_SECRET=troque-este-valor-por-um-segredo-forte

# Opcional: utilizado em runtime config do Next (next.config.js)
API_URL=http://localhost:3000/api
```

Para gerar um segredo adequado:

```bash
openssl rand -base64 32
```

### Back-end (NestJS)

Atualmente, a configuração do banco no `AppModule` encontra-se definida diretamente no código (host `localhost`, porta `5432`, usuário/senha `postgres`, database `monetix`, `synchronize: true`). Para ambientes mais controlados (produção e CI), recomenda-se parametrizar via variáveis de ambiente, evitando valores sensíveis e permitindo variações por ambiente.

---

## Execução em desenvolvimento

### 1) Subir o PostgreSQL

```bash
docker compose up -d
```

### 2) Subir a API (NestJS)

```bash
yarn serve:api
```

Por padrão, a API inicia em `http://localhost:3000` e expõe o Swagger em `http://localhost:3000/api`.

### 3) Subir o Front-end (Next.js)

```bash
yarn start:app
```

O front inicia tipicamente em `http://localhost:3004`.

### Executar tudo em paralelo (Nx)

Uma alternativa conveniente é executar os dois servidores em paralelo:

```bash
npx nx run-many -t serve --projects=api,starter-tcc --parallel
```

---

## Execução via Docker (PostgreSQL)

O arquivo `docker-compose.yml` define um serviço `db` baseado em `postgres:latest` com:

- `POSTGRES_DB=monetix`
- `POSTGRES_USER=postgres`
- `POSTGRES_PASSWORD=postgres`
- Porta `5432:5432`

Observação técnica: o caminho de volume informado é `./pgdata:/var/lib/postgres/data`. Em imagens oficiais do Postgres, o diretório padrão de dados costuma ser `/var/lib/postgresql/data`. Caso o volume não persista como esperado, este é o primeiro ponto a ser verificado.

---

## Build e execução em produção

### Build

- Front-end:

```bash
yarn build:app
```

- API:

```bash
yarn build:api
```

### Execução em modo produção

- Front-end (server):

```bash
yarn start-serve:app
```

- API:

```bash
yarn start-serve:api
```

### Base path em produção (/monetix)

Em `apps/starter-tcc/next.config.js`, quando `NODE_ENV=production`, o Next é configurado com:

- `basePath: /monetix`
- `assetPrefix: /monetix`

Consequentemente, rotas e assets passam a ser servidos sob o prefixo `/monetix`.

---

## Testes, lint e qualidade

### Testes (Jest)

```bash
npx nx test starter-tcc
npx nx test api
```

Para listar _targets_ disponíveis por projeto:

```bash
npx nx show project starter-tcc
npx nx show project api
```

### Lint (ESLint)

```bash
npx nx lint starter-tcc
```

### Prettier

O repositório utiliza Prettier com `singleQuote: true`. Para formatar manualmente:

```bash
npx prettier . --write
```

### Hooks de pré-commit

O Husky executa `yarn pre-commit`, o qual aciona o `lint-staged` para:

- corrigir lint automaticamente quando possível
- aplicar formatação com Prettier nos arquivos alterados

Isso reduz variabilidade de estilo e previne a entrada de problemas triviais no histórico.

---

## Storybook (componentização)

Há scripts para Storybook em bibliotecas (por exemplo, UI compartilhada e features). Exemplos:

```bash
yarn start:storybook:shared-ui
yarn storybook:feature-login
```

---

## Documentação da API (Swagger/OpenAPI)

### Swagger gerado pela API

Ao executar a API, a documentação interativa é disponibilizada em:

- `http://localhost:3000/api`

O projeto usa `@nestjs/swagger` para construção do documento OpenAPI.

### Especificação OpenAPI em arquivo

Além do Swagger em runtime, existe um documento OpenAPI em `swagger.yaml`, útil para revisão, integração com clientes e validação de contrato.

---

## Boas práticas para evolução do código

### 1) Organização por domínio e reutilização via libs

Priorize a inclusão de código reutilizável em `libs/` em vez de duplicação em `apps/`. Em particular:

- `libs/shared/*`: elementos estáveis e transversais (UI, config, assets)
- `libs/feature/*`: funcionalidades completas e reutilizáveis
- `libs/utils/*`: utilitários e abstrações técnicas

### 2) Respeito às fronteiras (module boundaries)

O Nx e o ESLint impõem regras de fronteira entre projetos. Ao criar novas dependências, prefira:

- extrair utilitários para `libs/utils/*`
- extrair componentes para `libs/shared/ui`
- manter lógica de domínio em `libs/feature/*`

### 3) Padronização de qualidade

- escreva testes unitários para serviços, _mappers_ e regras de negócio
- mantenha o lint passando antes de abrir PR
- use Storybook para componentes com maior complexidade visual

### 4) Estratégia de execução e performance no Nx

Para mudanças incrementais, utilize o modelo de execução _affected_:

```bash
npx nx affected -t test
npx nx affected -t lint
```

O cache do Nx acelera builds e testes repetidos.

### 5) Segurança e segredos

- não versionar segredos em `.env` (use `.env.local` e, idealmente, um `.env.example`)
- tratar tokens e credenciais como dados sensíveis
- em produção, desabilitar `synchronize: true` no TypeORM e adotar migrações

---

## Troubleshooting (problemas comuns)

### Banco não conecta

- verifique se o container está ativo: `docker ps`
- confirme porta `5432` disponível
- confirme que a API está apontando para `localhost:5432` (ou ajuste conforme o ambiente)

### Login/NextAuth falha por URL/secret

- garanta `NEXTAUTH_SECRET` definido (segredo forte)
- garanta `NEXTAUTH_URL` apontando para a origem do front (ex.: `http://localhost:3004`)
- confira se `NEXT_PUBLIC_API_URL` aponta para a API (ex.: `http://localhost:3000/api`)

### Rotas com prefixo /monetix em produção

Se `NODE_ENV=production`, o front usa `basePath=/monetix`. Certifique-se de:

- acessar URLs com o prefixo (`/monetix/...`)
- configurar o proxy/reverse-proxy (quando houver) para preservar o prefixo

### Portas em uso

- API: altere `PORT` ao iniciar a API (variável de ambiente)
- Front: a porta padrão do `starter-tcc` é `3004` (config Nx)

---

## Referências rápidas

- Ver grafo do monorepo: `npx nx graph`
- Listar _targets_ de um projeto: `npx nx show project <nome>`
- Executar um target: `npx nx run <projeto>:<target>`
