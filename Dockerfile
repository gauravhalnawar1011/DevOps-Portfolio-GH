# 1️⃣ Use Node.js to build the Angular app
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the Angular app
RUN npm run build --configuration=production

# Check the output directory
RUN ls -l /app/docs

# 2️⃣ Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy built Angular app to Nginx default directory
COPY --from=build /app/docs /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
