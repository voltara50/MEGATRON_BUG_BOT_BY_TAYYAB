module.exports = async function ({ conn, m, args, reply }) {
  try {
    if (!args[0]) {
      return reply("❌ Please provide a keyword.\n\n_Example: .emoji heart_");
    }

    const emojiMap = {
      heart: "❤️",
      fire: "🔥",
      smile: "😊",
      sad: "😢",
      angry: "😡",
      check: "✅",
      cross: "❌",
      clap: "👏",
      skull: "💀",
      bomb: "💣",
      star: "⭐",
      rose: "🌹",
      wave: "👋",
      devil: "😈",
      robot: "🤖",
      hacker: "👨‍💻",
    };

    const keyword = args[0].toLowerCase();
    const result = emojiMap[keyword];

    if (!result) {
      return reply("❌ Emoji not found. Try keywords like: heart, fire, smile, bomb, etc.");
    }

    reply(`Here is your emoji for *${keyword}*: ${result}\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\n📺 https://www.youtube.com/@TayyabExploitZ`);
  } catch (err) {
    console.error("❌ .emoji command error:", err);
    reply("❌ Something went wrong while fetching the emoji.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓");
  }
};