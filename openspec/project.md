# Project Context

## Purpose
Tymeit is a privacy-first time tracking and journaling application that stores all data locally on the user's device. Built with SvelteKit as a Progressive Web App (PWA) with no backend dependencies, it provides structured note-taking with time tracking capabilities, inspired by Nomie but with improved time tracking features.

## Tech Stack
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

## Project Conventions

### Code Style
- **Indentation**: 4 spaces (configured in .prettierrc)
- **Quotes**: Single quotes for strings
- **Line Length**: 100 characters maximum
- **Trailing Commas**: None
- **File Naming**: kebab-case for files, PascalCase for Svelte components
- **Variable Naming**: camelCase for variables and functions
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Biome**: Used for formatting and linting (replaces Prettier and ESLint)

### Architecture Patterns
- **Local-First Architecture**: All data stored in browser localStorage with optional IndexedDB for future scalability
- **Component-Based**: Modular UI with Svelte stores for state management
- **Route-Based**: Feature-based routing under (app) route group
- **Reactive**: Svelte's reactive system for real-time updates
- **Store Pattern**: Centralized state management with Svelte stores
- **Domain-Driven**: Separation into distinct business domains (Ledger, Trackable, Storage, Usage, Analytics)
- **Migration Strategy**: Gradual migration from Svelte 4 to Svelte 5 with OLD/ directory for legacy code

### Testing Strategy
- **Unit Tests**: Vitest with Svelte testing utilities for component testing
- **E2E Tests**: Playwright for comprehensive integration testing
- **Test Structure**: Tests located in `/tests/` directory with `.test.ts` and `.spec.ts` files
- **Coverage**: Focus on critical user flows and data persistence
- **Mocking**: Browser APIs and external dependencies mocked for reliable testing

### Git Workflow
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

### Data Flow
1. User inputs structured notes with special syntax
2. Regex-based parsing extracts trackers, people, context
3. Data stored in localStorage via Svelte stores
4. UI components react to store changes for real-time updates
5. Optional data export/import for backup and migration

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
