FROM node as build-deps
WORKDIR /usr/src/app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:latest
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
expose 80
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
