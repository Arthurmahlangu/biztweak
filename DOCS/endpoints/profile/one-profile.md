# Get one profile

Get one profile

## Endpoint
GET: /api/v1/profiles/:ID

## Input (Param)
ID: integer ==Required==

## Success response: 200
```
{
  "status": true,
  "message": "Profile found",
  "payload": {
    "id": 1,
    "fullnames": "Lebohang Mokoena",
    "email": "lebohang@gmail.com",
    "roles": "entrepreneur"
  }
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
