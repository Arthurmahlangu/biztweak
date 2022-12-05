# Entrepreneur registration

Create entrepreneur account

## Endpoint
POST: /api/v1/user/register-admin

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
    "roles": "entrepreneur",
    "password": "$2b$10$TuHQiPjVbvHqcO3sWvwemeUPFmZ1fYSLaCEzXUIpRdu3Lh7oPmTbS",
    "createdAt": "2022-12-01T03:23:52.000Z",
    "updatedAt": "2022-12-01T03:23:52.000Z"
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
