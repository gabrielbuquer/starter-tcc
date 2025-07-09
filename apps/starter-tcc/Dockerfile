# Base image: Node.js 22.14.0 running on Alpine Linux 3.21 with the latest available patch (e.g. 3.21.3)
FROM node:22.16.0-alpine3.21 AS base

LABEL APPLICATION="monetix-front"

ARG OPERATING_SYSTEM
ARG CONF

RUN echo $CONF
RUN echo $OPERATING_SYSTEM

WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# NX uses a folder for caching
RUN mkdir -p .nx/cache
RUN chown nextjs .nx/cache
ENV NX_SKIP_NX_CACHE=true

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs apps/starter-tcc/dist/.next/standalone ./
COPY --chown=nextjs:nodejs apps/starter-tcc/dist/.next/static ./apps/starter-tcc/dist/.next/static
COPY --chown=nextjs:nodejs apps/starter-tcc/dist/public ./apps/starter-tcc/public

USER nextjs
ENV PORT=3001
EXPOSE ${PORT}
ENV HOSTNAME="0.0.0.0"

# ref https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1
ENV DD_TRACE_DISABLED_PLUGINS=fs

CMD ["node", "--require", "./apps/starter-tcc/server.js", "-p", "3001"]
