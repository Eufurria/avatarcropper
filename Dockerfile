# syntax=docker/dockerfile:1

# Parcel 2.8 is built against the Node 18/20 era. The host may be newer.
FROM node:20-bookworm-slim AS deps
WORKDIR /app
COPY --link package.json package-lock.json ./
# Private registries: docker buildx build --secret id=npmrc,src="$HOME/.npmrc" .
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc,required=false \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Local testing with live reload. Compose targets this stage.
FROM deps AS dev
COPY --link --chown=node:node . .
RUN mkdir -p /app/.parcel-cache /app/dist \
    && chown node:node /app /app/.parcel-cache /app/dist
USER node
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 1234
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "1234"]

FROM deps AS build
COPY --link . .
RUN npm run build

# Deployment image: static files only, no Node toolchain.
# Official nginx listens on 80 as root; the unprivileged image cannot bind that port.
FROM nginx:1.27-alpine AS production
COPY --link --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
