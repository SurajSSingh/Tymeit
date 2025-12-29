# Component Architecture

## Overview
Nomie6 OSS uses a modular component architecture built on Svelte, emphasizing reusability, maintainability, and clear separation of concerns. The component hierarchy is organized into functional categories, each serving specific UI purposes.

## Component Hierarchy

### Root Level Components
```
App.svelte (Application Root)
├── RouterView (Route Content)
├── AppKeyCommands (Global Keyboard Shortcuts)
├── UpdateAvailable (PWA Update Notifications)
└── Global UI Components
```

### Global UI Components
Components that are used across the entire application:

#### Modal and Overlay System
- **Backdrop2.svelte**: Core modal container and overlay management
- **BackdropStore2.ts**: State management for modal operations
- **Modal Components**: Various modal types (PanelModal, IframeModal, etc.)

#### Notification System
- **Toasts.svelte**: Toast notification display
- **ToastStore.ts**: Toast message queue and management
- **Confetti.svelte**: Achievement celebration effects

#### Menu Systems
- **DropdownMenu.svelte**: Generic dropdown menu component
- **PopMenu Components**: Various popup menu implementations
- **MenuBlocker.svelte**: Prevent menu conflicts

### Route-Level Components
Components that correspond to specific application routes:

#### Primary Views
- **Track.svelte**: Main tracking interface
- **Dashboard.svelte**: Overview and insights dashboard
- **Timeline.svelte**: Chronological log browsing
- **Analytics.svelte**: Advanced data analysis interface
- **Goals.svelte**: Goal management interface
- **Settings.svelte**: Application configuration

#### Supporting Views
- **Awards.svelte**: Achievement and recognition system
- **AfterNomie.svelte**: Post-tracking insights
- **History.svelte**: Historical data exploration

## Component Categories

### 1. Form Components
Components for user input and data collection:

#### Input Components
- **Input.svelte**: Generic text input with validation
- **Textarea.svelte**: Multi-line text input
- **InputSlider.svelte**: Range slider for numeric values
- **DatePicker.svelte**: Date selection component

#### Selection Components
- **AutoComplete.svelte**: Searchable selection with suggestions
- **PickerList.svelte**: List-based selection interface
- **RadioButton.svelte**: Single choice selection
- **ColorPicker.svelte**: Color selection interface

#### Specialized Inputs
- **Calculator.svelte**: Embedded calculator for numeric input
- **EmojiSelector.svelte**: Emoji selection interface
- **MarkdownEditor.svelte**: Rich text editing capabilities

### 2. Display Components
Components for presenting data and information:

#### Data Visualization
- **Chart Components**: Various chart types (BarChart, PieChart, FocusGraph)
- **Calendar Components**: Calendar views for date selection and display
- **ProgressBar/Circle**: Progress indicators and completion status
- **PositivityBar**: Mood/positivity visualization

#### Content Display
- **List Components**: Various list implementations (List, ListItem, VirtualList)
- **Card.svelte**: Content containers with consistent styling
- **Empty.svelte**: Empty state placeholder components
- **Badge.svelte**: Status and category indicators

#### Media Components
- **Avatar Components**: User and trackable avatars
- **ShareImage.svelte**: Image sharing functionality
- **FileUploader.svelte**: File upload interface

### 3. Navigation Components
Components for user navigation and interaction:

#### Navigation Elements
- **BackButton.svelte**: Standard back navigation
- **BoardTabs.svelte**: Tab navigation for different boards
- **TabPanelSwiper**: Swipeable tab interface
- **SearchBar.svelte**: Global search interface

#### Layout Components
- **Container.svelte**: Layout container with responsive behavior
- **Grid.svelte**: CSS Grid-based layout system
- **Row/Column**: Flexible layout components
- **Spacer.svelte**: Spacing control components

### 4. Interaction Components
Components for user interaction and feedback:

#### Button Components
- **Button.svelte**: Standard button with various styles
- **CloseButton.svelte**: Modal/overlay close buttons
- **ShortcutButton.svelte**: Keyboard shortcut buttons
- **ClassicButton**: Retro-style button components

#### Feedback Components
- **AlertBox/Prompt**: User confirmation and alert dialogs
- **Spinner Components**: Loading indicators
- **LetterTicker**: Animated text effects
- **Confetti**: Celebration effects

### 5. Domain-Specific Components
Components tied to specific business domains:

#### Tracking Domain
- **TrackableAvatar**: Visual representation of trackables
- **ManualTime**: Manual time entry component
- **Counter**: Numeric counter with increment/decrement
- **TimeDots**: Visual time representation

#### Analytics Domain
- **PivotTable**: Data pivoting interface
- **StatsOverview**: Statistical summary components
- **ChartRenderers**: Specific chart implementations

#### Import/Export Domain
- **CSVImporter**: CSV data import interface
- **BackupMessage**: Data backup/restore notifications

## Component Communication Patterns

### Props and Events
- **Props**: Parent-to-child data flow
- **Events**: Child-to-parent communication
- **Custom Events**: Cross-component communication

### Store Integration
Components connect to Svelte stores for state management:
```svelte
<script>
  import { TrackableStore } from '../domains/trackable/TrackableStore'
  import { onMount } from 'svelte'
  
  let trackables = []
  
  $: trackables = $TrackableStore.trackables
</script>
```

### Service Integration
Components use services for complex operations:
```svelte
<script>
  import { saveTrackable } from '../domains/trackable/TrackableStore'
  
  async function handleSave(trackable) {
    await saveTrackable(trackable)
  }
</script>
```

## Styling Architecture

### CSS Framework Integration
- **TailwindCSS**: Utility-first CSS framework
- **Custom CSS**: Component-specific styling
- **SCSS Support**: Advanced CSS preprocessing

### Styling Patterns
- **Component Scoped Styles**: CSS scoped to individual components
- **Global Styles**: Shared styling across components
- **Theme Integration**: Dynamic theme switching support
- **Responsive Design**: Mobile-first responsive design

## Performance Considerations

### Component Optimization
- **Lazy Loading**: Components loaded on demand
- **Virtual Scrolling**: Handle large lists efficiently
- **Memoization**: Cache expensive computations
- **Update Optimization**: Minimize unnecessary re-renders

### Bundle Optimization
- **Code Splitting**: Separate bundles for different routes
- **Tree Shaking**: Remove unused code
- **Component Trees**: Optimize component hierarchy
- **Asset Optimization**: Optimize images and other assets

## Accessibility and UX

### Accessibility Features
- **Semantic HTML**: Proper HTML structure for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **ARIA Labels**: Proper accessibility labels
- **Focus Management**: Proper focus handling

### User Experience
- **Loading States**: Proper loading indicators
- **Error Handling**: Graceful error boundaries
- **Progressive Enhancement**: Works without JavaScript
- **Touch Optimization**: Mobile-friendly touch targets

## Development Patterns

### Component Structure
```
Component/
├── Component.svelte          // Main component
├── ComponentStore.ts         // Component-specific state
├── Component.utils.ts        // Helper functions
└── components/               // Sub-components
    ├── SubComponent.svelte
    └── ...
```

### Testing Strategy
- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Full application flow testing
- **Visual Regression**: UI consistency testing