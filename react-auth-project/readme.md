# react-auth-project

## To Do

- [x] 회원가입

  - src/\_\_users 폴더 내에 users 배열에 새로운 user 데이터 추가하는 형식으로 구현
  - 간단한 프론트 페이지용 로직이라 백엔드 보안에 대한건 신경쓰지 않음

- [x] 로그인

  - users 배열에 입력한 id/pw가 일치하는지 아닌지 확인 후 로그인 성공/실패 판별
  - 로그인 성공시 localstorage에 isLogin, "true" 값을 주어 로그인 되어있는지 아닌지 판별

- [x] 로그아웃

  - localstorage에 isLogin, "false" 값을 주어 로그아웃 상태로 만듦

- [x] 유효성 검사
  - 실시간으로 유효성 검사를 해야 하는 항목의 경우 useEffect를 이용해 유효한지 여부를 판단하여 값 설정
  - 중복 체크의 경우에는 onBlur를 이용해 중복값 체크

## Log

- react-router 버전 업
  - Switch 엘리먼트가 Routes로 대체됨
    - Route 엘리먼트의 path 와 Link 엘리먼트의 to의 경로가 상대 경로로 바뀜
    - Route 엘리먼트의 exact가 없어짐
      - 유동적인 path를 사용하고 싶다면, path 뒤에 "\*"를 사용
  - useHistory 대신 useNavigate 사용
    - React suspense와의 호환성을 더 높이기 위함
    - 사용자의 상호작용이 이루어지기 전(이전 클릭이 로딩 중인 상태에서 다른 라우트로의 링크를 클릭한 경우 등)처럼 pending이 충돌되는 경우에 더 부드러운 경험(smoother experience)를 제공함
    - navigate API는 이전의 pending 작업을 인식한 뒤 해당 내용을 history stack에 PUSH하는 것이 아니라 REPLACE함으로써 로드되지 않은 페이지를 기록하지 않음
  - createBrowserRouter
    - DOM History API를 사용하여 URL을 업데이트하고 히스토리 스택을 관리함
    - loaders, actions, fetchers 와 같은 API 사용
    - JSON 형식으로 볼 수 있어 개인적으론 가독성이 좋다고 느낌

> https://reactrouter.com/en/main/upgrading/v5

> https://reactrouter.com/en/main/routers/create-browser-router
