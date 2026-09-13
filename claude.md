#링크나무 (link in bio 서비스)

##프로젝트개요

linktree 처럼 내 모든 링크를 한 페이지에 모아두고
하나의 url로 공유할 수 있는 서비스 입니다.

## 기술스텍
- Next.js 16 (App Router)
- Tailwind CSS
- MongoDB Atlas(클릭 수 저장)
- Vercel (배포)

##주요기능
-프로필표시(이름,소개,사진)
-링크카드목록
-링크클릭 수 집계

##코드규칙
-TypeScript 사용
-컴퓨넌트는 src/components/ 아래에 설정
-환경변수는 .env.local에 저장 (절대 커밋하지 않음)
-모바일 우선 반응형 디자인

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
