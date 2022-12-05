# Entrepreneur registration

Create entrepreneur account

## Endpoint
POST: /api/v1/user/register

## Input body
fullnames: String ==Required==

email: string ==Required==

password: string ==Required==

```
{
  "fullnames": "Lebohang Mokoena",
  "email": "lebohang@gmail.com",
  "password": "Covid2019."
}
```

## Success response: 200
```
{
  "status": true,
  "message": "Registration successful",
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
