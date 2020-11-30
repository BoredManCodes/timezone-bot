const db = require('../db/firestore')
const { send } = require('../actions/replyInChannel')

module.exports = {
  regex(settings) {
    return new RegExp(`^${settings.prefix}(?:invite)$`, 'gi')
  },
  async action({ msg, settings, match }) {
    console.log(
      `${msg.guild ? msg.guild.name : 'Private Message'} - Invite link (${
        msg.author.username
      }) `,
    )

    send(
      msg,
      `The bot invite link is <https://discord.com/api/oauth2/authorize?client_id=437598259330940939&permissions=75840&scope=bot>`,
      'none',
      settings,
    )
  },
}
