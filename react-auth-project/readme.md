# react-auth-project

## Issue

- Typescript Type 이슈
  - AuthInputBox 컴포넌트에서 생긴 오류
  - setValue의 초깃값을 세팅했는데, 타입과 충돌하여 생긴 문제(로 보여짐;;)
  - interface를 이용해 AuthInputBox Props의 type를 정의하고, 초깃값은 따로 설정하여 해결
  - typescript가 type에 민감하여 생긴 문제(아마 타입을 정의하지 않았는데 초깃값을 설정해서 생긴 오류일듯?)
  - typescript의 type과 초깃값 사이의 관계를 알아봐야 할 듯
- @types/styled-components
  - 이 또한 typescript가 type에 민감해서 생긴 문제
  - styled-components와 연관된 모듈에 대한 선언 파일을 못 찾아서 생긴 오류
    > https://garniel23.tistory.com/m/entry/%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-styled-components-Could-not-find-declaration-file
