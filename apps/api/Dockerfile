FROM node:22.16.0-alpine3.21 AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn nx build api

RUN cp package.json yarn.lock ./apps/api/dist
WORKDIR /app/apps/api/dist
RUN yarn install --production --frozen-lockfile

FROM node:22.16.0-alpine3.21 AS runner
WORKDIR /app
COPY --from=builder /app/apps/api/dist ./
EXPOSE 3000
CMD ["node", "main.js"]
