FROM node

WORKDIR /app

COPY . /app

RUN yarn && yarn build:client

EXPOSE 80
CMD node /app/index.js