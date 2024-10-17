# 3. Convert Time Between Timezones

Convert a specific date and time from one timezone to another.

## Endpoint

```http
GET /converttimezone
```

## Query Parameters

- date (string) – The date/time string in ISO format (e.g., "2024-10-17T10:30:00").
- fromZone (string) – The original timezone of the date/time (e.g., "America/New_York").
- toZone (string) – The target timezone to convert the date/time (e.g., "Europe/London").

## Example Request

```http
GET https://world-clockify-api.onrender.com/api/v1/converttimezone?date=2024-10-17T10:30:00&fromZone=America/New_York&toZone=Europe/London
```

## Example Response

```json
{
  "convertedTime": "2024-10-17T15:30:00+01:00"
}
```

## Error Responses

```json
{
  "message": "Invalid parameters"
}
```
