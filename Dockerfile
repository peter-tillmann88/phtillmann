# Use the official Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Use the PORT environment variable in runtime for the listening port
ENV PORT 3001

# Run the web service on container startup.
CMD [ "node", "server.js" ]

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3001
