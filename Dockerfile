FROM node:18.1.0-alpine3.15 as builder
RUN apk --no-cache --update --virtual build-dependencies add \
    python3 \
    make \
    g++
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

FROM nginx:1.21.6-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/static.conf /etc/nginx/conf.d
COPY --from=builder /app/dist/app /app/dist
