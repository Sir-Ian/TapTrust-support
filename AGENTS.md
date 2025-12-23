
## Purpose
This repository uses AI agents to propose and implement code changes.
Agents are NOT allowed to commit, push, or merge code.

## Allowed Actions
- Create and modify files
- Refactor existing code
- Add new features
- Update documentation
- Leave clear, human-readable change descriptions

## Forbidden Actions
- DO NOT run `git commit`
- DO NOT run `git push`
- DO NOT create or merge pull requests
- DO NOT modify git history

## Workflow Rules
- All work must remain uncommitted in the working tree
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
- Creating commits
- Managing branches and pull requests