FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm config set registry http://registry.npmjs.org/
 
RUN npm install --verbose

COPY . .

EXPOSE 5151

CMD [ "npm", "run", "watch" ]