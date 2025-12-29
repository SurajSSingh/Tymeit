# UI Structure and Routing

## Overview
The Nomie6 OSS application uses a single-page application (SPA) architecture with client-side routing powered by Svelte Navigator. The UI is organized around a main app component that orchestrates different views and maintains global state.

## Application Architecture

### Main Application Structure
```
App.svelte (Root Component)
├── Router (Svelte Navigator)
├── RouteControl (Navigation Management)
├── Global UI Components
│   ├── Backdrop2 (Modal/Overlay System)
│   ├── Toasts (Notification System)
│   ├── Confetti (Achievement Celebrations)
│   └── DropdownMenu (Context Menus)
├── Domain-Specific Components
└── Dynamic Routes
```

### Routing System
The application uses Svelte Navigator for client-side routing with the following main routes:

#### Core Routes
- **`/`**: Dashboard/Home (configurable start page)
- **`/track`**: Primary tracking interface
- **`/dashboard`**: Overview and insights dashboard
- **`/timeline`**: Chronological log history
- **`/analytics`**: Advanced data analysis
- **`/goals`**: Goal management and progress

#### Feature Routes
- **`/settings`**: Application preferences
- **`/settings/export`**: Data export functionality
- **`/awards`**: Achievement system
- **`/test`**: Development and testing tools
- **`/setup`**: Initial application setup

#### Dynamic Routes
- **`/history`**: Historical data views
- **`/history/:date`**: Specific date navigation
- **`/files/*path`**: File browser interface

## View Components Architecture

### 1. Track View (`/track`)
**Purpose**: Primary data entry interface
**Key Features**:
- Quick note-taking with real-time parsing
- Trackable discovery and selection
- Visual feedback and validation
- Gesture support for mobile interaction

### 2. Dashboard View (`/dashboard`)
**Purpose**: High-level overview and insights
**Key Features**:
- Today's summary statistics
- Recent activity highlights
- Quick access to common actions
- Responsive grid layout

### 3. Timeline View (`/timeline`)
**Purpose**: Chronological log browsing
**Key Features**:
- Time-based log visualization
- Filtering and search capabilities
- Infinite scroll loading
- Log detail expansion

### 4. Analytics View (`/analytics`)
**Purpose**: Advanced data analysis
**Key Features**:
- Pivot table generation
- Chart creation and customization
- Statistical analysis tools
- Data export capabilities

### 5. Settings View (`/settings`)
**Purpose**: Application configuration
**Key Features**:
- Storage engine selection
- Theme and appearance customization
- Notification preferences
- Data export/import tools

## Global UI Components

### Modal System
**Backdrop2 Component**: Manages modal overlays and dialogs
- Centralized modal state management
- Support for multiple simultaneous modals
- Keyboard navigation and accessibility
- Animation and transition handling

### Notification System
**ToastStore/Toasts**: Provides user feedback
- Success/error notifications
- Undo functionality for destructive actions
- Configurable display duration
- Queue management for multiple notifications

### Interactive Elements
**DropdownMenu**: Context-sensitive menus
- Reusable menu component
- Keyboard and touch support
- Position calculation and viewport handling
- Integration with trackable selection

## State Management Patterns

### Svelte Stores
The application uses reactive Svelte stores for state management:
- **Writable Stores**: Mutable state (preferences, UI state)
- **Derived Stores**: Computed state from other stores
- **Custom Stores**: Business logic encapsulated in stores

### Store Organization
```
Global Stores
├── Interact (UI interactions and alerts)
├── Lang (Internationalization)
├── Device (Device-specific functionality)
└── Prefs (User preferences)

Domain Stores
├── LedgerStore (Log data)
├── TrackableStore (Trackable entities)
├── UsageStore (Analytics data)
└── [Domain]Store (Other domain-specific stores)
```

## Responsive Design Strategy

### Mobile-First Approach
- Touch-optimized interface components
- Gesture recognition and handling
- Mobile-specific navigation patterns
- Responsive layout breakpoints

### Component Design
- Modular, reusable component architecture
- Consistent design language across views
- Accessibility considerations throughout
- Performance optimization for mobile devices

## Navigation Patterns

### Primary Navigation
- Bottom tab bar (mobile) / sidebar (desktop)
- Context-sensitive navigation options
- Deep linking support
- History management and back navigation

### Secondary Navigation
- In-app breadcrumbs for complex flows
- Modal navigation patterns
- Cross-view linking and relationships
- Search and filter navigation