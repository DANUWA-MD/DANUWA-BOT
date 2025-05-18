const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "jZhiGara#S666qMwuJsm2y0I0M1SY50GpNfkFxg-A-6uLNpLcHR0", // Paste your session id here
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DANUWA-MD Is Alive Now😍*",
MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|51c173810f25c71beb51b431867187b736b89c28",
OPENAI_API_KEY: process.env.OPENAI_API_KEY || "", // Paste your OPENNAI(gpt-4to-mini) key
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "", // Paste your gemini API key
BOT_OWNER: '94776121326',  // Replace with the owner's phone number
ownerNumber: ['94776121326'], // Replace with the owner's phone number
AUTO_READ_STATUS: "true",
};
