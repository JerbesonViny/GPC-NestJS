# Base image
FROM node:18 As development

# Create app directory
WORKDIR /www

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# Start the server using the production build
CMD [ "npm", "start", "dev" ]