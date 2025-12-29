# Domain Modules Architecture

## Overview
Nomie6 OSS follows a domain-driven architecture where the application is organized into distinct business domains, each responsible for specific functionality. This approach ensures separation of concerns and makes the codebase maintainable and testable.

## Core Domain Modules

### 1. Ledger Domain
**Purpose**: Handles all log storage and retrieval operations
**Key Components**:
- `LedgerStore`: Main store for managing log data
- `NLog`: Individual log data model
- `LedgerTools`: Utility functions for log operations
- `LedgerImporter`: Import functionality for external data

**Responsibilities**:
- Store logs in time-based ledger files (monthly buckets)
- Query and filter logs based on various criteria
- Handle log CRUD operations
- Manage data synchronization between storage engines

### 2. Trackable Domain
**Purpose**: Manages all entities that can be tracked
**Key Components**:
- `TrackableStore`: Central registry for all trackable entities
- `Trackable`: Base class for trackable entities
- Individual stores: `TrackerStore`, `PeopleStore`, `ContextStore`, `PointerStore`

**Trackable Types**:
- **Trackers**: Numeric/metric tracking (mood, weight, steps)
- **People**: Social interactions tracking (@username)
- **Contexts**: Environmental/situational tracking (#work, #home)
- **Pointers**: Reference links to external resources

**Responsibilities**:
- CRUD operations for all trackable entities
- Trackable discovery and search
- Board/collection management
- Usage analytics and statistics

### 3. Storage Domain
**Purpose**: Abstract storage layer for data persistence
**Key Components**:
- Storage abstraction interface
- Engine implementations (LocalForage, PouchDB)
- Path management utilities
- Storage health monitoring

**Responsibilities**:
- Engine initialization and management
- Data path normalization
- Fallback and error handling
- Cross-engine compatibility

### 4. Usage Domain
**Purpose**: Analytics and insights from tracked data
**Key Components**:
- `UsageStore`: Aggregated usage data
- `TrackableUsage`: Individual trackable analytics
- `TodayStore`: Current day summary
- Various statistical processors

**Responsibilities**:
- Aggregate tracking data across time periods
- Calculate averages, trends, and patterns
- Generate insights and recommendations
- Real-time usage monitoring

### 5. Analytics Domain
**Purpose**: Advanced data visualization and analysis
**Key Components**:
- `PivotStore`: Pivot table generation
- `StatsStore`: Statistical analysis tools
- Chart rendering components
- Export functionality

**Responsibilities**:
- Advanced data pivoting and grouping
- Chart generation and customization
- Statistical calculations
- Data export and sharing

### 6. Preferences Domain
**Purpose**: User settings and configuration
**Key Components**:
- `Preferences` store: User settings management
- Theme and UI customization
- Feature flags and beta testing
- Account management

**Responsibilities**:
- User preference persistence
- Theme and styling management
- Feature toggles and beta features
- Account synchronization

### 7. Plugins Domain
**Purpose**: Extensible functionality through third-party integrations
**Key Components**:
- `PluginStore`: Plugin management
- Plugin security and sandboxing
- Message passing between plugins and main app
- Plugin lifecycle management

**Responsibilities**:
- Plugin installation and configuration
- Secure communication channels
- Permission management
- Plugin lifecycle hooks

### 8. Goals Domain
**Purpose**: Target setting and progress tracking
**Key Components**:
- `GoalStore`: Goal management
- Progress calculation utilities
- Achievement tracking
- Notification systems

**Responsibilities**:
- Goal creation and modification
- Progress calculation and monitoring
- Achievement notifications
- Goal analytics and insights

## Domain Interaction Patterns

### Store Dependencies
- Domains communicate through reactive Svelte stores
- Cross-domain operations use dependency injection
- Event-driven updates for real-time synchronization

### Data Flow
1. **User Input** → UI Components → Domain Store
2. **Domain Processing** → Store Updates → UI Reflection
3. **Cross-Domain** → Store Subscriptions → Coordinated Updates

### Service Layer
- Each domain provides service functions for complex operations
- Business logic is encapsulated within domain boundaries
- Data transformation happens at domain interfaces