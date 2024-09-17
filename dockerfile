# syntax = docker/dockerfile:1

ARG NODE_VERSION=21.6.2
FROM node:${NODE_VERSION}-slim as base

WORKDIR /

ENV NODE_ENV="production"

FROM base as build

COPY --link package.json ./
RUN npm install --omit=dev

COPY --link . .


FROM base

COPY --from=build / /

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
ENV HOST=0
CMD [ "node", "./server" ]
