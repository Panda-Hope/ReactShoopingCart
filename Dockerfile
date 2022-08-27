# node image
FROM node:18.0

# work directory
WORKDIR /app

ENV NODE_OPTIONS="--openssl-legacy-provider"

# copy package.json
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

# copy code
COPY [".", "."]

# expose port
EXPOSE 3000

# start server
CMD [ "npm", "run", "preview" ]
