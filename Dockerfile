FROM node:19-alpine3.15 AS development

WORKDIR /app

ARG REACT_APP_ENV

ENV REACT_APP_ENV=${REACT_APP_ENV}

COPY package*.json ./

COPY . .

RUN npm run build

FROM nginx:1.23-alpine as production

COPY --from=development /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
