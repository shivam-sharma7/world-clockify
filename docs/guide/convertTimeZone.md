# Convert Time Zone

## Description

This feature allows you to convert a date/time from one timezone to another.

## Usage

```javascript
import { convertTimeZone } from 'world-clockify';

const convertedTime = convertTimeZone('2023-10-01T12:00:00', 'America/New_York', 'Asia/Kolkata');
console.log('Converted Time:', convertedTime);
```

## Expected Output

```bash
Converted Time: 2023-10-01T21:30:00+05:30
```

## Parameters

- dateStr (string): The date string in ISO format.
- fromZone (string): The source timezone.
- toZone (string): The target timezone.

## Returns

- (string): The converted date/time in ISO format.
