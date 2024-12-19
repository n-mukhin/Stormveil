FROM node:18-alpine as builder
WORKDIR /app
COPY app/package*.json .
RUN npm install
COPY app/ .
RUN npm run build || true

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "server.js"]
