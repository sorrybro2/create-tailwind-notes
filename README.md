# 🎨 create-tailwind-notes

> React + Tailwind CSS 프로젝트를 명령어 하나로 생성하는 CLI 도구

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node-%3E%3D18.0.0-green.svg)](https://nodejs.org/)

---

## 📌 프로젝트 소개

**토스 Frontend Platform Assistant 지원을 위해 제작한 프로젝트입니다.**

이 CLI 도구는 개발자들이 매번 반복하는 프로젝트 초기 설정 작업을 자동화하여, **개발자 경험(DX)을 개선**하는 것을 목표로 합니다.

---

## 🎯 해결하고자 하는 문제

### 😰 기존 방식의 문제점

React + Tailwind CSS 프로젝트를 시작할 때마다 개발자들은 다음과 같은 반복 작업을 해야 합니다:

```bash
# 1. Vite 프로젝트 생성
npm create vite@latest my-app -- --template react-ts

# 2. Tailwind CSS 설치
npm install -D tailwindcss postcss autoprefixer

# 3. Tailwind 설정 파일 생성
npx tailwindcss init -p

# 4. tailwind.config.js 수정 (파일 열어서 손으로...)
# 5. index.css에 Tailwind import 추가 (또 손으로...)
# 6. ESLint 설정 (또...)
# 7. Prettier 설정 (또또...)
```

**문제점:**
- ⏰ **시간 낭비**: 매번 30분 이상 소요
- 🐛 **실수 가능성**: 설정 파일 오타, 누락
- 📚 **학습 곡선**: 초보자는 어디서부터 시작해야 할지 모름
- 🔄 **일관성 부족**: 프로젝트마다 설정이 달라짐

### ✨ 해결 방법

```bash
# 명령어 하나로 모든 설정 완료
npx create-tailwind-notes my-app

# 끝!
cd my-app
npm install
npm run dev
```

**효과:**
- ⚡ **2분 만에 완료**: 30분 → 2분
- ✅ **실수 제로**: 자동화된 설정
- 🎓 **초보자 친화적**: 바로 개발 시작 가능
- 🎯 **일관된 구조**: 모든 프로젝트가 동일한 품질

---

## 🚀 주요 기능

### ✅ 자동 설정
- **Vite + React 18** 프로젝트 구조 생성
- **Tailwind CSS** 완벽 설정 (config, postcss, css import)
- **TypeScript** 설정 및 타입 정의
- **ESLint + Prettier** 코드 품질 도구

### 🎨 예쁜 샘플 포함
- 즉시 사용 가능한 **NoteCard 컴포넌트**
- Tailwind CSS 활용 예제
- 반응형 디자인 기본 구조

### 💬 사용자 친화적 CLI
- 대화형 프로젝트 이름 입력
- 실시간 진행 상황 표시
- 명확한 에러 메시지
- 다음 단계 안내

---

## 📦 설치 및 사용법

### 빠른 시작

```bash
# npx로 바로 실행 (설치 불필요)
npx create-tailwind-notes my-notes-app

# 생성된 프로젝트로 이동
cd my-notes-app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 옵션

```bash
# 프로젝트 이름 미리 지정
npx create-tailwind-notes my-app

# npm install 건너뛰기
npx create-tailwind-notes my-app --skip-install

# 도움말 보기
npx create-tailwind-notes --help
```

---

## 🏗️ 생성되는 프로젝트 구조

```
my-notes-app/
├── src/
│   ├── App.tsx                 # 메인 앱 컴포넌트
│   ├── main.tsx                # 진입점
│   ├── index.css               # Tailwind CSS import
│   └── components/
│       └── NoteCard.tsx        # 샘플 컴포넌트
├── index.html
├── package.json                # 의존성 및 스크립트
├── vite.config.ts              # Vite 설정
├── tailwind.config.js          # Tailwind 설정
├── postcss.config.js           # PostCSS 설정
├── tsconfig.json               # TypeScript 설정
└── README.md                   # 프로젝트 가이드
```

---

## 🛠️ 기술 스택

### CLI 도구
- **Node.js** (v18+) - 실행 환경
- **TypeScript** - 타입 안전성
- **Commander.js** - CLI 명령어 파싱
- **Inquirer** - 대화형 프롬프트
- **chalk** - 터미널 색상 출력
- **ora** - 로딩 스피너
- **fs-extra** - 파일 시스템 조작

### 개발 도구
- **tsup** - TypeScript 빌드
- **Jest** - 테스트 프레임워크
- **ESLint** - 코드 품질 검사
- **Prettier** - 코드 포맷팅
- **GitHub Actions** - CI/CD

### 생성되는 프로젝트
- **Vite** - 빠른 빌드 도구
- **React 18** - UI 라이브러리
- **Tailwind CSS 3** - 유틸리티 CSS 프레임워크
- **TypeScript** - 타입 체크

---

## 🎓 프로젝트 설계 철학

### 1. 개발자 경험(DX) 우선
- 명령어 하나로 모든 것이 작동해야 함
- 에러 메시지는 명확하고 해결 방법을 제시
- 다음 단계를 항상 안내

### 2. 코드 품질
- TypeScript로 타입 안전성 보장
- ESLint로 코드 품질 자동 검사
- 테스트 코드로 안정성 확보

### 3. 확장 가능한 구조
- 명령어/유틸/템플릿 분리
- 새로운 템플릿 추가 용이
- 플러그인 시스템 확장 가능

### 4. 문서화
- 코드 주석으로 의도 명확히
- README로 사용법 상세 설명
- 타입 정의로 API 문서화

---

## 🧪 테스트

```bash
# 모든 테스트 실행
npm test

# 커버리지 확인
npm test -- --coverage

# 특정 테스트만 실행
npm test -- create.test.ts
```

### 테스트 커버리지
- ✅ 프로젝트 이름 검증
- ✅ 파일 생성 로직
- ✅ 에러 핸들링
- ✅ CLI 명령어 파싱

---

## 🔧 개발 가이드

### 로컬 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/yourusername/create-tailwind-notes.git
cd create-tailwind-notes

# 의존성 설치
npm install

# 개발 모드 실행 (파일 변경 시 자동 빌드)
npm run dev

# 빌드
npm run build

# 로컬에서 CLI 테스트
npm link
create-tailwind-notes test-app
```

### 프로젝트 구조

```
create-tailwind-notes/
├── src/
│   ├── index.ts              # CLI 진입점
│   ├── commands/
│   │   └── create.ts         # 프로젝트 생성 로직
│   ├── utils/
│   │   ├── logger.ts         # 로그 출력
│   │   ├── validator.ts      # 입력 검증
│   │   └── fileGenerator.ts  # 파일 생성
│   └── templates/            # 프로젝트 템플릿
│       ├── index.ts
│       └── ...
├── tests/                    # 테스트 코드
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions
└── README.md
```

---

## 🚦 CI/CD

### GitHub Actions
- ✅ **Lint**: ESLint로 코드 품질 검사
- ✅ **Type Check**: TypeScript 타입 검사
- ✅ **Test**: Jest 테스트 실행
- ✅ **Build**: 빌드 성공 여부 확인

모든 PR과 Push에서 자동으로 실행됩니다.

---

## 📚 배운 점 & 기술적 도전

### 1. CLI 도구 설계
- **도전**: 사용자 입력을 안전하게 처리하고 검증
- **해결**: validator 패턴으로 입력값 검증 로직 분리

### 2. 파일 시스템 조작
- **도전**: 템플릿 파일을 동적으로 생성하고 커스터마이징
- **해결**: 템플릿 함수로 프로젝트 이름 등을 동적으로 주입

### 3. TypeScript 타입 안전성
- **도전**: CLI 옵션과 사용자 입력의 타입 정의
- **해결**: Interface로 명확한 타입 계약 정의

### 4. 에러 핸들링
- **도전**: 다양한 에러 상황에 대한 명확한 메시지
- **해결**: 에러 타입별로 사용자 친화적 메시지 제공

---

## 🎯 토스 Frontend Platform Assistant 지원 동기

이 프로젝트를 통해 다음을 경험하고 배웠습니다:

### 개발자 도구에 대한 이해
- 100명 이상의 개발자가 사용하는 도구는 어떻게 설계해야 하는가?
- 개발자 경험(DX)을 개선한다는 것은 무엇인가?

### 플랫폼 사고방식
- 반복되는 작업을 자동화하는 도구의 가치
- 일관된 프로젝트 구조가 팀 협업에 미치는 영향

### 기술적 깊이
- TypeScript를 정확하게 사용하는 방법
- Node.js 생태계와 빌드 도구에 대한 이해
- 테스트와 CI/CD의 중요성

토스의 Frontend Platform 팀에서 이러한 경험을 바탕으로 더 큰 규모의 개발자 도구를 만들고, 개발 환경의 미래를 함께 그려가고 싶습니다.

---

## 🙏 감사의 말

이 프로젝트는 토스 Frontend Platform Assistant 모집 과정에서 제작되었습니다.

- **토스**: 개발자 도구의 중요성을 일깨워준 공고
- **오픈소스 커뮤니티**: Commander.js, Vite 등 훌륭한 도구들


