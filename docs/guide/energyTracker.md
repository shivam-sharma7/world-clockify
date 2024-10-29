# Energy tracker.

## Description

Helps users monitor their energy levels throughout the day and suggests activities based on their current energy level.

## Usage

```javascript
import { energyLevelTracker } from 'world-clockify';
const energyLevels = [
  { time: '08:00', level: 'high' },
  { time: '12:00', level: 'medium' },
  { time: '15:00', level: 'low' },
  { time: '18:00', level: 'medium' },
];

const suggestions = energyLevelTracker(energyLevels);

console.log(suggestions);
```

## Expected Output

```bash
 [
  { "time": "08:00", "suggestion": "Focus on high-priority tasks." },
  { "time": "12:00", "suggestion": "Engage in light tasks or exercise." },
  { "time": "15:00", "suggestion": "Take a break or meditate." },
  { "time": "18:00", "suggestion": "Engage in light tasks or exercise." }
]


```

## Parameters

- energyLevels(array): User inputs
