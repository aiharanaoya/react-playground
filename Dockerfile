FROM mcr.microsoft.com/playwright:v1.58.0-noble

RUN npm i -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm i
