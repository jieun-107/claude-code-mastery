# 개발자 웹 이력서 ROADMAP

HTML, CSS, JavaScript, Tailwind CSS로 만드는 단일 페이지 개발자 이력서 개발 로드맵입니다.

## 1. 프로젝트 개요

- **목표**: 방문자가 빠르게 훑어볼 수 있는 반응형 개발자 웹 이력서
- **기술 스택**: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS (CDN 또는 CLI)
- **배포**: GitHub Pages (또는 Netlify / Vercel)
- **범위**: 정적 단일 페이지, 별도 백엔드 없음

## 2. 이력서 콘텐츠 (예시)

| 섹션 | 내용 |
| --- | --- |
| 프로필 | 이름, 직무(예: 프론트엔드 개발자), 한 줄 소개, 사진 |
| 연락처 | 이메일, 전화, 위치 |
| SNS | GitHub, YouTube, Instagram, LinkedIn, 블로그 |
| 소개 | 2~3문장의 자기소개 |
| 기술 스택 | HTML, CSS, JavaScript, Tailwind CSS, Git 등 |
| 경력 | 회사명, 직책, 기간, 주요 업무 및 성과 (2~3개) |
| 프로젝트 | 프로젝트명, 설명, 사용 기술, 링크 (2~3개) |
| 학력 | 학교, 전공, 기간 |
| 기타 | 자격증, 수상 경력 (선택) |

## 3. 페이지 구조

```
index.html
├── Header / Nav      (섹션 이동 링크, 다크모드 토글)
├── Hero              (이름, 직무, 소개, 연락 버튼)
├── About             (자기소개)
├── Skills            (기술 스택)
├── Experience        (경력 타임라인)
├── Projects          (프로젝트 카드)
├── Education         (학력)
├── Contact           (연락처)
├── SNS               (GitHub, YouTube, Instagram, 기타 링크)
└── Footer
```

## 4. 폴더 구조

```
claude-code-mastery/
├── index.html
├── assets/
│   ├── images/       (프로필, 프로젝트 이미지)
│   └── resume.pdf    (다운로드용, 선택)
├── css/
│   └── style.css     (Tailwind로 처리하기 어려운 커스텀 스타일)
├── js/
│   └── main.js
└── ROADMAP.md
```

## 5. 개발 단계

### Phase 1. 기획 및 준비
- [x] 이력서 내용 정리 (섹션별 텍스트 초안)
- [x] 레이아웃, 색상, 폰트 결정 (예: Pretendard)
- [x] 프로젝트 폴더 및 `index.html` 생성
- [x] Tailwind CSS 적용 (CDN 방식으로 시작)

### Phase 2. 마크업 (HTML)
- [x] 시맨틱 태그(`header`, `main`, `section`, `footer`)로 뼈대 작성
- [x] 섹션별 콘텐츠 입력
- [x] 메타 태그(`title`, `description`, `viewport`, OG 태그) 작성

### Phase 3. 스타일링 (Tailwind CSS)
- [x] 모바일 우선(Mobile First) 레이아웃 구성
- [x] 반응형 브레이크포인트 적용 (`sm`, `md`, `lg`)
- [x] 타이포그래피, 간격, 색상 통일
- [x] 경력 타임라인, 프로젝트 카드, 기술 배지 컴포넌트 스타일링
- [x] 다크모드 스타일 (`dark:` 클래스)

### Phase 4. 인터랙션 (JavaScript)
- [x] 네비게이션 부드러운 스크롤 및 현재 섹션 하이라이트
- [x] 모바일 햄버거 메뉴 토글
- [x] 다크모드 토글 (`localStorage`에 설정 저장)
- [x] 스크롤 시 섹션 등장 애니메이션 (`IntersectionObserver`)
- [x] 맨 위로 이동 버튼

### Phase 5. 품질 개선
- [x] 웹 접근성 점검 (alt 텍스트, 명도 대비, 키보드 탐색)
- [ ] 이미지 최적화 (WebP, `loading="lazy"`)
- [ ] 크로스 브라우저 및 기기별 테스트
- [ ] Lighthouse 점검 (성능, 접근성, SEO 90점 이상 목표)
- [x] 인쇄용 스타일(`@media print`) 또는 PDF 다운로드 제공

### Phase 6. 배포
- [ ] GitHub 저장소 생성 및 코드 푸시
- [ ] GitHub Pages 배포 설정
- [ ] 배포 URL 확인 후 이력서/SNS 프로필에 링크 추가

## 6. 마일스톤

| 단계 | 목표 | 산출물 |
| --- | --- | --- |
| M1 | 기획 완료 | 콘텐츠 초안, 디자인 방향 |
| M2 | 정적 페이지 완성 | HTML + Tailwind 반응형 페이지 |
| M3 | 기능 완성 | 다크모드, 메뉴, 스크롤 애니메이션 |
| M4 | 배포 | 공개 URL |

## 7. 향후 확장 아이디어

- 다국어 지원 (한국어/영어 전환)
- 프로젝트 데이터를 JSON으로 분리해 동적 렌더링
- 블로그 글 목록 연동
- 방문자 분석(Google Analytics 등) 추가
- 연락 폼 연동 (Formspree 등)
