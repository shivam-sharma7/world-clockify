# 4. Calculate Time Difference Between Timezones

Calculate the time difference between two timezones.

## Endpoint

```http
GET /timedifference
```

## Query Parameters

- timezone1 (string) – The first timezone (e.g., "America/New_York").
- timezone2 (string) – The second timezone (e.g., "Europe/London").

## Example Request

```http
GET https://world-clockify-api.onrender.com/api/v1/timedifference?timezone1=America/New_York&timezone2=Europe/London
```

## Example Response

```json
{
  "timeDifference": "5 hours"
}
```

## Error Responses

```json
{
  "message": "Invalid timezone parameters"
}
```
