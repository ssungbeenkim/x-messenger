# X-Messenger 📨

실시간 채팅 어플리케이션입니다.

<img width="1001" alt="image" src="https://github.com/wandakim/X_Messenger/assets/74309458/69b50ca5-692b-42fc-981e-1feca2815843">
<br/>

- [배포 링크](https://beautiful-hummingbird-0ed56a.netlify.app)
- [클라이언트 Repository](https://github.com/wandakim/Dwitter-Client)

<br />
 
## 주요 기능 📝
- CRUD에 대하여 소켓통신을 활용, 실시간 업데이트
- 프로젝트 구조에 MVC 패턴 활용
- 로그인시 JWT토큰을 HTTP Only쿠키 내에 저장하여 XSS Attack으로부터 보호 
- CSRF 토큰으로 Session Riding 방지  
- Fixed Window방식의 Rate Limit으로 서버 자원 보호 
- 429 response시 Jitter 적용, Retry로 UX 개선

<br />

## 기술 스택 🛠️

- 언어

  - Node.js

- Back-End

  - Express.js
  - Sequelize ORM
  - Axios
  - Jsonwebtoken
  - Socket.io

- Front-End

  - create-react-app
  - React(TanStack) Query
  - React Router

- Deployment ﹒ DB
  - Heroku
  - PostgresQL(MySQL)
  - Netlify

<br />
