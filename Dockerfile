# Etapa de construcción
FROM node:22.12.0-slim AS builder

WORKDIR /app

# Instalar pnpm y dependencias de build
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Copiar archivos de dependencias
COPY package.json ./

# Instalar dependencias
RUN pnpm install --no-frozen-lockfile

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN pnpm run build

# Etapa de producción
FROM node:22.12.0-slim

WORKDIR /app

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# Copiar solo lo necesario desde builder
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json ./

# Exponer puerto
ENV PORT=3000
EXPOSE 3000

# Comando de inicio
CMD ["node", ".output/server/index.mjs"]
