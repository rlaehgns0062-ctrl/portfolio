# Kim Dohoon — Portfolio Site

## 폴더 구조

```
portfolio/
├── index.html          ← 홈 페이지
├── about.html          ← 어바웃 페이지
├── css/
│   ├── style.css       ← 전역 토큰 & 공통 스타일
│   ├── home.css        ← 홈 전용 스타일
│   ├── about.css       ← 어바웃 전용 스타일
│   └── work.css        ← 케이스 스터디 공통 스타일
├── js/
│   └── main.js         ← 인터랙션 스크립트
├── fonts/
│   ├── PlayfairDisplay-Regular.ttf
│   ├── PlayfairDisplay-Italic.ttf
│   ├── PlayfairDisplay-Bold.ttf
│   └── PlayfairDisplay-BoldItalic.ttf
└── work/
    ├── 01-finance.html ← 대형 금융사 케이스
    ├── 02-toggle.html  ← Toggle 케이스
    └── 03-estore.html  ← E-STORE 케이스
```

---

## GitHub 업로드 방법

### 1단계 — GitHub 계정 만들기
https://github.com 에서 회원가입

### 2단계 — 새 Repository 만들기
1. GitHub 로그인 후 우측 상단 `+` → `New repository`
2. Repository name: `portfolio` (또는 원하는 이름)
3. Public 선택
4. `Create repository` 클릭

### 3단계 — 파일 업로드
1. 생성된 Repository 페이지에서 `uploading an existing file` 클릭
2. 이 폴더 안의 모든 파일을 드래그앤드롭으로 업로드
3. **주의**: 폴더 구조 그대로 유지해야 합니다
4. `Commit changes` 클릭

---

## Vercel 배포 방법

### 1단계 — Vercel 계정 만들기
https://vercel.com 에서 `Sign Up` → `Continue with GitHub` 선택

### 2단계 — 프로젝트 연결
1. Vercel 대시보드에서 `Add New → Project`
2. GitHub에서 `portfolio` repository 선택
3. `Import` 클릭

### 3단계 — 배포 설정
- Framework Preset: **Other**
- Root Directory: `./` (기본값 유지)
- `Deploy` 클릭

### 4단계 — 완료
약 30초 후 `https://portfolio-[이름].vercel.app` 으로 접속 가능

---

## 수정 방법

파일을 수정한 뒤 GitHub에 다시 업로드하면
Vercel이 자동으로 감지해서 30초 안에 사이트에 반영됩니다.

---

## 도메인 연결 (선택)

취업 후 원하면 아래 순서로 진행:
1. https://namecheap.com 또는 https://gabia.com 에서 도메ин 구매 (연 1~2만원)
2. Vercel 대시보드 → `Settings → Domains` 에서 도메인 추가
3. 도메인 업체에서 DNS 설정 (Vercel이 가이드 제공)
