# Nomie6 OSS - Project Overview

## Project Purpose
Nomie6 OSS is a privacy-focused personal life tracking application that allows users to monitor, measure, and master their daily life through simple logging and tracking mechanisms. The application emphasizes user privacy and data ownership, offering multiple storage options including local-only storage.

## Key Features
- **Privacy-First Design**: Local data storage with optional cloud sync
- **Flexible Tracking**: Support for various data types (trackers, people, contexts, pointers)
- **Real-time Logging**: Quick note-taking with automatic data extraction
- **Analytics & Insights**: Built-in analytics and visualization tools
- **Plugin System**: Extensible architecture with third-party integrations
- **Multi-Platform**: Web-based application with PWA capabilities

## Technology Stack
- **Frontend Framework**: Svelte with TypeScript
- **Build Tool**: Vite
- **Routing**: Svelte Navigator
- **Storage**: Multiple storage engines (LocalForage, CouchDB/PouchDB)
- **UI Framework**: TailwindCSS with custom Svelte components
- **Charts/Analytics**: Chart.js and Plotly.js
- **Date Handling**: Day.js
- **Testing**: Cypress, Jest, Vitest

## Application Type
Progressive Web Application (PWA) with offline-first capabilities and service worker support.

## Development Approach
- Domain-driven architecture with clear separation of concerns
- Plugin-based extensibility
- Modular component design
- Strong typing with TypeScript throughout

## Main Starting Document
This document serves as the main entry point for understanding the Nomie6 OSS project. Navigate to the other documentation files in this NOTES directory for detailed analysis of specific components.