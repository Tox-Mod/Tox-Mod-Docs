---
id: client-perms
title: Client Permissions
sidebar_label: Client
description: Documentation on our Client/Bot based Permission System.
---

Tox Mod implements a client permission schema that naturally extends discord's native functionality. 
A set of permissions can be applied to each role or member of a server.

Below is a table of all current permissions and their hexidecimal values:

---

###### Tox Mod Permission Schema

| Permission                 | permLevel              | Description                                                 |
| -------------------------- | ---------------------- | ----------------------------------------------------------- |
| USER                       | 0                      | Allows execution of user level commands (help, ping etc)    |
| MODERATOR                  | 1                      | Allows execution of some moderation commands                |
| ADMINISTRATOR              | 2                      | Allows execution of all moderation commands                 |

---

## Permission Hierarchy

The default role, `@everyone`, always holds the default base permissions for every member of the guild. Each role and user can optionally have additional permissions associated with it.

---

## Calculating a User's Permissions

Paradise Bots permissions are only additive. Therefore a user's permissions are always exactly the union of their personal permissions and the permissions of every role that they have!

