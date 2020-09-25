# Base image
FROM node:14-buster

# Working directory of the app
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the app source code
COPY . ./

# Set environment variables for the app
ENV NODE_ENV production

# Build the app
RUN npm run build

# Default port we intend to expose
EXPOSE 3000

# Default command to run when starting the container
CMD ["npm", "run", "serve"]
