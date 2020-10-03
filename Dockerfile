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

# Default port we intend to expose
EXPOSE 80

# Default command to run when starting the container
# We don't pre-build for the image because REACT_APP_ environment variables
# cannot be changed after build. This approach lets us start the container without hard-coded
# environment.
CMD npm run build && npm run serve
