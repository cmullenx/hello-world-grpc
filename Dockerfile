FROM node:10

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
EXPOSE 50051
CMD [ "npm", "start" ]