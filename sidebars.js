module.exports = {
  mainSidebar: [
    'about',
    {
      type: "category",
      label: "API",
      items: [
        "api/intro",
        "api/case",
        "api/users"
      ],
    },
    {
      type: "category",
      label: "Commands",
      items: [
        "commands/chat-cmds",
        "commands/info-cmds"
      ],
    },
    {
      type: "category",
      label: "Hosting",
      items: [
        "hosting/intro",
        "hosting/config",
        "hosting/start-up"
      ],
    },
    {
      type: "category",
      label: "Permissions",
      items: [
        "permissions/client-perms",
        "permissions/user-perms"
      ],
    }
  ],
};
