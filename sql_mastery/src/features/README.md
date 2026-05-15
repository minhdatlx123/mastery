# Feature Structure Guide

This project uses feature-first architecture.

## Folder map

- `src/features/auth`: login and auth flow
- `src/features/module-catalog`: module/course selection page
- `src/features/learning`: learning workspace page
- `src/features/quiz`: quiz UI components
- `src/features/interview`: interview practice UI + data
- `src/shared`: shared types, services, utils, tracking

## Rule of thumb

1. Put page containers in `feature/pages`
2. Put UI-only components in `feature/components`
3. Put state/business logic in `feature/hooks`
4. Put static content in `feature/data`
5. Put cross-feature code in `src/shared`

## How to add a new course module

1. Open `src/features/learning/data/courseData.ts`
2. Add new module object using `CourseModule` type
3. If needed, add interview practice in `src/features/interview/data/interviewData.ts`
4. Keep UI files unchanged unless new layout is required

This keeps new content work easy for beginners.
