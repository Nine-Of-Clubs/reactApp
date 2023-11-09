import express from 'express';
import cors from 'cors';
import openAI from './openai'; 
import * as dotenv from 'dotenv';
const app = express();
app.use(cors());
dotenv.config();


const openai = new openAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // const userMessage = req.body.message;
    const userMessage = 'hello';

    const response = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: `${userMessage}`,
      max_tokens: 50,
      temperature: 1,
    });

    console.log(response);

    res.json({ response: response.choices[0].text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'error' });
  }
});

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default router;