// process.env["NTBA_FIX_319"] = 1;
const TelegramAPI = require("node-telegram-bot-api");
const Tgfancy = require("tgfancy");
require("dotenv").config();
const { messages, systemMessages } = require("./data");

// const bot = new TelegramAPI(process.env.BOT_TOKEN, { polling: true });
const bot = new Tgfancy(process.env.BOT_TOKEN, {
  polling: true,
  tgfancy: {
    textPaging: true,
    emojification: true,
  },
});
let language = "zu";

const languages = {
  en: "English",
  ru: "Русский",
  ua: "Українська",
};

const messageParameter = {
  parse_mode: "HTML",
  // disable_web_page_preview: true,
};

const noTranslation = {
  zu: "<pre>--- No translation in this language ---</pre>",
  en: "<pre>--- No translation in this language ---</pre>",
  ru: "<pre>--- Нет перевода для данного языка ---</pre>",
  ua: "<pre>--- Немає перекладу для цієї мови ---</pre>",
};

const commandList = [
  {
    command: "/start",
    description: getSystemMessage(systemMessages.commands.start),
  },
  {
    command: "/about",
    description: getSystemMessage(systemMessages.commands.about),
  },
  {
    command: "/info",
    description: getSystemMessage(systemMessages.commands.info),
  },
  {
    command: "/send_link",
    description: getSystemMessage(systemMessages.commands.send_link),
  },
  {
    command: "/suggest_translation",
    description: getSystemMessage(systemMessages.commands.suggest_translation),
  },
];

const commands = {
  "/start": async (chatId) => {
    await bot.sendPhoto(chatId, "./logo.jpg");
    return bot.sendMessage(
      chatId,
      getSystemMessage(systemMessages.language.chooseLanguage),
      languageButtons
    );
  },
  "/about": async (chatId) => {
    return bot.sendMessage(
      chatId,
      getSystemMessage(systemMessages.commandMessages.about),
      messageParameter
    );
  },
  "/info": async (chatId) => {
    return bot.sendMessage(
      chatId,
      getSystemMessage(systemMessages.commandMessages.info),
      messageParameter
    );
  },
  // "/send_link": async (chatId) => {
  //   return bot.sendMessage(
  //     chatId,
  //     getSystemMessage(systemMessages.commandMessages.send_link),
  //     messageParameter
  //   );
  // },
  // "/suggest_translation": async (chatId) => {
  //   return bot.sendMessage(
  //     chatId,
  //     getSystemMessage(systemMessages.commandMessages.suggest_translation),
  //     messageParameter
  //   );
  // },
};

const languageButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      Object.keys(languages).map((value) => {
        return { text: languages[value], callback_data: value };
      }),
    ],
  }),
};

function start() {
  bot.on("polling_error", console.log);

  // bot.setMyCommands([
  //   { command: "/start", description: "Выбор языка" },
  //   { command: "/about", description: "Информация о канале" },
  //   { command: "/info", description: "доступные команды" },
  //   { command: "/send_link", description: "Отправить новость на рассмотрение" },
  //   { command: "/suggest_translation", description: "Предложить перевод" },
  // ]);

  // command send handling
  bot.on("message", async (msg) => {
    try {
      const chatId = msg.chat.id;
      const text = msg.text;
      const lng = msg.from.language_code;
      // console.log(msg);

      // if (lng in languages) {
      //   language = lng;
      // }

      if (text in commands) {
        commands[text](chatId);
      }
    } catch (error) {
      console.log(error);
    }
  });

  // button press handling
  bot.on("callback_query", async (msg) => {
    try {
      const data = msg.data;
      const chatId = msg.message.chat.id;

      if (language === data) {
        return bot.sendMessage(
          chatId,
          `${systemMessages.language.languageSelected[language]}`,
          messageParameter
        );
      }

      language = data;
      await bot.sendMessage(
        chatId,
        `${systemMessages.language.languageSet[language]}`,
        messageParameter
      );
      showMessages(chatId, messages);
    } catch (error) {
      console.log(error);
    }
  });
}

