const express = require("express");
const app = express();
const cors = require('cors')
const { OpenAI } = require("openai");

app.use(express.json());
app.use(cors())

const openai = new OpenAI({
    apiKey: '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'
});

app.post("/g", async (req, res) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });

    console.log('chatCompletion', chatCompletion);

    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => console.log(`Server is running on port ${5000}!!`));