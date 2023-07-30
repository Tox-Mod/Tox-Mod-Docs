---
id: case
title: getUserCase()
sidebar_label: getUserCase()
description: Information about seeing a User Infraction based on the Infraction ID.
---

import Router from "../../src/custom/Router";

Tox Mod has a custom reputation and trust system based entirely around a users guild
infractions (Ban, Warn Etc). All infractions on the user are stored and available globally

## Base URL

<Router type="GET" path="api.toxmod.xyz" />

---

## Access Point

<Router type="GET" path="/v1/case/:userID/:caseID" />

---

## Paramaters 

| Syntax        | Description                                       |
| ------------- | ------------------------------------------------- |
| userID        | User ID of the User to fetch a case for           |
| reason        | Reason the User received the Infraction           |
| action        | The action that was taken (Ban, Kick etc)         |
| serverID      | The Server ID where the Infraction Happened       |
| moderator     | User ID of the person who gave the Infraction     |
| case          | The Infraction Case ID                            |
| date          | The Date and Time of the Infraction               |
| duration      | The Duration if the Infraction (If applicable)    |

---

## Example Response
```json

{
   "userID":"486659270876856362",
   "reason":"This was a test",
   "action":"Warn",
   "serverID":"698445309663117352",
   "moderator":"510065483693817867",
   "case":1,
   "date":"01/14/2021 23:20:26 PM",
   "duration":"No duration for this Action"
}

```

---

## Example Usage (JS) 
```js
const fetch = require("node-fetch");

fetch(`https://api.toxmod.xyz/v1/case/486659270876856362/1`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res => console.log(await res.json()));

```
