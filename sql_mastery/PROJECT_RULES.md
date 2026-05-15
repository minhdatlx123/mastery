Goals:

1. Split large page files into small reusable components.
2. Keep pages as composition-only files.
3. Move reusable UI into src/components.
4. Move business logic into src/hooks or src/utils.
5. Move static data into src/data.
6. Move TypeScript interfaces into src/types.
7. Move event names into src/constants/events.ts.
8. Do not change the current UI/UX.
9. Do not break existing routes.
10. Add clear file/folder structure.
11. Keep code beginner-readable.

Before editing, explain the target folder structure.
Then refactor file by file.
After refactor, show exactly what changed and why.
pattern for scale in future
src/
├─ features/
│ ├─ auth/
│ │ ├─ components/
│ │ ├─ hooks/
│ │ ├─ services/
│ │ ├─ tracking/
│ │ ├─ types/
│ │ └─ pages/
│ │
│ ├─ quiz/
│ └─ interview/
│
├─ shared/
│ ├─ components/
│ ├─ hooks/
│ ├─ utils/
│ └─ tracking/
