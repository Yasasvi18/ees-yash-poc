---
layout: page
---

# Getting started

Welcome! We are excited to help you make your first API request. 

The Tenant Management module onboards new clients and sends an automated email notification. Once you receive your onboarding email, follow these steps to get started:

**Step 1: Review the welcome email**

Verisk Extreme Event Solutions (EES) will send you a welcome email containing your unique ClientID and ClientSecret, a client-specific URL for accessing our new REST APIs on the Verisk Synergy Studio platform, and additional details on uploading data to the shared platform. 

**Step 2: Generate access token key and secret**

Use the ClientID and ClientSecret credentials from the welcome email in any third-party API testing tool to generate an access token. This token is valid for 60 minutes. You will use these credentials to authenticate when making requests to endpoints that respond with Verisk EES protected information.

For more information about generating token via Postman or using Powershell, check out the [Authentication and Authorization](https://apicatalog.verisk.com/docs/api-strategy-auth/gha3af595rlyh-authentication-and-authorization) page. 

**Step 3: Upload data**

Follow the instructions in the welcome email to deploy the installer agent. Next, create a folder with read and write access, then copy all the files you want to upload to the shared platform. The installer agent will automatically sync all files from your folder to the shared platform in Synergy Studio. 

**Step 4: Make your first request**

From the available endpoints, select the import exposures API request. Pass the access token as a Bearer Token to the Authorization Header of the API request. After few seconds, you can review the return message. 

# Next steps

- [Review the new REST API operations](new-rest-operations.md)
- [Review the mapping between SOAP and REST API endpoints](soap-to-rest-api-endpoints.md)
