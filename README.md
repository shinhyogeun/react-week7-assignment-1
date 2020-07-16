# 레스토랑 로그인 페이지 및 리뷰 작성 페이지 구현하기

![](https://user-images.githubusercontent.com/14071105/87226953-4c5e0500-c3d2-11ea-9054-4b66bfe74e80.gif)

지역, 분류 그리고 레스토랑 목록은 로그인을 하지 않아도 조회할 수 있었습니다. 하지만 리뷰 작성은 누가 리뷰를 작성했는지 알아야 하기 때문에 로그인한 사용자만 할 수 있습니다. 로그인 페이지를 구현하고 로그인을 했을 때 리뷰를 작성할 수 있도록 기능을 만들어주세요.

## 과제 목표

- TDD로 기능 구현
- 커버리지 100% 달성
- 로그인 페이지 구현
- 로그인 구현
- 리뷰 작성하기 구현
- 리뷰 목록 조회하기 구현

모든 컴포넌트와 reducer에 테스트를 작성해주세요. 그리고 테스트 커버리지를 100%를 달성해주세요.

## 요구 사항

- ESLint를 돌린 결과 아무런 문제가 없어야 합니다.
- 모든 인수 테스트를 통과시켜야 합니다.
- 한 파일에는 하나의 컴포넌트만 있어야 합니다.
- 테스트 커버리지 100%를 달성해야 합니다.

## 제한 조건

- 모든 기능은 TDD로 구현합니다. 컴포넌트와 reducer에 대한 테스트가 존재해야 합니다. 먼저 테스트를 추가하고 commit 한 뒤 실제 기능을 추가하고 commit합니다. commit 메시지 로그는 아래와 같이 남아야 합니다.

> Restaurant에 대한 테스트를 추가한다
>
> Restaurant을 구현한다
>
> Restaurant를 리팩토링한다
>
> ...

* `if`는 사용할 수 있어도 `else` 사용하실 수 없습니다. `GuardClauses` 방법을 사용해주세요.
* `switch`는 사용하실 수 없습니다.
* `let`은 사용하실 수 없습니다. `const`만을 사용하여 문제를 해결해주세요.
* 함수 이름과 변수 이름에 줄임말은 사용하실 수 없습니다. 길더라도 명확하게 써주세요.
* indent(인덴트, 들여쓰기) depth를 1로 유지해주세요.
예를 들어, for문 안에 if문이 있으면 indent depth는 2입니다.
depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 됩니다.

## 설치하기

```bash
npm install
```

## 실행하기

```bash
npm start
```

자동으로 브라우저가 켜지지는 않으니 브라우저에 `http://localhost:8080`을 입력하여 접속해 주세요.  

만약 현재 컴퓨터에서 이미 `8080`이라는 포트를 사용하고 있다면 `8081`으로 실행이 될 수도 있어요. 만약 `8081`도 사용하고 있으면 `8082`, `8083` ... 순서대로 찾아서 만들어집니다.

## 린트 실행하기

```bash
npm run lint
```

## 테스트 실행하기

### 전체 테스트 실행하기

```bash
npm test
```

### 유닛 테스트 실행하기

```bash
npm run test:unit

# 파일이 저장됐을 때 자동으로 테스트 실행하기
npm run test:unit -- --watch-all

# 커버리지 출력하기
npm run coverage
```

### e2e 테스트 실행하기

서버가 실행중인 상태에서 테스트를 실행해야 합니다.

```bash
npm run test:e2e
```

### Todo
- [X] Log In 페이지 구현
  - [X] ID, PW를 입력할 수 있다.
  - [X] ID, PW의 입력값 상태를 리덕스에서 관리한다.
  - [X] ID, PW의 입력값 상태를 렌더링 할 수 있다.
  - [X] 로그인 버튼을 눌러서 로그인을 시도할 수 있다.
  - [X] 로그인이 성공하면 리덕스에 accessToken 상태를 업데이트 한다.
  - [X] 로그인이 성공하면 로컬 스토리지에 accessToken을 저장한다.
  - [X] 리액트 라우터에서 Log In 페이지 경로를 설정한다.
  - [X] HomePage에서 Log In 페이지로 이동하는 기능을 구현한다.

- [X] TokenContainer 구현
  - 처음 앱 실행시 localStorage의 accessToken 존재 여부에 따라 로그인 상태를 관리하는 컴포넌트
  - [X] localStorage에 accessToken이 있는 경우 리덕스의 accessToken 상태를 업데이트 한다.
  - [X] localStorage에 accessToken이 있는 경우 아무것도 하지 않는다.

- [X] Logout 기능 구현
  - [X] 이미 로그인된 상태에서는 로그인 폼 대신 로그아웃 버튼이 보인다.

### 1차 리뷰 반영
- 코드에 의도가 더 잘 드러나도록 개선하기
- 코드의 목적이 무엇인지 다시 한번 생각해볼 것
  - ex. 기능상 로그인이 목적이고, 토큰 발급이 그에 대한 필요 행동이다. (반대가 아님)
- [X] 테스트 실행하기 전에 상태 초기화하기(LoginForm.test)
- [X] useSelector를 더 간단하게 표현하기(LoginFormContainer)
- [X] createToken 대신 의도가 더 잘 드러나도록 Login으로 이름 바꾸기(LoginFormContainer, actions)
- [X] 코드에 의도를 더 잘 드러내기 위해 logout을 처리하는 액션을 새로 생성하기(actions)
- [X] accessToken과 관련된 로컬 스토리지를 다루는 서비스 추상화하기
- [X] 로그인 버튼 클릭 테스트에 대해 더 구체적으로 정리하기(LoginFormContainer.test)
- [X] 중복되는 테스트 통합하기(LogoutButton.test)

### 2차 리뷰 반영
- 테스트 코드 자체도 자세하게 접근하고 리팩토링 하기
- [X] 테스트의 입력과 출력을 좀 더 명확하게 표기하기(LoginForm.test)
- [X] 공통된 초기화 코드를 빼내기(LoginFormContainer.test)
- [X] 테스트 표현에 객체를 활용하기(Reviews.test)
- [X] 이름을 모듈에 맞게 바꾸기(RoutePage.test)
- [ ] accessTokenRepository 사용해서 테스트하는 부분을 모킹하기
