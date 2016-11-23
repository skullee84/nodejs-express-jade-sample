#### node.js

>Server side javascript 기술입니다. 기존의 자바스크립트들이 전부 브라우저에서 실행하는 형태였다면 node.js 는 서버사이드에서 실행되는 javascript.

#### NPM(Node Package Modules)

>Node.js에서 사용가능한 모듈들을 패키지화시켜 모아놓은 것이다.

#### Express.js

>Express.js는 Node.js의 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크다.

#### DNS(Domain Name System)

>DNS는 도메인네임서버를 일컫는다. 인터넷은 서버들을 유일하게 구분할 수 있는 IP주소를 기본체계로 이용하는데 숫자로 이루어진 조합이라 인간이 기억하기에는 무리가 따른다. 따라서 DNS를 이용해 IP주소를 인간이 기억하기 편한 언어체계로 변환하는 작업이 필요한데 이 역할을 DNS가 하는 것이다. ex) www.study.com -> 222.123.123.123

---

#### package.json
>프로젝트에 대한 설정을 package.json이라는 파일에 의존하고 있고 이 파일에 JSON형식으로 작성해서 프로젝트에 대한 관리를 할 수 있습니다. (project 정보 및 dependencies 관리)

```
{
  "name": "nodejs-express-jade-sample",
  "version": "1.0.0",
  "description": "dia!!",
  "main": "app.js",
  "scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "",
  "dependencies": {
    "express": "^4.14.0",
    "pug": "^2.0.0-beta6"
  }
}

```

- 사전 준비

```
<https://nodejs.org/ko/>

node.js 설치 후

sudo npm install nodemon -g
```

- 프로젝트 폴더 및 리소스 폴더 생성

```
cd ~

mkdir app

cd app

mkdir views

mkdir public

mkdir ./public/css
```

- package.json 파일을 이 폴더 안에 넣는다

```
cd ~/app

npm install
```

- app/app.js 생성 (package.json의 main에 명시된 이름.)

```
var express = require('express');
var http    = require('http');
var path    = require('path');

var app = express();

app.set('port', 3000);
app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Dia!',
    message: 'This is Pug.'
  })
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('server started.. port: ' + app.get('port'));
});
```

- views 폴더 안에 index.pug, public/style.css 파일 생성

```
touch ~/app/views/index.pug

touch ~/app/public/css/style.css
```

- app/views/index.pug

```
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/public/css/style.css')
  body
    div
      h1= message
```

- app/public/css/style.css

```
원하시는데로..ㅎㅎ
```

- 웹 서버 시작

```
cd ~/app

npm start

브라우저에서 http://localhost:3000 접속!
```
