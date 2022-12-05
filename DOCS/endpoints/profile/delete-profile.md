# Profile delete

Delete profile

## Endpoint
DELETE: /api/v1/profiles/:ID

## Input (Param)
ID: integer ==Required==

## Success response: 200
```
{
  "status": true,
  "message": "Profile deleted successfully",
  "payload": null
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
