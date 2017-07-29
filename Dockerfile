FROM node:alpine

ENV HOME=/home/app

COPY package.json $HOME/gettingtoknow-graphql/

WORKDIR $HOME/gettingtoknow-graphql

RUN npm install

CMD ["npm", "start"]
