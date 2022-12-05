# Get all profiles

Get all profiles

## Endpoint
GET: /api/v1/profiles

## Input body

## Success response: 200
```
{
  "status": true,
  "message": "Profiles found",
  "payload": [
    {
      "id": 1,
      "fullnames": "Lebohang Mokoena",
      "email": "lebohang@gmail.com",
      "roles": "entrepreneur"
    }
  ]
}
```

## Failed response: 400
```
{
  "status": false,
  "message": "Technical error found."
}
```

## Failed response: 401
```
{
  "status": false,
  "message": "Access denied"
}
```
