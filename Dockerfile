FROM node:10-slim

RUN mkdir -p /app 
WORKDIR /app

COPY index.js /app/
COPY package.json /app/
RUN npm install
EXPOSE 4000
CMD [ "node", "index.js" ]
