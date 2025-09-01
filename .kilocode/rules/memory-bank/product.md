## Why this project exists

Tymeit is a privacy-first time tracking and journaling application that puts user data control back in the user's hands. Unlike cloud-based tracking tools, Tymeit stores all data locally on the user's device, ensuring complete privacy and data ownership.

## Problems it solves

- **Privacy concerns**: Many time tracking apps store data in the cloud, raising privacy and security issues.
- **Data ownership**: Users want full control over their personal time tracking data.
- **Complex interfaces**: Many tools have overwhelming UIs; Tymeit aims for simplicity.
- **Lack of journaling integration**: Combining time tracking with reflective journaling.

## How it should work

Users can:
- Create notes with structured data using special syntax:
  - #tracker for habits/events with optional values
  - @person for people involved
  - +context for time periods or situations
- Use stopwatches to track time for specific activities
- View history, dashboard analytics, and active trackers
- All data stored locally using browser storage

## User experience goals

- **Simple and intuitive**: Easy to add notes and track time without complex setup
- **Fast and responsive**: Built with modern web technologies for smooth performance
- **Privacy by default**: No accounts, no cloud storage, no data sharing
- **Flexible tracking**: Support various tracker types (numeric, boolean, text, range)
- **Beautiful design**: Modern UI using Skeleton UI and Tailwind CSS
- **Inspired by Nomie**: Familiar concepts but with improved implementation