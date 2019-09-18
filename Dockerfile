FROM node:10.16.3-alpine
LABEL maintainer 'TS Soluções em Sistemas de Cobrança <desenvolvedor@tscobra.com.br>'
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app/

CMD ["npm", "start"]

EXPOSE 5406