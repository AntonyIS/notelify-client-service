# building stage
FROM node:19-alpine3.15 AS development

WORKDIR /app

# Set environment variables for build
ARG REACT_APP_ENV
ENV REACT_APP_ENV=${REACT_APP_ENV}

# Cache and Install dependencies
COPY package*.json ./

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# production stage
FROM nginx:1.23-alpine as production

# Copy built assets from development
COPY --from=development /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
