serve-dev:
	REACT_APP_ENV=development npm start

serve-prod:
	REACT_APP_ENV=production npm start

serve-test:
	REACT_APP_ENV=production npm test

docker-push:
	docker build -t antonyinjila/notelify-client-service:latest --build-arg REACT_APP_ENV=docker .
	docker push antonyinjila/notelify-client-service:latest 

docker-run:
	docker run -p 3000:3000 REACT_APP_ENV=docker antonyinjila/notelify-client-service:latest 
	