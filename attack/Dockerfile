FROM node:alpine

EXPOSE 8877


RUN npm install npm@latest -g


RUN npm install -g @nestjs/cli

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force


WORKDIR /app

COPY . .

CMD [ "npm", "run", "start" ]