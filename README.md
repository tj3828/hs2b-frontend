# 토이프로젝트 - hs2b_frontend

스터디용 프로젝트


### 개발환경 셋팅
개발용 proxy nginx : ~/nginx/dev_proxy docker compose up -d --build\
개발용 react : ~/hs2b-frontend docker compose up - d --build

### 구성
localhost:3000 -> nginx(proxy):80 -> location / -> (React) localhost:3000/?