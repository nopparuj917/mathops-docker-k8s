# Use the official Node.js runtime for ARM64 as the base image
FROM node:14-buster-slim as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx for ARM64 as the production server
FROM arm64v8/nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 8084

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
