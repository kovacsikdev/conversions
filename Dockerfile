FROM node:14.6.0-alpine as react-build
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]