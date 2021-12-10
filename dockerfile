# pull official base image
FROM node:16-alpine3.13

# set working directory
WORKDIR /my-car-rental

# add `/my-car-rental/node_modules/.bin` to $PATH
ENV PATH /my-car-rental/node_modules/.bin:$PATH

# install my-car-rental dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add my-car-rental
COPY . ./

# start my-car-rental
CMD ["npm", "start"]
