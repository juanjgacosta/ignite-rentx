# Define image:version to use
FROM node:18

# Create app directory
WORKDIR /usr/app

# Copy app dependencies setup
COPY package.json ./

# Install app dependencies
RUN npm install 

# Bundle app source code
COPY . .

# Define app port
EXPOSE 3335

# run app init commands (double quotes required)
CMD ["npm", "run", "dev"]

