---
layout: page
---

# SOAP to REST migration guide

## Overview

Verisk Synergy Studio version of the APIs is a big deal. This section provides information to help clients migrate from the legacy SOAP-based APIs to Verisk Synergy Studio REST-based APIs. Information related to the scope of the Synergy Studio RESTful APIs for the customer preview release in 2025, key differences and mappings between SOAP and REST endpoints, and details the account creation, login, and authentication.  

As such, we’ve broken this migration into a few sections:


Section | What's new with Synergy Studio API | Learn about the new endpoints and functionality that we’ve released to the Synergy Studio API customer preview.
---------|----------|---------
 1 | **Ready to migrate?** | Get started with your migration with a set of guides and instructions.
 2 | **Data format migration guide** | Learn how to rework your data parsers that previously worked with the legacy Touchstone and Touchstone Re data formats.
 3 | **[API endpoint map]("./docs/soap-to-rest-api-endpoints.md")** | See how the legacy Touchstone and Touchstone Re API endpoints map to the new Synergy Studio API endpoints.


### Before you begin

Things to consider: 

- Review API Documentation in StopLight to understand changes in endpoints, parameters authentication, and many more.
- Identify the list of SOAP endpoints that will be deprecated and the equivalent REST API endpoints.  
- Make an inventory list of the API endpoints being used, including how they integrate within your existing applications.
- Review the authentication mechanism for testing REST API endpoints in StopLight. 
- Prepare for data mapping: note changes in data formats or structures to ensure data is properly mapped between the old and new APIs.


### Changes to expect when we migrate 

We’re thrilled to introduce StopLight, our new developer portal, which will eventually replace Developer Zone. 
StopLight will become your central hub for all API-related needs. Here's what you can expect during the migration:

- *Consolidated API Resources*: StopLight will serve as the single source of truth for all API documentation, support materials, and integration tools. 
- *Seamless Interaction*: You’ll be able to interact with and extend our APIs with enhanced features for testing and development. 
- *Comprehensive Support*: StopLight will house detailed API support materials, making it easier to troubleshoot, explore, and implement our APIs. 

We’re committed to making this transition smooth for you, with clear guidance and support along the way. More updates to follow as we roll out the migration!








