import axios from "axios";

const WHATSAPP_TOKEN = 'EAAHrb4Jx8hEBO9wH4YEYxAYDABS65TCz6MFjo4rF2xXjYzRHRUmEhjo9ZAeQnvBU2QNkOlNUZCZB20PDpwLMZCYImFEgZAQ7VAKAg5zwxDEFPoEfNVkZCdTZCISITmIHRLi2B91W6tQcz6ObWP4rWB3vmViZCPxv7sKTEFb4ZAcPEmyF8pOkkrYimxTgRQZA4bI52sVHFhJ25T5OksiYq5bvNoClDXKZAH4N3PnVfEZD';
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

