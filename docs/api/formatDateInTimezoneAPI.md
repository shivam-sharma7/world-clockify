# 6. Format Date in a Specific Timezone

Format a date/time string according to a specific timezone and format pattern.

## Endpoint

```http
GET /formattimezone
```

## Query Parameters

- date (string) – The date/time in ISO format (e.g., "2024-10-17T10:30:00").
- fromZone (string) – The timezone of the original date/time (e.g., "America/New_York").
- toZone (string) – The target timezone to format the date/time (e.g., "Europe/London").
- format (string) – The date format (e.g., "yyyy-MM-dd HH:mm").

## Example Request

```http
GET https://world-clockify-api.onrender.com/api/v1/formattimezone?date=2024-10-17T10:30:00&fromZone=America/New_York&toZone=Europe/London&format=yyyy-MM-dd%20HH:mm:ss
```

## Example Response

```json
{
  "formattedTime": "2024-10-17 15:30:00"
}
```

## Error Responses

```json
{
  "message": "Invalid parameters"
}
```
