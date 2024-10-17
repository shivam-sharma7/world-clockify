# 2. Get List of Supported Timezones

Fetch the list of all supported timezones.

## Endpoint

```http
GET /supportedtimezone
```

## Example Request

```http
GET https://world-clockify-api.onrender.com/api/v1/supportedtimezone
```

## Example Response

```json
{
  "timezones": ["Africa/Abidjan", "Africa/Cairo", "America/New_York", "Europe/London", ...]
}
```
