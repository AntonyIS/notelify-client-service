serve-dev:
	NODE_ENV=development REACT_APP_ARTICLES_API_URL=http://127.0.0.1:8001/v1/articles REACT_APP_USERS_API_URL=http://127.0.0.1:8000/v1/users  npm start

serve-prod:
	NODE_ENV=production REACT_APP_ARTICLES_API_URL=http:notelify-articles-service/v1/articles REACT_APP_USERS_API_URL=http://notelify-users-service/v1/users npm start