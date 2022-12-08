# Account login

Login to account

## Endpoint
POST: /api/v1/user/auth-email

## Inputs [body]
fullnames: String ==Required==

email: string ==Required==

password: string ==Required==

```
{
  "email": "lebohang@gmail.com",
  "password": "Covid2019."
}
```

## Success response: 200
```
{
  "status": true,
  "message": "Authenticated",
  "payload": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmdWxsbmFtZXMiOiJMZWJvaGFuZyBNb2tvZW5hIiwiZW1haWwiOiJsZWJvaGFuZ0BnbWFpbC5jb20iLCJyb2xlcyI6ImVudHJlcHJlbmV1ciJ9LCJpYXQiOjE2NzAyNDY5MjIsImV4cCI6MTY3MDI0Nzc2Mn0.oFn7LGJGSpIdwlHCL55pbf2xAzPIW37rbE5yLO-f00U",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmdWxsbmFtZXMiOiJMZWJvaGFuZyBNb2tvZW5hIiwiZW1haWwiOiJsZWJvaGFuZ0BnbWFpbC5jb20iLCJyb2xlcyI6ImVudHJlcHJlbmV1ciJ9LCJpYXQiOjE2NzAyNDY5MjIsImV4cCI6MTY3MjgzODkyMn0.Z9AroKR7ZryIx1QFkxxxkEj5zuUWpSmxhqAI1tcI5nU"
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
