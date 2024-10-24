# tailwindcss를 이용하여 OZ 페이지 디자인하기

## 과제 정보

- 주제 : tailwindcss를 이용하여 OZ 페이지 디자인하기

### 학습 목표

1. 이전 과제에서 작성한 css 코드를 tailwindcss를 사용하여 리팩토링할 수 있다.
2. tailwindcss를 사용하기 위한 초기설정을 할 수 있다.
3. tailwindcss를 사용하는 방법에 대해 이해한다.
4. tailwindcss를 사용하는 경우의 장단점에 대해 이해한다.

<br/>

## 복습할 개념 체크 리스트

- [ ] **tailwindcss을 사용하는 방법에 대해 이해한다.**
      <br/>설명: tailwindcss를 사용하는 방법에 대해 복습하세요.
- [ ] **tailwindcss를 사용하는 경우의 장단점에 대해 이해한다.**
      <br/>설명: tailwindcss를 사용하는 경우의 장단점에 대해 복습하세요.
- [ ] **tailwindcss를 사용하기 위한 초기설정을 할 수 있다.**
      <br/>설명: tailwindcss를 사용하기 위해 어떤 초기 설정을 해야 하는지에 대해 복습하세요.
      <br/>

## 기본 요구 사항

1. tailwindcss 설치

```powershell
npm install tailwindcss postcss autoprefixer
```

2. config 파일 생성

```powershell
npx tailwindcss init -p
```

3. `tailwind.config.js` 파일 content 작성

```powershell
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. `index.css`

```powershell
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. `App.css` 에 작성된 코드를 요소에 해당하는 컴포넌트 파일에 tailwindcss를 사용하여 새롭게 작성해주세요.
   1. `App.jsx`
   2. `components/Content.jsx`
   3. `components/Header.jsx`
6. css는 자유롭게 수정해도 좋습니다.
