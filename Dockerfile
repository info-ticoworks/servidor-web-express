FROM alpine

RUN apk add npm
WORKDIR /app

COPY ./ ./

RUN npm install
CMD ["node", "app.js"]