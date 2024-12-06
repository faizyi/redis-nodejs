FROM node


COPY package.json package.json
COPY package-lock.json package-lock.json
COPY client.js client.js
COPY server.js server.js



RUN npm install
EXPOSE 5002

ENTRYPOINT ["node", "server.js"]