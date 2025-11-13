# Etapa de construcción
FROM node:22.12.0-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:22.12.0-alpine

WORKDIR /app

# Copiar solo lo necesario desde builder
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package*.json ./

# Exponer puerto
ENV PORT=3000
EXPOSE 3000

# Comando de inicio
CMD ["node", ".output/server/index.mjs"]
