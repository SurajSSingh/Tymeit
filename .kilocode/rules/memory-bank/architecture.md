## System Architecture

Tymeit is a client-side web application built with SvelteKit, designed as a Progressive Web App (PWA) that runs entirely in the browser. The architecture follows a local-first approach with no backend dependencies, storing all data locally using browser storage APIs.

### Key Components

- **Frontend Framework**: SvelteKit provides routing, server-side rendering capabilities, and component-based architecture
- **State Management**: Svelte stores for reactive data management, with localStorage persistence
- **UI Framework**: Skeleton UI with Tailwind CSS for consistent, accessible components
- **Data Storage**: Browser localStorage for persistent, client-side data storage

### Application Structure

- **Routes**: Organized under (app) route group for authenticated sections
  - `/track`: Main tracking interface
  - `/dashboard`: Analytics and overview
  - `/history`: Past entries and notes
  - `/active`: Currently running trackers
  - `/settings`: User preferences
- **Components**: Reusable UI elements in `$lib/components/`
- **Stores**: Global state management in `$lib/store.ts`

### Data Flow

1. User inputs note content with special syntax (#tracker, @person, +context)
2. Content is parsed using regex patterns
3. Structured data is stored in localStorage via Svelte stores
4. UI components react to store changes for real-time updates

## Source Code Paths

- `src/`: Main application code (current implementation)
- `OLD/src/`: Legacy implementation (Svelte 4, to be migrated)
- `src/routes/`: Page components and layouts
- `src/lib/components/`: Reusable UI components
- `src/lib/store.ts`: State management and data persistence
- `src/lib/index.ts`: Library exports

## Key Technical Decisions

- **Local-First Architecture**: All data stored locally for privacy and offline capability
- **No Backend**: Eliminates server costs and privacy concerns
- **Browser Storage**: Uses localStorage for simplicity and universal browser support
- **Data Portability**: Support for importing and exporting data as JSON for backup and migration
- **Future Syncing**: Planned support for syncing data to user-chosen servers (cloud or self-hosted)
- **Component-Based UI**: Modular, reusable components with Svelte's reactive system
- **Modern Web Standards**: ES modules, modern JavaScript features

## Design Patterns

- **Store Pattern**: Centralized state management with Svelte stores
- **Component Composition**: Building complex UIs from smaller, focused components
- **Route-Based Architecture**: Feature-based routing with SvelteKit
- **Reactive Programming**: Declarative data flow with Svelte's reactivity

## Component Relationships

- **AppShell**: Root layout component providing navigation and structure
- **Navigation**: Sidebar and footer navigation components
- **Page Components**: Route-specific components (Track, Dashboard, etc.)
- **Form Components**: Input handling for notes and tracker creation
- **Display Components**: Data visualization and list components

## Critical Implementation Paths

- **Note Parsing**: Regex-based parsing of user input for trackers, people, context
- **Storage Management**: Serialization/deserialization of complex data structures
- **Real-time Updates**: Reactive UI updates based on store changes
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA attributes and keyboard navigation support