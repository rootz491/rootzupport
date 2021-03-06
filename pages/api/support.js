// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initStripe from 'stripe';
const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
const dollarInInr = 70;
const items = {
    1: {
        price: 5 * dollarInInr * 100, // 5$ in inr (paise)
        name: 'coffee',
    },
    2: {
        price: 12 * dollarInInr * 100, // 12$ in inr (paise)
        name: 'booster in studies',
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { c, msg } = req.body;
        console.log(req.body);

        //  validations
        // if (!(c && msg)) {
        //     res.statusCode = 400;
        //     res.json({ error: 'not enough input params' });
        //     return;
        // }

        if (msg.length > 150) {
            res.statusCode = 400;
            res.json({ error: 'Message too long' });
            return;
        }

        if (c < 0 || c > 2) {
            res.statusCode = 400;
            res.json({ error: 'Invalid option' });
            return;
        }
  
        const lineItems = [{
            price_data: {
                currency: 'inr',
                product_data: {
                    name: items[c].name,
                },
                unit_amount: items[c].price,
            },
            quantity: 1
        }];

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: lineItems,
                mode: 'payment',
                success_url: `${process.env.HOST_URL}/success`,
                cancel_url: `${process.env.HOST_URL}/cancel`,
                payment_intent_data: {
                    metadata: {
                        message: msg
                    }
                }
            });
    
            res.json({ url: session.url });
            
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }

    }
    else {
        res.status(405).send('Please use POST method');
    }
}
