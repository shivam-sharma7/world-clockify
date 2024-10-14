<div align="center">

<h1 style="color: #3498db;">World-Clockify</h1>
<a href="https://github.com/shivam-sharma7/world-clockify/actions/workflows/ci.yml"><img alt="Node.js CI" src="https://github.com/shivam-sharma7/world-clockify/actions/workflows/ci.yml/badge.svg"></a>
<a href="./LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/shivam-sharma7/world-clockify"></a>

</div>

## Features

- Convert date/time between different timezones. (e.g. Asia/Kolkata).
- Get the current time in any timezone. (e.g., Asia/Kolkata)
- Calculate the time difference (in hours) between two timezones. (e.g., 'America/New_York', 'Europe/London');
- Supports both JavaScript and TypeScript

## Installation

You can install the package via npm or yarn.

```bash
# npm
npm install world-clockify

# yarn
yarn add world-clockify

```

## Usage

After installation, you can use the library as follows:

```javascript
import { convertTimeZone, getCurrentTimeInZone, getTimeDifference } from 'world-clockify';

// Convert time between timezones
const convertedTime = convertTimeZone('2024-01-01T12:00:00', 'America/New_York', 'Europe/London');
console.log(convertedTime); // Outputs: '2024-01-01T17:00:00.000Z'

// Get current time in a specific timezone
const currentTime = getCurrentTimeInZone('America/New_York');
console.log(currentTime); // Outputs the current time in ISO format

// Calculate time difference between two timezones
const timeDifference = getTimeDifference('America/New_York', 'Europe/London');
console.log(timeDifference); // Outputs: 5 (hours)
```
