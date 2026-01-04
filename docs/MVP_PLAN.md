# JLPT Mock System - Frontend MVP Plan

## 1. Overview
The **JLPT Mock System** is a platform designed to simulate the Japanese Language Proficiency Test (JLPT) experience. 
**Phase 1 (MVP)** focuses on the **Student/Examinee** experience, allowing users to register, discover tests, take them, and view their results.
**Phase 2** will focus on the **Master** experience.

## 2. Tech Stack
- **Runtime:** Bun
- **Framework:** React 19
- **Meta-Framework / SSR:** TanStack Start (Server-Side Rendering / Hybrid)
- **Routing:** TanStack Router (File-based routing)
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/UI (planned), Lucide React (Icons)
- **Utilities:** `clsx`, `tailwind-merge`
- **Quality Control:** Biome (Linting/Formatting), Vitest (Testing)

## 3. User Roles
- **User (Student):** Can browse tests, take exams, view personal results, and manage profile.
- **Master:** Creates tests, monitors users, manages content, and oversees the system.
- **Guest:** Can view landing page, login, or register.

## 4. Phase 1 Features & Pages (Student)

### A. Authentication
*Accessible to Guest*
- **Login Page** (`/login`): Email/Password authentication.
- **Register Page** (`/register`): User sign-up (Name, Email, Password, Target Level).
- **Logout Action**: Securely clears session.

### B. Dashboard
*Accessible to Authenticated Users*
- **Path:** `/dashboard`
- **Role-Based View:** 
  - **User View:** Quick summary of recent activity, "Resume Test" (if applicable), upcoming recommended tests.
  - **Master View:** (See Phase 2).

### C. Tests (Exam Discovery)
*Accessible to Authenticated Users*
- **Path:** `/tests`
- **Features:**
  - List of available JLPT mock exams (N5 - N1).
  - Filtering by Level (N1-N5), Status (Taken, New).
  - Search functionality.
  - **Test Detail View** (`/tests/$testId`): Description, duration, passing score, "Start Test" button.
  - **Test Taking Interface** (`/tests/$testId/take`):
    - **Visual Guidance:** Refer to `@Screenshot 2026-01-04 at 21.05.49.png` and `@Screenshot 2026-01-04 at 21.06.45.png`.
    - **Visual Design Requirements:**
      - **Header:** Teal-colored fixed header with a "Back" button.
      - **Layout:** Two-column layout (Main Content + Right Sidebar).
      - **Sidebar:** 
        - Countdown timer at the top.
        - "Submit" button.
        - Question navigation grid categorized by sub-sections (e.g., Kanji reading, Orthography, Grammar).
        - Visual indicators for answered vs. unanswered questions.
      - **Main Content:**
        - Section tabs at the top (e.g., Vocabulary, Listening).
        - Instruction boxes for specific question groups.
        - Question cards with options and circular radio buttons.
        - Floating "Previous" and "Next" navigation buttons at the bottom.

### D. Results (History)
*Accessible to Authenticated Users*
- **Path:** `/results`
- **Features:**
  - List of past attempts.
  - Summary cards (Pass/Fail, Date, Score).
  - **Result Detail View** (`/results/$attemptId`): Detailed breakdown by section (Vocabulary, Grammar, Reading, Listening).

### E. Profile
*Accessible to Authenticated Users*
- **Path:** `/profile`
- **Features:**
  - **Personal Info:** Avatar upload, Name, Email.
  - **Security:** Change Password.
  - **Preferences:** Target JLPT Level.

## 5. Phase 2 Features & Pages (Master)

### A. Master Dashboard
- **Path:** `/dashboard` (Role switched) or `/master/dashboard`
- **Features:** High-level stats (Total users, Exams taken today), Quick actions.

### B. Test Management
- **Path:** `/master/tests`
- **Features:**
  - **List:** Manage existing exams (Edit/Delete).
  - **Create:** (`/master/tests/new`) Builder interface to add questions, define sections, time limits.
  - **Edit:** (`/master/tests/$testId/edit`) Update existing exams.

### C. User Monitoring
- **Path:** `/master/users`
- **Features:**
  - List of registered students.
  - View individual progress/results (`/master/users/$userId`).

## 6. Routing Structure (TanStack Router)

```
/ (routes/__root.tsx)
├── / (routes/index.tsx) -> Landing Page (Public)
├── /login (routes/login.tsx)
├── /register (routes/register.tsx)
├── /dashboard (routes/dashboard.tsx) -> Protected (Role Based)
├── /profile (routes/profile.tsx) -> Protected
├── /tests (routes/tests/route.tsx) -> Layout for Tests
│   ├── / (routes/tests/index.tsx) -> List of tests
│   ├── /$testId (routes/tests/$testId.tsx) -> Test Details
│   └── /$testId/take (routes/tests/$testId.take.tsx) -> Exam Interface
├── /results (routes/results/route.tsx)
│   ├── / (routes/results/index.tsx) -> History List
│   └── /$attemptId (routes/results/$attemptId.tsx) -> Detailed Result
└── /master (routes/master/route.tsx) -> Protected (Master Only)
    ├── /tests (routes/master/tests/index.tsx)
    ├── /tests/new (routes/master/tests/new.tsx)
    ├── /tests/$testId/edit (routes/master/tests/$testId.edit.tsx)
    └── /users (routes/master/users/index.tsx)
```

## 7. Data Models (Draft)

```typescript
// User
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'master';
  avatarUrl?: string;
  targetLevel?: 'N1' | 'N2' | 'N3' | 'N4' | 'N5';
}

// Test / Exam
interface Exam {
  id: string;
  title: string;
  level: 'N1' | 'N2' | 'N3' | 'N4' | 'N5';
  durationMinutes: number;
  totalPoints: number;
  sections: ExamSection[];
}

// Exam Result
interface ExamResult {
  id: string;
  examId: string;
  userId: string;
  takenAt: string; // ISO Date
  score: number;
  passed: boolean;
  sectionScores: Record<string, number>;
}
```

## 8. Development Guidelines & Workflow
1.  **Documentation First:** Always read the latest documentation for **TanStack** (Router, Start, Query) and **Shadcn/UI** before implementation.
    *   *Tool:* Use `context7` MCP server to query docs.
2.  **Runtime:** Use `bun` for package management and script execution.
3.  **Iterative Steps:** Follow the roadmap, implementing small chunks and verifying often.

## 9. Implementation Roadmap (Phase 1)
1.  **Scaffold Layouts:** Create MainLayout (Sidebar/Header) and AuthLayout.
2.  **Setup Shadcn:** Initialize components (Button, Input, Card, Forms).
3.  **Implement Auth Pages:** UI only first, then mock auth.
4.  **Implement Dashboard:** Static structure.
5.  **Implement Tests & Profile:** List views and forms.
6.  **Mock Data Integration:** Use mock API/Server Functions to simulate backend.