import axios from 'axios';
/* const { ViberClient } = require('messaging-api-viber'); */

export default async function({ route, store }) {
    /* const client = ViberClient.connect({
        accessToken: '4ab3498feb67d4ea-13b937d35cdef139-8f4d592ff4262b1e'
    }); */

    const result = await axios.post(
        '/api/get_account_info',
        {},
        {
            headers: {
                'X-Viber-Auth-Token':
                    '4ab3498feb67d4ea-13b937d35cdef139-8f4d592ff4262b1e'
            }
        }
    );
    console.log(result);

    /*
  const likes = await axios.post('https://webmention.io/api/mentions.jf2', {
    params: {
      target: 'https://jeremywynn.com' + route.fullPath + '/',
      token: process.env.webmentionsToken,
      'wm-property': 'like-of',Z
        'per_page': 20
}
});
*/

    /* await client.setWebhook('https://vanil-test.netlify.com', [
      'delivered',
      'subscribed',
      'conversation_started'
  ]); */

    /* const info = await client.getAccountInfo();

    console.log(info);

    const members = info.members.map(member => member.id);

    const result = client.broadcastText(members, 'hi');

    console.log(result); */
}
