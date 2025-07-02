module.exports = async function ({ conn, m, reply }) {
  try {
    let targetJid;

    if (m.quoted) {
      targetJid = m.quoted.sender;
    } else if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) {
      targetJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else {
      targetJid = m.sender;
    }

    reply(
      `🧾 *WhatsApp ID:*\n\`\`\`${targetJid}\`\`\`\n\n📺 *YouTube Channel:*\nhttps://www.youtube.com/@TayyabExploitZ\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓`
    );
  } catch (err) {
    console.error("❌ .id command error:", err);
    reply("❌ Failed to get ID.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓");
  }
};