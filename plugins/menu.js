const { cmd, commands } = require("../command");
const config = require("../config");

cmd(
  {
    pattern: "menu",
    react: "⚙",
    desc: "Displays all available commands",
    category: "main",
    filename: __filename,
  },
  async (conn, mek, m, { from, pushname, reply }) => {
    try {
      const categoryOrder = [
        "main",
        "owner",
        "group",
        "tools",
        "media",
        "download",
        "fun",
        "search",
        "other"
      ];

      let heading = `
            🌟 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 🌟    
════════════════════════     
🔮  Ｄ  Ａ  Ｎ  Ｕ  Ｗ  Ａ  －  Ｍ  Ｄ  🔮  

        ⚙ SYSTEM CORE MENU ⚙
════════════════════════   
`;

      let menuText = "";
      const categories = {};

      for (let cmdName in commands) {
        const cmdData = commands[cmdName];
        const cat = cmdData.category?.toLowerCase() || "other";

        if (!categories[cat]) categories[cat] = [];

        categories[cat].push({
          pattern: cmdData.pattern,
          alias: Array.isArray(cmdData.alias)
            ? cmdData.alias
            : cmdData.alias
            ? [cmdData.alias]
            : [],
          desc: cmdData.desc || "No description",
        });
      }

      for (const cat of categoryOrder) {
        if (!categories[cat]) continue;
        const cmds = categories[cat];
        cmds.sort((a, b) => a.pattern.localeCompare(b.pattern));
        menuText += `\n📁 *${cat.toUpperCase()}*\n─────────────────────────\n`;
        cmds.forEach((c) => {
          menuText += `🔹 *${c.pattern}*\n`;
          if (c.alias.length > 0) {
            menuText += `⚡ _Alias:_ ${c.alias.join(", ")}\n`;
          }
          menuText += `📝 _Description:_ ${c.desc}\n\n`;
        });
      }

      const totalCommands = Object.keys(commands).length;

      menuText += `
════════════════════════   
🧰 Total commands: ${totalCommands}
─────────────────────────
🚀 Powered By  ${config.BOT_NAME || "*DANUKA DISANAYAKA* 🔥"}
`;

      await conn.sendMessage(
        from,
        {
          image: {
            url:
              config.ALIVE_IMG ||
              "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
          },
          caption: heading + "\n" + menuText,
        },
        { quoted: mek }
      );
    } catch (err) {
      console.error(err);
      try {
        await reply("❌ Error generating menu.");
      } catch {
        await conn.sendMessage(from, { text: "❌ Error generating menu." });
      }
    }
  }
);
