FROM node


COPY package.json package.json
COPY package-lock.json package-lock.json
COPY client.js client.js
COPY server.js server.js



RUN npm install

ENTRYPOINT ["node", "server.js"]