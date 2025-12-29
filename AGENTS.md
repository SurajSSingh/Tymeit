<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Tymeit - Agent Reference

## Project Overview
Tymeit is a privacy-first time tracking and journaling application that stores all data locally on the user's device. Built with SvelteKit as a Progressive Web App (PWA) with no backend dependencies.

## Core Purpose
- Privacy-focused time tracking with local data storage
- Journaling integration with structured note syntax
- Support for habits, events, and people tracking
- Inspired by Nomie but with improved time tracking

## Key Technologies
- **Svelte v5**: Front-end Framework
- **SvelteKit v2**: Meta-Framework
- **Tailwind v4**: Style Framework
- **Skeleton UI v3**: UI/Component Library
- **Vite v7**: Bundler
- **PNPM v9**: Package Manager
- **Biome v1**: Formatter and Linter
- **TypeScript v5**: Type Safety
- **Vitest v0**: Unit Testing
- **Playwright v1**: E2E Testing

## Current State
- **Migration in Progress**: Moving from Svelte 4 to Svelte 5
- **Legacy Code**: OLD/src/ contains Svelte 4 implementation to be migrated
- **New Project**: src/ contains updated SvelteKit, Tailwind, and Skeleton UI setup

## Architecture
- **Local-First**: All data stored in browser localStorage with optional IndexedDB for future scalability
- **Component-Based**: Modular UI with Svelte stores for state management
- **Route-Based**: Feature-based routing under (app) route group
- **Reactive**: Svelte's reactive system for real-time updates
- **Store Pattern**: Centralized state management with Svelte stores
- **Domain-Driven**: Separation into distinct business domains (Ledger, Trackable, Storage, Usage, Analytics)
- **Migration Strategy**: Gradual migration from Svelte 4 to Svelte 5 with OLD/ directory for legacy code

## Key Routes
- `/track`: Main tracking interface
- `/dashboard`: Analytics and overview
- `/history`: Past entries and notes
- `/active`: Currently running trackers
- `/settings`: User preferences

## Note Syntax
- `#tracker` for habits/events with optional values (e.g., `#mood(8)`, `#weight(150)`)
- `@person` for people involved (e.g., `@username`, `@john_doe`)
- `+context` for time periods or situations (e.g., `+work`, `+home`)
- `[[pointer]]` for external references (e.g., `[[Note Title]]`, `[[http://example.com]]`)

## Data Flow
1. User inputs structured notes with special syntax
2. Regex-based parsing extracts trackers, people, context
3. Data stored in localStorage via Svelte stores
4. UI components react to store changes for real-time updates
5. Optional data export/import for backup and migration

## Important Files
- `src/lib/store.ts`: State management and data persistence
- `src/lib/components/`: Reusable UI components
- `src/routes/`: Page components and layouts
- `OLD/src/`: Legacy Svelte 4 code to migrate

## Current Focus
Migrating components, stores, and routes from OLD/ directory to new Svelte 5 project structure while maintaining functionality over style.

## Code Style Conventions
- **Indentation**: 4 spaces (configured in .prettierrc)
- **Quotes**: Single quotes for strings
- **Line Length**: 100 characters maximum
- **Trailing Commas**: None
- **File Naming**: kebab-case for files, PascalCase for Svelte components
- **Variable Naming**: camelCase for variables and functions
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Biome**: Used for formatting and linting (replaces Prettier and ESLint)

## Testing Strategy
- **Unit Tests**: Vitest with Svelte testing utilities for component testing
- **E2E Tests**: Playwright for comprehensive integration testing
- **Test Structure**: Tests located in `/tests/` directory with `.test.ts` and `.spec.ts` files
- **Coverage**: Focus on critical user flows and data persistence
- **Mocking**: Browser APIs and external dependencies mocked for reliable testing

## Git Workflow
- **Branching Strategy**: Feature branches with main branch for stable code
- **Commit Convention**: Conventional commits (feat:, fix:, docs:, style:, refactor:, test:, chore:)
- **Pull Requests**: Required for all changes with code review
- **Integration**: GitHub Actions or similar CI/CD for automated testing

## Domain Context

### Core Concepts
- **Notes**: Structured journal entries with timestamp and metadata
- **Trackers**: Numeric, boolean, text, or range-based metrics (#tracker syntax)
- **People**: Social interactions and relationships (@person syntax)
- **Context**: Environmental factors and situations (+context syntax)
- **Stopwatches**: Time tracking for specific activities
- **Ledger System**: Time-based data organization for performance optimization

### Privacy Model
- **Local Storage**: All data stored locally by default
- **Opt-in Sync**: Cloud sync only available as optional feature
- **Data Portability**: JSON export/import for backup and migration
- **No Tracking**: No telemetry or analytics by default

## Important Constraints
- **Privacy-First**: No data collection without explicit user consent
- **Offline-First**: Application must work without internet connection
- **Performance**: Efficient data handling for large datasets
- **Migration**: Backward compatibility with Nomie 6 data format
- **Browser Support**: Modern browsers with localStorage support
- **Bundle Size**: Keep application lightweight for PWA performance

## External Dependencies
- **Browser APIs**: localStorage (primary), IndexedDB (future), WebRTC (optional sync)
- **Third-Party Libraries**:
  - @floating-ui/dom: For popover and tooltip positioning
  - Chart/graph libraries: For data visualization (to be selected)
  - Date handling: For time calculations and formatting
- **Development Tools**: Vitest, Playwright, Biome
- **Build Tools**: Vite, PNPM, TypeScript compiler

## Migration Context
- **Current State**: Migrating from Svelte 4 to Svelte 5
- **Legacy Code**: OLD/src/ contains Svelte 4 implementation
- **New Structure**: src/ contains updated SvelteKit, Tailwind, and Skeleton UI setup
- **Focus**: Functionality over style during migration phase
- **Compatibility**: Maintain existing data structures during transition

## Development Guidelines
- **Component Design**: Follow Skeleton UI patterns and accessibility guidelines
- **State Management**: Use Svelte stores for reactive data, prefer local stores for component state
- **Data Persistence**: Implement robust localStorage handling with error recovery
- **Error Handling**: Graceful degradation when storage is unavailable
- **Performance**: Optimize for large datasets with efficient parsing and rendering
- **Accessibility**: Ensure all interactive elements are keyboard accessible and screen reader friendly
- **Testing**: Write tests for all new features and critical user flows
- **Documentation**: Maintain clear documentation for complex data structures and business logic

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
