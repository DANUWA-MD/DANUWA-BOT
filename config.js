const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "jJgygCAK#a-wZ6-i4mqh_sXMEmQF5Ul3dRb6GsHCzHIWHNYnFOm0", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 DANUWA-MD Is Alive Now😍*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyCruT7GLA1mBflkwpqWwt9CrStKYTYnIs8", // Add Gemini API key here
  REMOVE_BG_API_KEY:"iHAFSjqkGw3V5XWHFKH6nh4z", // Add removebg API key here
  WEATHER_API_KEY: "e9ae16e3cffc4517a4663045250507", // Add your weather API key here
  BOT_OWNER: "94771575987", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94771575987"], // Replace your bot owner number here (same as bot owner number)
  AUTO_STATUS_REACT: "true",
  AUTO_STATUS_REPLY: "false",
  AUTO_STATUS_SEEN: "true",
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || defaultConfig.AUTO_STATUS_REACT,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REPLY|| defaultConfig.AUTO_STATUS_REPLY,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_SEEN || defaultConfig.AUTO_STATUS_SEEN,
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.ownerNumber
    ? process.env.ownerNumber.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
