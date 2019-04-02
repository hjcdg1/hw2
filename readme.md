1. 프론트 엔트 (리액트)
- sagas.js에서 call 함수의 인자로 넘어가는 URL을 http://ec2-3-18-208-118.us-east-2.compute.amazonaws.com:8000/meetings/로 바꿈
- package.json에서 npm run build를 webpack-dev-server --host 0.0.0.0로 바꿈
- 서버 실행 방법 : npm start

2. 백 엔드 (장고)
- settings.py에서 ALLOWED_HOSTS에 http://ec2-3-18-208-118.us-east-2.compute.amazonaws.com 추가
- 서버 실행 방법 : source env/bin/activate -> python manage.py runserver 0.0.0.0:8000
