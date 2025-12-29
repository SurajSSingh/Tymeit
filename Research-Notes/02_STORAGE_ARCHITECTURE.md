# Storage Architecture

## Overview
Nomie6 OSS implements a flexible storage abstraction layer that supports multiple storage engines, providing users with choice between local-only storage and various cloud-based solutions. The storage system is designed with privacy and data ownership as primary concerns.

## Storage Engine Architecture

### Core Storage Interface
The storage system is built around a common `IStorage` interface that defines standard operations:
- `get(path)`: Retrieve data from storage
- `put(path, content)`: Store data at path
- `delete(path)`: Remove data from storage
- `list()`: List available storage items
- `init()`: Initialize the storage engine

### Available Storage Engines

#### 1. LocalForage Engine (Local Storage)
- **Primary Use**: Default storage for privacy-conscious users
- **Data Location**: Browser's local storage using IndexedDB
- **Sync Capability**: None - completely local
- **Multi-device Support**: No
- **Use Case**: Users prioritizing privacy and offline functionality

#### 2. CouchDB/PouchDB Engine
- **Primary Use**: Self-hosted synchronization solution
- **Data Location**: Remote CouchDB server
- **Sync Capability**: Full bidirectional synchronization
- **Multi-device Support**: Yes
- **Use Case**: Users wanting cloud sync with self-hosted control

### Storage Abstraction Benefits
1. **Engine Flexibility**: Users can switch between storage methods
2. **Privacy Control**: Choose local-only or cloud-based storage
3. **Future Extensibility**: Easy to add new storage backends
4. **Data Migration**: Built-in tools for moving between storage types

## Storage Organization

### Data Structure
The application organizes data using a path-based system:
- **Logs**: Stored in time-based ledger files (`MM-YYYY.json`)
- **Trackables**: Individual JSON files per tracker/person/context/pointer
- **Settings**: Preferences and configuration data
- **User Data**: Profile and account information

### Path Management
- All storage operations go through path conversion utilities
- Engine-specific path handling for special characters or restrictions
- Consistent namespace organization (`n6/storage-type`, `n6/trackers/`, etc.)

## Boot Process Integration
1. **Storage Selection**: User selects storage engine during setup
2. **Engine Initialization**: Storage engine initializes and validates
3. **Data Migration**: Optional migration from one engine to another
4. **Health Checks**: Continuous monitoring of storage connectivity
5. **Fallback Handling**: Graceful degradation on storage failures

## Security Considerations
- **Local Storage**: Data never leaves the device
- **Cloud Storage**: Encryption and secure transmission protocols
- **Authentication**: Engine-specific authentication when required
- **Access Control**: User permission management for shared data