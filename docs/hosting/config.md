---
id: config
title: Configuration 
sidebar_label: Configuration
description: Information on Setting up the Tox Mod Configs.
---

By default Tox Mod has a config that it uses for its routine needs
outside of the database. These configs include things such as the 
domain, mongo link, and more.

:::info

Pay close attention to these steps 
or you could have issues starting the project.

:::

---

## Default Config
```js:title=config

/**
   * For help setting up this file visit: 
*/


/**
* DISCORD CLIENT AND WEB STUFF GOES HERE!
*/
exports.token = process.env.TOKEN
exports.clientID = process.env.CLIENT_ID
exports.clientSecret = process.env.CLIENT_SECRET
exports.domain = process.env.DOMAIN
exports.mongo_url = process.env.MONGO_URL
exports.port = process.env.PORT
exports.maintenance = process.env.MAINTENANCE

/**
* SUPPORT SERVER SETTINGS
*/
exports.ServerInvite = process.env.SERVER_INV
exports.SupportGuild = process.env.SERVER_ID
exports.JoinLogs = process.env.JOIN_LOGS
exports.AuthLogs = process.env.AUTH_LOGS
exports.BanLogs = process.env.BAN_LOGS
exports.BugLogs = process.env.BUG_LOGS
exports.ErrLogs = process.env.ERR_LOGS

/**
* DEFINE THE USERS AND THEIR ACCESS 
*/

exports.owners = process.env.OWNERS
exports.admins = process.env.ADMINS
exports.beta = process.env.BETA_WL
exports.devs = process.env.DEVS

```

###### Config Variables

| Variable               | Description                                   |
| ---------------------- | --------------------------------------------- |
| token                  | The Discord Bot Token                         |
| clientID               | The Discord Client ID                         |
| clientSecret           | The Discord Client Secret                     |
| domain                 | Callback (Ex: https://domain.xyz/callback     | 
| mongo_url              | Mongo DB Connection String.                   |
| port                   | The port for the Web Server.                  |
| maintenance            | Maintenance Mode (true or false).             |
| ServerInvite           | Support Server Invite Link.                   |
| SupportGuild           | Support Server Guild ID.                      |
| JoinLogs               | Channel ID for Join/Leave Logs.               |
| AuthLogs               | Channel ID for the oAuth Logs.                |
| BanLogs                | Channel ID for the Ban Logs.                  |
| BugLogs                | Channel ID for the Bug Logs.                  |
| ErrLogs                | Channel ID for the Error Logs.                |
| owners                 | Array of Bot Owner IDs.                       |
| admins                 | Array of Bot Admin IDs.                       |
| devs                   | Array of Bot Dev IDs.                         |
| beta                   | Array of Beta User IDs.                       |

---

## User Config
Instead of using the env bars and predefined config shown above you can
setup the config to read the variables directly from that file instead of
the `.env` by filling out the variables as shown below

```js:title=config

/**
* DISCORD CLIENT STUFF GOES HERE!
*/
exports.token = ''

exports.clientID = ''

exports.clientSecret = ''

exports.domain = ''

exports.mongo_url = ''

exports.port = process.env.PORT

/**
* SUPPORT SERVER SETTINGS
*/
exports.ServerInvite = ''
exports.SupportGuild = ''
exports.JoinLogs = ''
exports.AuthLogs = ''
exports.BanLogs = ''
exports.BugLogs = ''
exports.ErrLogs = ''

exports.maintenance = false // true or false

/**
* DEFINE THE USERS AND THEIR ACCESS 
*/
exports.owners = [
    "", // User 1
    "", // User 2
    "", // User 3
    "", // User 4
    "", // User 5
    "" // User 6
]

exports.admins = [
    "", // User 1
    "" // User 2
]

exports.beta = [
    "", // User 1
    "", // User 2
    "", // User 3
    "" // User 4
]

exports.devs = [
    "", // User 1
    "" // User 2
]

```
