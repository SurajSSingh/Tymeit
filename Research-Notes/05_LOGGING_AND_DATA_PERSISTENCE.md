# Logging and Data Persistence

## Overview
The logging system is the core of Nomie6 OSS, designed around a ledger-based architecture that organizes user data chronologically while maintaining high performance and data integrity. The system supports real-time logging, automatic data extraction, and sophisticated query capabilities.

## Ledger Architecture

### Time-Based Organization
Logs are stored in monthly ledger files named `MM-YYYY.json`, which provides several benefits:
- **Performance**: Smaller file sizes improve read/write operations
- **Maintenance**: Easy data archiving and cleanup
- **Scalability**: Natural data partitioning by time periods
- **Recovery**: Reduced risk of data loss affecting large datasets

### Log Data Structure (NLog Class)
Each log entry contains the following core properties:
```
{
  _id: string,           // Unique log identifier
  note: string,          // User's textual note
  start: Date,          // Log start time
  end: Date,            // Log end time (primary timestamp)
  score: number,        // Computed mood/positivity score
  lat: number,          // Latitude (if location enabled)
  lng: number,          // Longitude (if location enabled)
  location: string,     // Location name/description
  modified: number,     // Last modification timestamp
  source: string,       // Data source identifier
  pinned: boolean       // User-pinned flag
}
```

## Data Processing Pipeline

### 1. Note Input and Parsing
When a user enters a note, the system automatically:
- **Tokenizes**: Extracts structured data from plain text
- **Classifies**: Identifies trackers, people, contexts, and pointers
- **Validates**: Ensures data integrity and format correctness
- **Scores**: Calculates sentiment/positivity scores

### 2. Automatic Data Extraction
The system recognizes various input formats:
- **Trackers**: `#mood(8)`, `#weight(150)`, `#steps(10000)`
- **People**: `@username`, `@john_doe`
- **Contexts**: `#work`, `#home`, `#exercise`
- **Pointers**: `[[Note Title]]`, `[[http://example.com]]`

### 3. Location Enhancement
If location services are enabled:
- **Automatic Detection**: GPS coordinates added to logs
- **Reverse Geocoding**: Location names resolved from coordinates
- **Privacy Control**: Location can be disabled per user preference

## Storage Operations

### Write Operations
1. **Log Creation**: New logs added to current month's ledger
2. **Log Updates**: Existing logs modified in place
3. **Log Deletion**: Logs removed with proper book cleanup
4. **Batch Operations**: Multiple logs processed efficiently

### Read Operations
1. **Query Engine**: Flexible filtering by date, content, trackables
2. **Caching**: Frequently accessed data cached in memory
3. **Pagination**: Large result sets handled with pagination
4. **Real-time Updates**: Live data synchronization

## Log Query System

### Query Capabilities
The ledger system supports complex queries:
- **Date Range**: Filter by start/end dates
- **Content Search**: Full-text search across note content
- **Trackable Filtering**: Filter by specific trackers or people
- **Score Filtering**: Filter by mood/positivity scores
- **Location Filtering**: Filter by geographical location
- **Combined Filters**: Multiple criteria combined with AND/OR logic

### Query Performance
- **Indexing**: Efficient indexing on frequently queried fields
- **Caching**: Intelligent caching of query results
- **Lazy Loading**: Data loaded on-demand for performance
- **Background Processing**: Heavy operations done asynchronously

## Data Integrity and Recovery

### Concurrency Management
- **Optimistic Locking**: Prevent conflicting updates
- **Conflict Resolution**: Automatic merge strategies
- **Audit Trail**: Track all modifications with timestamps
- **Backup Systems**: Regular automated backups

### Data Validation
- **Schema Validation**: Ensure data conforms to expected structure
- **Referential Integrity**: Maintain relationships between entities
- **Type Checking**: Validate data types and ranges
- **Custom Validation**: Domain-specific validation rules

## Real-time Features

### Live Updates
- **Auto-save**: Automatic saving as user types
- **Conflict Detection**: Notify of potential conflicts
- **Sync Status**: Show sync status with storage engines
- **Offline Support**: Queue operations when offline

### User Feedback
- **Save Indicators**: Visual feedback during save operations
- **Undo Functionality**: Allow reversal of recent operations
- **Error Handling**: Graceful error recovery and user notification
- **Progress Indicators**: Show progress for long-running operations

## Performance Optimizations

### Storage Efficiency
- **Compression**: Automatic compression of stored data
- **Deduplication**: Remove duplicate or redundant entries
- **Archival**: Move old data to archive storage
- **Cleanup**: Regular maintenance to remove orphaned data

### Query Optimization
- **Pre-aggregation**: Pre-calculate common statistics
- **Materialized Views**: Create optimized views for common queries
- **Background Indexing**: Build indexes asynchronously
- **Query Planning**: Optimize complex query execution plans

## Security and Privacy

### Data Protection
- **Local Encryption**: Encrypt sensitive data before storage
- **Transmission Security**: Secure data transmission for cloud storage
- **Access Control**: User permission management
- **Data Anonymization**: Remove identifying information from analytics

### Privacy Controls
- **Selective Sharing**: Granular control over data sharing
- **Export Control**: User control over data export
- **Deletion Rights**: Complete data deletion on request
- **Transparency**: Clear information about data usage