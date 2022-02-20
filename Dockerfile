FROM node:14 as builder
#. 작업 dir
WORKDIR '/usr/src/app'

#. dependency만 선 install
COPY package.json ./
RUN npm install

#. Source 복사 빌드
COPY ./ ./
RUN yarn build

#. Web Server 기동
FROM nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html