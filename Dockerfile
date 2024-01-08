# building
FROM node:19-alpine3.15 AS development

WORKDIR /app

# Set environment variables for build
ARG REACT_APP_ARTICLES_API_URL
ARG REACT_APP_USERS_API_URL

ENV REACT_APP_ARTICLES_API_URL=$REACT_APP_ARTICLES_API_URL
ENV REACT_APP_USERS_API_URL=$REACT_APP_USERS_API_URL

# Cache and Install dependencies
COPY package*.json ./

# Set environment variables for build
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
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
