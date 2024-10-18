# Get Count Down To Event

This endpoint returns the count down to the event.

## Endpoint

```bash
GET /countdownevent
```

## Query Parameters

- eventDate (string) - The date/time in ISO format (e.g., "2024-10-17T10:30:00").
- eventTimezone (string) – The timezone of the original event date/time (e.g., "America/New_York").

## Example Request

```http
https://world-clockify-api.onrender.com/api/v1/countdownevent?eventDate=2024-10-21T15:00:00&eventTimezone=America/New_York

```

## Example Response

```json
{
  "countdownToEvent": "3 days, 2 hours, 30 minutes, 0 seconds"
}
```

## Error Responses

```json
{
  "message": "Invalid parameters"
}
```
