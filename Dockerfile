# Stage 1: build Vite
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Opsional: ARG VITE_API_BASE_URL dan VITE_USE_MOCKS dibaca saat build
ARG VITE_API_BASE_URL=/api
ARG VITE_USE_MOCKS=true
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL VITE_USE_MOCKS=$VITE_USE_MOCKS
RUN npm run build

# Stage 2: serve via Nginx
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
