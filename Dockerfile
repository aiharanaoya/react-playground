FROM mcr.microsoft.com/playwright:v1.57.0-noble

RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm i
