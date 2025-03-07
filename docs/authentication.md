---
layout: page
tags: [security, Authenticate, Authorize]
---

# Authentication

Use the Verisk Synergy Studio URL to login and authorize users or REST client applications. The authorization is valid is time bound. 

![authenticationProcess.png](../assets/images/authenticationprocess.png)


You can pass the Verisk Synergy Studio session token in the Authorization header, for example:

Request 

```shell
{
  "Username": "serviceaccount@verisk.com",
  "Password": "xxxx"
}
```




Response

```shell
{
  "AuthToken": "Bearer 
  eyJjdXN0b21lcl9uYW1lIjoiREVNTyIsImp0aSI6IkQxNjkyN0U0MjVGRDFGMjJFNTI5IiwidW5pcXVlX25hbWUiOiJhdXRvbWF0aW9uc2VydmljZUBkZW1vLmFpciIsInJvbGUiOiJBcGlBZG1pblVzZXIiLCJuYmYiOjE3MjU0MTMzNjIsImV4cCI6MTcyNTQyMDU2MiwiaWF0IjoxNzI1NDEzMzYyLCJpc3MiOiJodHRwczovL2FpcmNsb3VkYXBpLmFpci13b3JsZHdpZGUuY29tLyIsImF1ZCI6Imh0dHBzOi8vYWlyY2xvdWRhcGkuYWlyLXdvcmxkd2lkZS5jb20vIn0.ePkR2ZjiRAp9kZRzIXB6Gs5mZ_MVR700ifbh5BsTgVE",
  "HasErrors": false,
  "Errors": [],
  "Message": ""
}
```