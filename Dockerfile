FROM node:0.10.31

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start