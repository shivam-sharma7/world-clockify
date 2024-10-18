# Supported Timezones

## Description

This function returns a list of all supported calendars, making it easy to access and work with timezone data and calender.

## Usage

```javascript
import { getSupportedCalendar } from 'world-clockify';

const calendar = getSupportedCalendar();
```

## Expected Output

```bash

    'buddhist',      'chinese',
  'coptic',        'dangi',
  'ethioaa',       'ethiopic',
  'gregory',       'hebrew',
  'indian',        'islamic',
  'islamic-civil', 'islamic-rgsa',
  'islamic-tbla',  'islamic-umalqura',
  'iso8601',       'japanese',
  'persian',       'roc'

```

## Returns

Returns: strings[], Array of string each representing supported calendar.
