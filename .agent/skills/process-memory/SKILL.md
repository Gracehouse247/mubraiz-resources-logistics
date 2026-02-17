---
name: Process Memory
description: Manages a persistent work log to ensure continuity across sessions and model changes.
---

# Process Memory Skill

This skill provides a mechanism for the agent to maintain high-fidelity continuity across sessions, model switches, and project handovers. By maintaining a structured `.agent/work_log.md`, the agent ensures it never loses track of architectural decisions, completed tasks, or pending requirements.

## Operational Protocol

### 1. The Context Check (Read)
- **WHEN**: At the beginning of every session or when a new major requirement is introduced.
- **ACTION**: Use `view_file` to read `.agent/work_log.md`.
- **PURPOSE**: Synchronize current internal state with the persistent record.

### 2. The Persistence Update (Write)
- **WHEN**: After completing a task or series of related edits.
- **ACTION**: Use `replace_file_content` or `multi_replace_file_content` to update relevant sections of `.agent/work_log.md`.
- **PURPOSE**: Log completion, capture new architectural context, and update the "Pending" list.

## Work Log Architecture

The log file `.agent/work_log.md` MUST follow this structure:

### 1. Executive Summary
A 2-3 sentence overview of the current project phase and high-level goals.

### 2. Activity Ledger
A chronological record of actions:
- **Date/Time**: ISO format.
- **Action**: Short description (e.g., "Updated Hero typography across 4 pages").
- **Impact**: Files modified or features added.

### 3. State & Context
Technical decisions that should be globally respected:
- **Typography**: Fonts, sizes, capitalization rules.
- **Color Palette**: Primary, secondary, dark mode tokens.
- **Logic**: API structures, state management patterns.

### 4. Roadmap & Pending
- **Next Up**: The immediate next priority.
- **Backlog**: Tasks identified for future implementation.
- **Blockers**: Any items requiring user clarification or technical resolution.
