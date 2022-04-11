FROM node:14-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# add git to project to some cloning can be done
RUN apk add --no-cache git

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Will fix hot reload for Windows, but in compensation, will use more CPU (35~60%) and energy.
# Linux users don't need because hot reload works.
#ENV CHOKIDAR_USEPOLLING=true

# container entrypoint
ENTRYPOINT ["node","ace","serve", "--watch"]
