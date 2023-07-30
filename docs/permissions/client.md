---
id: client-perms
title: Client Permissions
sidebar_label: Client
description: Documentation on our Client/Bot based Permission System.
---

Tox Mod implements a client level permission schema that naturally extends discord's native functionality. 
A set of permissions can be applied to each role or member of a server.

Below is a table of all current permissions and their hexidecimal values:

###### Discord Permission Flags

| Permission                 | Value                  | Description                                                 |
| -------------------------- | ---------------------- | ----------------------------------------------------------- |
| ADMINISTRATOR              | 0x0001                 | Grants all permissons                                       |
| VIEW_PUBLIC_LOGS           | 0x0002                 | Allows viewing any action logged in a public channel        |
| VIEW_PRIVATE_LOGS          | 0x0004                 | Allows viewing any action logged in the guild               |
| REVERT_LOG_ACTIONS         | 0x0008                 | Allows reverting any reversible action logged               |
| VIEW_SETTINGS              | 0x0100                 | Allows viewing settings for the guild                       |
| SEND_MESSAGES              | 0x0112                 | Allows Sending Messages and Executing Base Level Commands   |
| MANAGE_SETTINGS            | 0x0200                 | Allows modifying settings for the guild                     |
| EXEC_PURGE_CMD             | 0x0400                 | Allows executing the purge command                          |

:::warning

The default permission value for a new guild is `0x0112`.

:::

---

## Permission Hierarchy

The default role, `@everyone`, always holds the default base permissions for every member of the guild. Each role and user can optionally have additional permissions associated with it.

---

## Calculating a User's Permissions

Tox Mods permissions are only a additive. Therefore a user's permissions are always exactly the union of their personal permissions and the permissions of every role that they have

