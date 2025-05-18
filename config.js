const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Default config for GitHub Actions (or manual edits)
const defaultConfig = {
  SESSION_ID: "jZhiGara#S666qMwuJsm2y0I0M1SY50GpNfkFxg-A-6uLNpLcHR0", // Users put their session ID here if NOT using env vars
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 DANUWA-MD Is Alive Now😍*",
  MOVIE_API_KEY: "sky|51c173810f25c71beb51b431867187b736b89c28",
  OPENAI_API_KEY: "",
  GEMINI_API_KEY: "",
  BOT_OWNER: "94776121326",
  ownerNumber: ["94776121326"],
  AUTO_READ_STATUS: "true",
};

module.exports = {
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  MOVIE_API_KEY: process.env.MOVIE_API_KEY || defaultConfig.MOVIE_API_KEY,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.OWNER_NUMBER
    ? process.env.OWNER_NUMBER.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
};
