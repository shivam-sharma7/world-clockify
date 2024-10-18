# 6. Format Date for locale

Format a date/time string according to a locale (e.g. 'en-us', 'fr').

## Endpoint

```http
GET /formatdatelocale
```

## Query Parameters

- dateStr (string) - The date/time in ISO format (e.g., "2024-10-17T10:30:00").
- locale (string) – The locale to format the date/time (e.g., "en-us").
- timezone (string) – The timezone of the original date/time (e.g., "America/New_York").

## Example Request

```http
GET https://world-clockify-api.onrender.com/api/v1/formatdatelocale?dateStr=2024-10-18T12:00:00&locale=en-us&timezone=Europe/Paris
```

## Example Response

```json
{
  "formatDateLocale": "October 18, 2024 at 12:00 PM GMT+2"
}
```

## Error Responses

```json
{
  "message": "Invalid parameters"
}
```
