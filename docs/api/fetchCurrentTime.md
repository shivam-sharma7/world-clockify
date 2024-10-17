# 1. Get Current Time in Timezone

Retrieve the current time in a specified timezone.

## Endpoint

```http
GET /currenttime
```

## Query Parameters

timezone `(string)` – The timezone for which you want to fetch the current time (e.g., "America/New_York").

## Example Request

```http
GET https://world-clockify-api.onrender.com/api/v1/currenttime?timezone=America/New_York
```

## Example Response

```json
{
  "currentTime": "2024-10-17T15:30:00-04:00"
}
```

## Error Responses

```json
{
  "message": "Invalid timezone parameter"
}
```
