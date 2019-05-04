FROM node:10.15.3-alpine

COPY config config
COPY generated generated
COPY src src
COPY botfile.js botfile.js
COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i

EXPOSE 3000

CMD npm start


