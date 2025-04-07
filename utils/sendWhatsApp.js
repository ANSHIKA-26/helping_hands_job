import axios from "axios";
const WHATSAPP_TOKEN = 'EAAObfK69d8wBOyM9yimDYrfrlMApO19hTleBZAZBM1V0MSB9ql3tZAgyRrQpduDZAuGZAvPhvZC4XZCt3bZC53YbHevsG98qV5aUy1QQtyiYC2wZAHl9zX9s3MOvj7jqVRqVaZCA41O4OpX2u1XZAOy1n77VNqau0JZCnk0afUlpTgLpsISRt39uEtKiHcnMfgRrZBKfIFLgjmPJ9P4wcV5e8719rZChidRdZARRpjKwM56';

const PHONE_NUMBER_ID = '640581552468843';

export const sendWhatsApp = async (toNumber, messageText) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: toNumber,
        type: 'text',
        text: { body: messageText }
      },
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(` Message sent to ${toNumber}`);
  } catch (error) {
    console.error(` Failed to send to ${toNumber}`, error?.response?.data || error.message);
  }
};

