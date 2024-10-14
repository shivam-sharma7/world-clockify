import { describe, it, expect, should } from 'vitest';
import { convertTimeZone, getCurrentTimeInZone, getTimeDifference, formatDateInTimeZone } from '../src/function.js';

describe('Timezone-Aware Date Helper', () => {
  it('should convert date between timezones', () => {
    const dateStr = '2024-01-01T12:00:00';
    const converted = convertTimeZone(dateStr, 'America/New_York', 'Europe/London');
    expect(converted).toBe('2024-01-01T17:00:00.000+00:00'); // Adjusted expected value
  });

  it('should get current time in a specific timezone', () => {
    const current = getCurrentTimeInZone('America/New_York');
    expect(current).toBeDefined(); // We can't assert exact time, just check it exists.
  });

  it('should calculate time difference between two timezones', () => {
    const diff = getTimeDifference('America/New_York', 'Europe/London');
    expect(diff).toBe(5); // Assuming DST is not in effect.
  });

  it('should format date correct for a different timezone', () => {
    const dateStr = '2024-10-14T12:00:00';
    const fromZone = 'UTC';
    const toZone = 'America/New_York';
    const format = 'MM/dd/yyyy HH:mm';

    const result = formatDateInTimeZone(dateStr, fromZone, toZone, format);
    expect(result).toBe('10/14/2024 08:00');
  });

  it('should handle other timezones and format correctly', () => {
    const dateStr = '2024-10-14T12:00:00';
    const fromZone = 'UTC';
    const toZone = 'Asia/Tokyo';
    const format = 'yyyy-MM-dd HH:mm';

    const result = formatDateInTimeZone(dateStr, fromZone, toZone, format);
    expect(result).toBe('2024-10-14 21:00');
  });
});
