FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV TZ=UTC

EXPOSE 3000

CMD ["npm", "run", "dev"]