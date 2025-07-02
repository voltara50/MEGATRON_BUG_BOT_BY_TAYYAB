module.exports = async function ({ conn, m, reply, isGroup }) {
  try {
    if (!m.quoted) {
      return reply("❌ Please reply to the message you want to delete.\n\n_Example: .delete (reply to a message)_");
    }

    await conn.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.quoted.id,
        participant: m.quoted.sender,
      },
    });

    reply("✅ Message deleted successfully!\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\n📺 https://www.youtube.com/@TayyabExploitZ");
  } catch (err) {
    console.error("❌ .delete command error:", err);
    reply("❌ Couldn't delete the message. Bot may not have permission.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓");
  }
};