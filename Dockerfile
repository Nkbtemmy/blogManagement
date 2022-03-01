FROM node:14.18.0
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY . /app/

EXPOSE 3000