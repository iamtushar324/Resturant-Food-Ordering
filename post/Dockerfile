FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm i 

COPY ./ ./

EXPOSE 4444

CMD ["npm", "start"]

