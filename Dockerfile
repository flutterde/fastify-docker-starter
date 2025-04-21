FROM	node:22-alpine3.21


RUN	apk add curl wget

WORKDIR /app

RUN chmod -R 777 /app

COPY	. .

RUN	npm install


ENTRYPOINT [ "npm", "install" ]

ENTRYPOINT [ "sleep", "4" ]

ENTRYPOINT ["npm", "run", "start"]


