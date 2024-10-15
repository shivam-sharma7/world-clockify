# Supported Timezones

## Description

This function returns a list of all supported IANA timezones, making it easy to access and work with timezone data.

## Usage

```javascript
import { getSupportedTimezones } from 'world-clockify';

const timezones = getSupportedTimezones();
```

## Expected Output

```bash

   Africa/Abidjan',
  'Africa/Accra',
  'Africa/Addis_Ababa',
  'Africa/Algiers',
  'Africa/Asmera',
  'Africa/Bamako',
  'Africa/Bangui',
  'Africa/Banjul',
  'Africa/Bissau',
  ... more items

```

## Returns

Returns: strings[], Array of string each representing a valid IANA timezone.
