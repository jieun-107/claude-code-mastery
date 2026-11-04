# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 저장소 구조

루트에는 이력서 프로젝트 외에 독립 파일도 함께 있습니다.

- `portfolio-resume/`: 개발자 웹 이력서(정적 단일 페이지). 규칙, 구조, 개발 단계는 `portfolio-resume/CLAUDE.md`와 `portfolio-resume/ROADMAP.md`를 따릅니다.
- `portfolio-resume/calculator.html`: CSS와 JS가 모두 인라인인 독립 계산기입니다. 이력서의 `style.css`, `main.js`, Tailwind 토큰을 쓰지 않습니다.
- `test.txt`: 내용이 없는 임시 파일입니다.

## 빌드, 린트, 테스트

`package.json`, 빌드 도구, 린트, 테스트 러너가 모두 없습니다. HTML 파일을 브라우저로 직접 열어 확인합니다.

- 이력서: `portfolio-resume/index.html`
- 계산기: `portfolio-resume/calculator.html`

Windows에서는 `start portfolio-resume\index.html`로 기본 브라우저에서 열 수 있습니다.

Tailwind CDN, Pretendard 폰트, 아이콘 등 외부 리소스를 불러오므로 확인하려면 인터넷 연결이 필요합니다.

## 작업 시 주의사항

- Tailwind 설정은 `portfolio-resume/index.html` 안의 인라인 `<script>`(`tailwind.config`)에 있습니다. `portfolio-resume/tailwind.config.js`는 비어 있고 로드되지 않으므로 그 파일을 고쳐도 반영되지 않습니다.
- 첫 렌더링 전 깜빡임을 막으려고 `index.html`의 인라인 스크립트가 `<html>`에 `js`와 `dark` 클래스를 붙입니다. `.reveal` 등장 애니메이션은 `.js` 클래스가 있을 때만 초기 숨김이 적용되므로, 이 스크립트를 옮기거나 지우면 콘텐츠 표시 방식이 바뀝니다.
- 이력서의 이름(`홍길동`), 연락처(`hello@example.com`, `010-0000-0000`), SNS 계정(`username`)은 예시 값입니다. 실제 정보로 바꿀 때는 헤더 로고, 히어로, 메타 태그, 연락처, 푸터, SNS 링크를 `index.html`에서 함께 고쳐야 합니다.
