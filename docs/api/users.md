---
id: users
title: getUserInfo()
sidebar_label: getUserInfo()
description: Information about fetching a User by ID.
---

import Router from "../../src/custom/Router";

Tox Mod stores some User Information to display globally!

## Base URL

<Router type="GET" path="api.toxmod.xyz" />

---

## Access Point

<Router type="GET" path="/v1/users/:userID" />

---

## Paramaters 

| Syntax        | Description                                       |
| ------------- | ------------------------------------------------- |
| userID        | User ID of the User to fetch info for             |
| bio           | Some info about the Provided User                 |
| website       | The Users website link                            |
| twitter       | The Users Twitter link                            |
| github        | The Users GitHub link                             |
| instagram     | The Ussrs Instagram link                          |

---

## Example Response
```json
{
   "userID":"510065483693817867",
   "bio":"Freelance Software Developer, Curious by nature, Wannabe Fullstack Developer and always aiming at improvement. ",
   "website":"https://toxicdev.me",
   "github":"TheRealToxicDev",
   "twitter":"TheRealToxicDev",
   "instagram":"therealtoxicdev"
}

```

---

## Example Usage (JS) 
```js
const fetch = require("node-fetch");

fetch(`https://api.toxmod.xyz/v1/users/510065483693817867`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res => console.log(await res.json()));

```

