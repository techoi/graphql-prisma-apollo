### prisma, postgres 기본 세팅

- docker-compose.yml 파일내  volumes: 부분에 mysql 파일을 저장하길 원하는 path 변경
- $ docker-compose up -d
- $ prisma init
    - use other server
    - enter endpoint
        - http://localhost:4466
    - generated typescript client
        - prisma javascript client
- $ prisma deploy
- $ prisma generate


### npm module install
- $ npm i


### node server run
- $ node server.js

