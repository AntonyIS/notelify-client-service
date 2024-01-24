serve-dev:
	NODE_ENV=development npm start

serve-prod:
	NODE_ENV=production npm start
serve:
	REACT_APP_ENV=development npm start

docker-push:
	docker build -t antonyinjila/notelify-client-service:latest --build-arg REACT_APP_ENV=docker .
	docker push antonyinjila/notelify-client-service:latest 

docker-run:
	docker run -p 3000:3000 REACT_APP_ENV=docker antonyinjila/notelify-client-service:latest 
	