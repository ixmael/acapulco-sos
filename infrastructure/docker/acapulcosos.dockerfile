FROM node:21-alpine as builder

COPY ./ /app
WORKDIR /app

RUN npm install

ARG CONTENTFUL_ACCESS_TOKEN
ARG CONTENTFUL_SPACEID

RUN npm run build

# Production
FROM node:21-alpine

ENV ENABLE_GATSBY_REFRESH_ENDPOINT=true
ENV GATSBY_TELEMETRY_DISABLED=1

COPY --from=builder /app /app
WORKDIR /app

ENTRYPOINT [ "/app/node_modules/.bin/gatsby" ]
CMD [ "serve", "-H", "0.0.0.0" ]
