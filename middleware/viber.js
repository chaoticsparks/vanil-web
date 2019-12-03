const { ViberClient } = require('messaging-api-viber');

export default async function({ route, store }) {
    const client = ViberClient.connect({
        accessToken: '4ab3498feb67d4ea-13b937d35cdef139-8f4d592ff4262b1e'
    });

    /* await client.setWebhook('https://vanil-test.netlify.com', [
      'delivered',
      'subscribed',
      'conversation_started'
  ]); */

    const info = await client.getAccountInfo();

    console.log(info);

    const members = info.members.map(member => member.id);

    const result = client.broadcastText(members, 'hi');

    console.log(result);
}
