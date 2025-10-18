FROM node:latest as build


WORKDIR /app

COPY package*.json .



FROM build as build-dev

RUN --mount=type=cache,target=/app/.npm \
    npm set cache /app/.npm && \
    npm install

COPY . .

CMD ["npm","run","dev"]



FROM build as build-prod


ENV NODE_ENV production

RUN --mount=type=cache,target=/app/.npm \
    npm set cache /app/.npm && \
    npm ci --only production

COPY . .

RUN npm run build

# FROM nginx:1.22-alpine
# FROM scratch

# COPY nginx.conf /etc/nginx/conf.d/default.conf
# WORKDIR /app

# COPY --from=build /app/dist .

EXPOSE 8080

CMD ["npm","run","preview"]


# FROM nginx:1.22-alpine


# COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/dist /usr/share/nginx/html

