FROM node:latest as build

WORKDIR /app

COPY package*.json .

FROM build as dev

RUN  --mount=type=cache,target=/app/.npm \
     npm set cache /app/.npm  && npm install

COPY ./src .

EXPOSE 3000

CMD ["npm" ,"run" ,"dev"]

FROM dev as prod

ENV NODE_ENV production

RUN  --mount=type=cache,target=/app/.npm \
     npm set cache /app/.npm  && npm ci --only=production


USER node

COPY --chown=node:node ./src .

EXPOSE 3000

CMD ["node","index.js"]
