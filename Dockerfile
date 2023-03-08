FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install --production

ENV NODE_ENV production

EXPOSE 8080

CMD [ "node", "app.js" ]