start();

async function showMessages(chatId, msgArray) {
  for (const item of msgArray) {
    await chatActions[item.message.type](chatId, item);
  }
}

function getTextMessage(obj, key) {
  return key in obj ? obj[key] : noTranslation[language];
}

function getAttachments() {}

const chatActions = {
  gallery: async function (chatId, item) {
    try {
      let photos = [];
      let videos = [];

      if ("photo" in item.message) {
        photos.push(...getRequiredLanguages(item.message.photo));
        photos = getMediaArray("photo", photos);
      }
      if ("video" in item.message) {
        videos.push(...getRequiredLanguages(item.message.video));
        videos = getMediaArray("video", videos);
      }

      const media = videos.concat(photos);
      if (media.length > 1) {
        let text = `${getTextMessage(
          item.message.text,
          language
        )}${getSourceMessage(item)}`;

        // split text by 800 characters
        if (text.length > 800) {
          const count = Math.ceil(text.length / 800);
          let textArr = [];
          for (let i = 0; i < count; i++) {
            let slicedText = text.slice(i * 800, i * 800 + 800);
            textArr.push(slicedText);
          }
          text = textArr;
          // console.log(text);
        }

        media[0].parse_mode = "HTML";
        if (Array.isArray(text)) {
          media[0].caption = "<code>1...</code> " + text[0];
          await bot.sendMediaGroup(chatId, media, messageParameter);
          for (let i = 1; i < text.length; i++) {
            await bot.sendMessage(
              chatId,
              `<code>${i + 1}...</code> ${text[i]}`,
              messageParameter
            );
          }
        } else {
          media[0].caption = text;
          await bot.sendMediaGroup(chatId, media, messageParameter);
        }
      }

      if (media.length === 1) {
        const type = media[0].type;
        this[type](chatId, item);
      }
    } catch (error) {
      console.log(error);
    }
  },
  text: async (chatId, item) => {
    try {
      await bot.sendMessage(
        chatId,
        `${getTextMessage(item.message.text, language)}\n${getSourceMessage(
          item
        )}`,
        messageParameter
      );
    } catch (error) {
      console.log(error);
    }
  },
  audio: async (chatId, item) => {},
  document: async (chatId, item) => {},
  video: async (chatId, item) => {
    // await bot.sendVideo(chatId, item.message.video[language]);
    // await bot.sendMessage(chatId, item.message.video[language]);
  },
  photo: async (chatId, item) => {
    // await bot.sendPhoto(chatId, item.message.photo[language]);
  },
  youtube: async (chatId, item) => {
    try {
      let videoLinks = getRequiredLanguages(item.message.video).toString(); // get video links
      // videoLinks ? (videoLinks += "\n\n") : null;
      const message = getTextMessage(item.message.text, language); // get text
      const sourceLinks = getSourceMessage(item);

      if (videoLinks || sourceLinks || message) {
        await bot.sendMessage(
          chatId,
          `${message}${videoLinks || sourceLinks}`,
          messageParameter
        );
      }
    } catch (error) {
      console.log(error);
    }
  },
};

function makeMediaObject(type, media) {
  return {
    type,
    media,
  };
}

function getMediaArray(type, arr) {
  return arr.map((link) => makeMediaObject(type, link));
}

function checkLanguageInObject(obj) {
  return language in obj;
}

function getRequiredLanguages(obj) {
  let mediaArr = [];
  if ("all" in obj && obj.all) {
    mediaArr.push(...obj.all);
  }

  if (language in obj && obj[language]) {
    mediaArr.push(...obj[language]);
  }

  return mediaArr;
}

function getSourceMessage(item) {
  const sourceLinks = item.source.toString();
  return `\n\n<i>${systemMessages.message.source[language] + sourceLinks}</i>`;
}

function getSystemMessage(obj) {
  if (language in obj && typeof obj[language] === "string") {
    return obj[language];
  }

  return obj.en;
}

// function separateByNewLine(arr) {
//   let newLine = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       newLine += arr[i];
//     }
//   }
//   return newLine;
// }
