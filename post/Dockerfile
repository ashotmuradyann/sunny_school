FROM node:20.12-alpine3.18

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY start.sh ./

COPY --chown=node:node . .

RUN chmod +x start.sh

EXPOSE 3004

CMD [ "./start.sh" ]