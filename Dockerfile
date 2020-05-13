# Use latest LTS version of node
FROM node:erbium-alpine as base

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

FROM base as builder

COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
