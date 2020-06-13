FROM node

WORKDIR /app

COPY . /app

RUN yarn && \
    cd recipies-frontend && yarn && \
    cd ../recipies-backend && yarn && \
    cd .. && yarn build:client

EXPOSE 80
CMD node /app/index.js