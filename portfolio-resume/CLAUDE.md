# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요

HTML, CSS, JavaScript, Tailwind CSS로 만드는 단일 페이지 개발자 웹 이력서입니다. 백엔드 없이 정적 파일로만 구성하며, GitHub Pages 등으로 배포하는 것을 목표로 합니다. 개발 계획과 단계별 체크리스트는 `ROADMAP.md`에 있습니다.

## 현재 상태

`index.html`, `css/style.css`, `js/main.js`로 구성된 정적 페이지가 구현되어 있습니다. 빌드 단계가 없으므로 `index.html`을 브라우저에서 바로 열어 확인합니다. 린트와 테스트 설정은 없습니다.

## 구조

- `index.html`: 모든 섹션(Hero, Skills 띠, About, Experience, Projects, Education, Contact, SNS)을 담는 단일 페이지
- `css/style.css`: Tailwind 유틸리티로 처리하기 어려운 커스텀 스타일만 작성
- `js/main.js`: 스크롤 이동, 모바일 메뉴, 다크모드 토글(`localStorage`에 저장), `IntersectionObserver` 기반 등장 애니메이션
- `assets/`: 이미지와 다운로드용 `resume.pdf`

## 개발 시 유의사항

- Tailwind는 처음에는 CDN 방식으로 적용하고, 필요해지면 CLI로 전환합니다.
- 모바일 우선(Mobile First)으로 작성하고 `sm`, `md`, `lg` 브레이크포인트로 확장합니다.
- 다크모드는 `<html>`의 `dark` 클래스로 전환하며, 색상은 `css/style.css`의 CSS 변수 토큰(`--c-canvas`, `--c-accent` 등)으로 관리합니다. Tailwind에는 `bg-canvas`, `text-ink`, `border-line`, `text-accent` 같은 의미 기반 색 이름으로 매핑되어 있으므로 `dark:` 짝짓기 대신 이 이름을 사용합니다. 저장된 값이 `light`가 아니면 다크가 기본입니다.
- 간격과 레이아웃은 `.container-x`, `.section`, `.section-head`, `.card`, `.tile` 공통 클래스를 재사용해 일관성을 유지합니다. 코랄 버튼 위 글자는 대비를 위해 `on-accent` 토큰을 씁니다.
- 시맨틱 태그를 사용하고 접근성(alt 텍스트, 명도 대비, 키보드 탐색)을 지킵니다.
