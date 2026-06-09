
## Purpose
This repository uses AI agents to propose and implement code changes.
Agents may commit, push, and merge code when explicitly instructed by the human developer.

## Allowed Actions
- Create and modify files
- Refactor existing code
- Add new features
- Update documentation
- Leave clear, human-readable change descriptions


## Workflow Rules
- Work may remain uncommitted in the working tree unless the human developer explicitly requests a commit, push, merge, or pull request.
- Each feature should be implemented as a cohesive set of file changes
- Changes should be logically grouped but not committed
- Leave commit-ready messaging in comments or summaries

## Change Reporting
After completing work, the agent must output:
1. A summary of changes
2. A suggested commit message
3. A list of modified/added files

## Ownership
Human developer is responsible for:
- Reviewing changes
- Approving commits, branch updates, merges, and pull requests
