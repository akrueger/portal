# From Node version
FROM node:6.3.1

MAINTAINER Andrew Krueger <krueger.andrew@gmail.com>

# Add user named app
#RUN useradd app
# Switch to user app
#USER app
# Set the working directory to user app's home directory
#WORKDIR /home/app

# Make application build directory and copy application files
RUN mkdir -p /app/build
COPY ./build /app/build

# Switch back to application base directory and copy Node/NPM files
WORKDIR /app
COPY server.js package.json npm-shrinkwrap.json ./

# Set NPM configuration environment to production
RUN npm config set production true
# Install node packages from npm shrinkwrap
RUN npm install

# Expose port 3000
#EXPOSE 3000

CMD ["npm", "start"]