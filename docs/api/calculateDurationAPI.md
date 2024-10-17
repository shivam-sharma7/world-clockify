# 5. Calculate Duration Between Two Dates in a Timezone

Calculate the duration between two dates in a specific timezone.

## Endpoint

```http
GET /calculateduration
```

## Query Parameters

- startDateStr (string) – The start date in ISO format (e.g., "2024-10-15T10:00:00").
- endDateStr (string) – The end date in ISO format (e.g., "2024-10-16T12:00:00").
- timezone (string) – The timezone for the duration calculation (e.g., "America/New_York").
- unit (string) – The unit for the duration (days, hours, or minutes).

## Example Request

```http
GET https://world-clockify-api.onrender.com/api/v1/calculateduration?startDateStr=2024-10-15T10:00:00&endDateStr=2024-10-16T12:00:00&timezone=America/New_York&unit=hours
```

## Example Response

```json
{
  "duration": 26
}
```

## Error Responses

```json
{
  "message": "Invalid unit parameters"
}
```
