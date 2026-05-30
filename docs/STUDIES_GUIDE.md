# AI Studies 추가 가이드

이 가이드는 GitHub 웹사이트에서 직접 AI Studies 작업을 추가할 때 쓰는 간단한 절차입니다.

## 1. 썸네일 이미지 업로드

- 위치: `assets/studies/`
- 권장 비율: 세로형 `3:4`
- 권장 파일명: `study-01-thumb.png`, `study-02-thumb.png`처럼 번호로 관리
- 권장 크기: 가로 900px 이상

GitHub에서 `assets/studies` 폴더로 들어가 `Add file` → `Upload files`로 이미지를 올리면 됩니다.

## 2. 홈 갤러리 카드 수정

파일: `index.html`

`<section class="studies" id="studies">` 안에서 `study-card-empty`가 붙은 빈 슬롯을 하나 찾습니다.

빈 슬롯 예시:

```html
<a href="work/studies/01-ai-visual-study.html" class="study-card study-card-empty">
  <div class="study-thumb study-thumb-empty"><span>Thumbnail<br>Slot</span></div>
  <span class="study-kicker">Empty</span>
  <p class="study-name">Study Title</p>
</a>
```

실제 카드로 바꿀 때:

```html
<a href="work/studies/02-my-study.html" class="study-card">
  <div class="study-thumb"><img src="assets/studies/study-02-thumb.png" alt="My study thumbnail"></div>
  <span class="study-kicker">AI Image</span>
  <p class="study-name">My Study Title</p>
</a>
```

썸네일은 사이트에서 자동으로 `3:4` 비율로 잘립니다. 이미지 안에 여백이 많으면 작아 보일 수 있으니, 올릴 때부터 3:4로 크롭한 이미지를 쓰는 것이 가장 깔끔합니다.

## 3. Work 페이지 Studies 탭에도 추가

파일: `work.html`

`<div id="studies" ...>` 안의 `study-grid`에 같은 작업을 추가합니다.
홈보다 조금 더 설명이 들어가도 됩니다.

## 4. 상세 페이지 만들기

기준 템플릿:

`work/studies/01-ai-visual-study.html`

새 페이지를 만들 때는 이 파일을 복사해서 아래처럼 이름을 바꿉니다.

`work/studies/02-my-study.html`

그 다음 아래 항목만 바꾸면 됩니다.

- `<title>`
- `.study-cover-title`
- `.study-cover-desc`
- `.study-meta`의 태그
- `.study-cover-image img` 경로
- Gallery 이미지와 캡션
- Overview / Study Note / Reflection 문장

## 5. 최소 수정만 하고 싶을 때

상세 페이지까지 매번 만들기 번거로우면, 우선 홈과 Work의 카드만 추가하고 링크는 기존 템플릿으로 둬도 됩니다.

나중에 시간이 될 때 상세 페이지를 복사해서 연결하면 됩니다.
