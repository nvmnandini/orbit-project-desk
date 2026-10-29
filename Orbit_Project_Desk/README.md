# Orbit — Project Desk

A redesigned responsive project and task workspace for the 5th-semester GitLab assignment. The design, naming, page hierarchy, sample content, and interaction language are distinct from the earlier DevTask Hub draft.

## Features
- Home dashboard with work metrics, task board, project pulse and activity log
- Create, edit, complete, filter, sort and delete tasks
- Create projects and view project-specific tasks
- Calendar month navigation, due-date markers and upcoming agenda
- Search by task title, description or project
- Browser persistence with `localStorage`
- Responsive desktop, tablet and mobile layouts
- GitLab CI build and test stages

## Run locally
No package installation is required. Open this folder in VS Code and launch `index.html` in a browser, or use the Live Server extension.

Run tests with Node.js:
```bash
node test.js
```
Expected output: `Tests Passed!`

## Files
- `index.html` — page structure and controls
- `style.css` — visual design and responsive layout
- `script.js` — task/project interactions and persistence
- `test.js` — task-name validation tests
- `.gitlab-ci.yml` — automated build and test jobs
- `.gitignore` — excludes editor and generated files

## GitLab workflow

### Phase 1 — Setup and local Git
Create a public GitLab project named `dev-task-hub`, configure SSH access, then:
```bash
git init
git add README.md .gitignore index.html style.css script.js test.js .gitlab-ci.yml
git commit -m "chore: initialize Orbit project desk"
git branch -M main
git remote add origin git@gitlab.com:YOUR-USERNAME/dev-task-hub.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitLab username.

### Phase 2 — Branching and conflicts
```bash
git checkout -b feature/app-ui
git add .
git commit -m "feat: build Orbit workspace interface"
git push -u origin feature/app-ui
```
For the conflict demonstration, create conflicting edits to the same line on two practice branches, merge one branch into the other, resolve the markers, then commit the resolution. Use a practice file or branch to avoid damaging the interface.

### Phase 3 — Issues, merge request and tag
Create three Issues and assign them to one Milestone. Suggested issues:
1. Build the responsive Orbit workspace
2. Add task and project management interactions
3. Configure the build and test pipeline

Open a Merge Request from `feature/app-ui` to `main`; include `Closes #1`, review and merge it. Then:
```bash
git checkout main
git pull
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

### Phase 4 — CI/CD
The pipeline defines `build` and `test` stages. Push the code and check **Build > Pipelines** in GitLab. Confirm both jobs pass; a GitLab Runner must be available.

## Submission checklist
- [ ] Public GitLab repository with full commit history
- [ ] Feature branch and resolved merge conflict
- [ ] Three Issues assigned to a Milestone
- [ ] Merged Merge Request referencing `Closes #1`
- [ ] Release tag `v1.0.0`
- [ ] Successful CI/CD pipeline
- [ ] Screenshots of Issue Board, merged MR and successful pipeline
- [ ] Use the exact filename format from the assignment PDF
