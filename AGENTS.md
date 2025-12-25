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
- **SvelteKit**: Meta-Framework
- **Tailwind v4**: Style Framework
- **Skeleton UI v3**: UI/Component Library
- **Vite**: Bundler
- **PNPM**: Package Manager
- **Biome**: Formatter and Linter

## Current State
- **Migration in Progress**: Moving from Svelte 4 to Svelte 5
- **Legacy Code**: OLD/src/ contains Svelte 4 implementation to be migrated
- **New Project**: src/ contains updated SvelteKit, Tailwind, and Skeleton UI setup

## Architecture
- **Local-First**: All data stored in browser localStorage
- **Component-Based**: Modular UI with Svelte stores for state management
- **Route-Based**: Feature-based routing under (app) route group
- **Reactive**: Svelte's reactive system for real-time updates

## Key Routes
- `/track`: Main tracking interface
- `/dashboard`: Analytics and overview
- `/history`: Past entries and notes
- `/active`: Currently running trackers
- `/settings`: User preferences

## Note Syntax
- `#tracker` for habits/events with optional values
- `@person` for people involved
- `+context` for time periods or situations

## Data Flow
1. User inputs structured notes
2. Regex-based parsing extracts trackers, people, context
3. Data stored in localStorage via Svelte stores
4. UI components react to store changes

## Important Files
- `src/lib/store.ts`: State management and data persistence
- `src/lib/components/`: Reusable UI components
- `src/routes/`: Page components and layouts
- `OLD/src/`: Legacy Svelte 4 code to migrate

## Current Focus
Migrating components, stores, and routes from OLD/ directory to new Svelte 5 project structure while maintaining functionality over style.