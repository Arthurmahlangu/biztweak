# Update password

Update password

## Endpoint
PUT: /api/v1/password/:ID

## Input (Param)
ID: integer ==Required==

## Success response: 200
```
{
  "status": true,
  "message": "Password updated successfully",
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

```
{
  "status": false,
  "message": "Old and new password can not be the same."
}
```

## Failed response: 401
```
{
  "status": false,
  "message": "Access denied"
}
```
