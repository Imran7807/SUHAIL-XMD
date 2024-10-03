const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_18_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnN2dktKYTVYeFVodm9rZXBKS0JUdHpMWlcrZlNhN1BBWEVGSkltYlFLST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLXVlSVVHd3hUOG1vRFVVYmp2Z2VCQVwiLFxuICBcInBob25lSWRcIjogXCIzMGE0OTQ0OS01OTVlLTQ1MDUtYWUyZS1kNGUyN2QyYjljNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMzksXG4gICAgICA5MSxcbiAgICAgIDM0LFxuICAgICAgNjAsXG4gICAgICAxNzQsXG4gICAgICAxMixcbiAgICAgIDMwLFxuICAgICAgMjQ1LFxuICAgICAgNSxcbiAgICAgIDE3NixcbiAgICAgIDIxNyxcbiAgICAgIDIzNCxcbiAgICAgIDEwMixcbiAgICAgIDE2NixcbiAgICAgIDIyMyxcbiAgICAgIDM2LFxuICAgICAgMTg4LFxuICAgICAgNDEsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMTk0LFxuICAgICAgMjM5LFxuICAgICAgMjE3LFxuICAgICAgMTE0LFxuICAgICAgMTU2LFxuICAgICAgNDgsXG4gICAgICAyMzAsXG4gICAgICAyMjMsXG4gICAgICA0MyxcbiAgICAgIDE1LFxuICAgICAgMTcxLFxuICAgICAgMjM2LFxuICAgICAgOTgsXG4gICAgICAxMjAsXG4gICAgICAyMTgsXG4gICAgICAxMjksXG4gICAgICAyMixcbiAgICAgIDEyNixcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFVDFNRDdFU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDQ2MTIzMjY0OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MzIzNzUzNjQ4OTY0MjozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaTNvcmtGRUtUNCs3Y0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlTMlpFRG5kVDhDejRDNlJYelVTZ3dlMEhQWFdsMmtmZ3VIUmRVYlpnRkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMWw1Tms4Vmp5M2V0VmZ4YVc5UUJNa3J2MFpObk5aNlpER3U3eXZLaXp5MytFVEJrbURPcUlMUml1MUJweU1Xald6Qk9aeVBFQWtQakJwd2JWRHdHQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHFjSjRSYUF6ZkphZEhQNWtqSW1KdEthZjFGTEF0V1ZMelJKTlpBUUVyc2duRDhQNWNmSFEydXN4OEhXcWlVRjNOZWdXNGhnYUtyRUlIWnU4QVhhanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ2MTIzMjY0OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk4NjcyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY4UFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjhQLmpzb24iOiAie1wia2V5RGF0YVwiOlwicHJyL1dPUGJpbkVKWmZhN3JZY0kwdlZ4R0RlNVVoZUNOcjRXWW1BSG1pdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDYyMjc5MTEyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
