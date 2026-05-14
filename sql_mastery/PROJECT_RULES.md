dùng clean architecture
chia component nhỏ
page chỉ compose component
component chỉ render UI
business logic để trong hooks/utils

Refactor this React + TypeScript Vite project following clean code architecture.

Goals:
1. Split large page files into small reusable components.
2. Keep pages as composition-only files.
3. Move reusable UI into src/components.
4. Move business logic into src/hooks or src/utils.
5. Move static data into src/data.
6. Move TypeScript interfaces into src/types.
8. Move event names into src/constants/events.ts.
9. Do not change the current UI/UX.
10. Do not break existing routes.
11. Add clear file/folder structure.
12. Keep code beginner-readable.

Before editing, explain the target folder structure.
Then refactor file by file.
After refactor, show exactly what changed and why.