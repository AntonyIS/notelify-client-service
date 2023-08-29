# building
FROM node:19-alpine3.15 AS development

WORKDIR /app
# Cache and Install dependencies

COPY package*.json ./

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.23-alpine as production

# Copy built assets from development
COPY --from=development /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 8082
# Start nginx
CMD ["nginx", "-g", "daemon off;"]

