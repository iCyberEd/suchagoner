// all photo[language] and video[language] have to be array
noTranslation = "No translation in this language";

// english language insystemMessages is a must otherwise there will be errors
exports.systemMessages = {
  language: {
    languageSet: {
      en: "<pre>English language selected</pre>",
      ru: "<pre>Выбран русский язык</pre>",
      ua: "<pre>Вибрана українська мова</pre>",
    },
    chooseLanguage: {
      en: "Hello, Choose language:",
      ru: "Привет, выбери язык:",
      ua: "Привіт, обери мову:",
    },
    languageSelected: {
      en: "This language is already selected",
      ru: "Этот язык уже выбран",
      ua: "Ця мова вже обрана",
    },
  },
  message: {
    source: {
      en: "Source: ",
      ru: "Источник: ",
      ua: "Джерело: ",
    },
  },
  commands: {
    start: {
      en: "Language selection",
      ru: "Выбор языка",
      ua: "Вибір мови",
    },
    about: {
      en: "Available commands",
      ru: "Доступные комманды",
      ua: "Доступні команди",
    },
    info: {
      en: "Channel Information",
      ru: "Информация о канале",
      ua: "Інформація про канал",
    },
    send_link: {
      en: "Send news for consideration",
      ru: "Отправить новость на рассмотрение",
      ua: "Надіслати новину на розгляд",
    },
    suggest_translation: {
      en: "Suggest a translation",
      ru: "Предложить перевод",
      ua: "Запропонувати переклад",
    },
  },
  commandMessages: {
    start: {},
    about: {
      en: `Why do you think there is such hostility towards the Russians in the world?`,
      ru: `Как вы думаете, почему к русским сложилась такая неприязнь в мире?`,
      ua: `Як ви вважаєте, чому до росіян склалася така неприязнь у світі?`,
    },
    info: {
      en: `Why do you think there is such hostility towards the Russians in the world?`,
      ru: `Как вы думаете, почему к русским сложилась такая неприязнь в мире?`,
      ua: `Як ви вважаєте, чому до росіян склалася така неприязнь у світі?`,
    },
    send_link: {
      en: `Link accepted. The moderator will decide on adding to the group.`,
      ru: `Ссылка принята. Модератор примет решение о добавлении в группу.`,
      ua: `Посилання прийняте. Модератор ухвалить рішення про додавання до групи.`,
    },
    suggest_translation: {
      en: `Your translation will be reviewed by a moderator.`,
      ru: `Ваш перевод будет рассмотрен модератором.`,
      ua: `Ваш переклад буде розглянуто модератором.`,
    },
  },
};

const messages = [
  // {
  //   id: 1,
  //   date: "01.01.1950",
  //   source: ["https://google.com"],
  //   message: {
  //     type: "text",
  //     text: {
  //       ru: "Тестовое сообщение :heart:",
  //       en: "Test message :heart:",
  //       ua: "Тестове повідомлення :heart:",
  //     },
  //   },
  // },
  {
    id: 2,
    date: "09.05.2022",
    source: [
      "https://focus.ua/uk/world/514977-na-pervom-kanale-v-rossii-vo-vremya-koncerta-ko-dnyu-pobedy-pokazali-bonni-i-klayda-video",
    ],
    message: {
      type: "gallery",
      photo: {
        all: [
          "https://focus.ua/static/storage/thumbs/740x375/f/ed/46024547-b6be80bb48929c66a733548e5db5aedf.jpg?v=2755_1",
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bonnie-and-clyde-1933-american-school.jpg",
        ],
      },
      text: {
        en: `<b>On Channel One in Russia, Bonnie and Clyde were shown during the Victory Day concert.</b>
        During the broadcast of the concert "Lessons of History. A Festive Concert for the Victory Day" on the Russian First Channel, a curious thing took place. One of the issues was accompanied by black-and-white photographs of people who probably participated in the Second World War as part of the Red Army. However, among the photos suddenly appeared a photo of American robbers during the Great Depression - Bonnie and Clyde.`,
        ru: `<b>На "Первом канале" в России во время концерта ко Дню Победы показали Бонни и Клайда.</b>
        Во время трансляции концерта "Уроки истории. Праздничный концерт ко Дню Победы" на российском Первом канале состоялся курьез. Один из номеров сопровождался черно-белыми фотографиями людей, вероятно, участвовавших во Второй мировой войне в составе «Красной армии». Однако среди фотографий внезапно появилось фото американских грабителей времен Великой депрессии – Бонни и Клайда.`,
        ua: `<b>На "Першому каналі" в Росії під час концерту до Дня Перемоги показали Бонні і Клайда.</b>
        Під час трансляції концерту "Уроки історії. Святковий концерт до Дня Перемоги" на російському "Першому каналі" відбувся курйоз. Один із номерів супроводжувався чорно-білими фотографіями людей, які, ймовірно, брали участь у Другій світовій війні у складі "Червоної армії". Проте серед фотографій раптово з'явилося фото американських грабіжників часів Великої депресії — Бонні і Клайда.`,
      },
    },
  },
  {
    id: 3,
    date: "11.05.2022",
    source: [
      "https://www.youtube.com/watch?v=fu1iOmHdKR8&ab_channel=%D0%A1%D0%BB%D1%83%D0%B6%D0%B1%D0%B0%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B8%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8",
    ],
    message: {
      type: "gallery",
      text: {
        en: `
        [Using many words of parasites and pronouns. The text is partially changed to make it clear what it is about.]
        - Do you know what these children say to our children? On May 9, teachers at school asked us to draw something for the holiday. These children said this is not our holiday. These are children, our children at school speak. And you know that they will then grow up and it will be so, these are Nazis, they will grow up to be the same. Why does Putin say to all of them "go to Russia, go," these damn fools? They would have taken everyone there, they would have killed.
        - How kind you are.
        - I would, I would, on the contrary, inject them with drugs, if I worked, so that ... And I looked into their eyes and said, "die, suffer." I would also cut their penises like this, I would cut out the stars on their backs and in general would cut off the ear every day, cut off the finger so that it would hurt them so much.
        - These are children, Yulia.
        - I really hate these Ukrainians, Vova, now I hate them in general. I would even shoot these children.
        `,
        ru: `
        - А ты знаешь вот эти дети, нашим детям говорят, что 9 мая там в школе просили нарисовать короче ну там к празднику, они сказали это не наш праздник, это дети, наши дети в школе говорят. И ты в курсе, что они потом выростут так и будет, это нацики, под это, они подрастут будут такими же. Чего Путин всех их в Россию едьте, едьте, придурков этих, блин? Взяли бы всех там попереубивали бы да и нахер.
        - Какая ты добрая. 
        - Я бы, я бы им наоборот наркотики вкололола, еслибы работала, чтобы... И смотрела им в глаза и сказал б "сдыхайте, мучайтесь". Я б им письки тоже резала вот так вот, звезды на спинах вырезала бы и вообще по уху каждый день отрезала бы, по пальцу чтоб им больно так было.
        - Это ж дети, Юль. 
        - Я прям ненавижу этих украинцев, Вов, теперь вообще ненавижу. Я бы даже детей этих расстреляла бы.
        `,
        ua: `<b>«Мирні мешканці» рф закликають своїх солдатів вбивати та катувати українських дітей.</b>
        Це шокуюче перехоплення СБУ вдалося зробити під Харковом, де ворожий окупант телефоном розмовляв зі своєю дружиною з рф. Вона живе у прикордонному з Україною місті, куди насильно евакуюють наших громадян.Цю істоту жіночої статі обурило, що українські діти відмовилися малювати символіку до святкування «Дня победы». Тож вона запропонувала покарати їх нелюдськими катуваннями:
        «Я бы им наркотики вколола, если бы работала,  смотрела бы им в глаза и сказала бы: «Сдыхайте, мучайтесь». Я бы им пи*ьки резала, звёзды на спинах вырезала, и вообще по уху бы каждый день отрезала, по пальцу, чтобы им больно так было», – говорить рашистка.
        Навіть самого окупанта шокували ці слова і він не знав, що відповісти…
        `,
      },
      photo: {
        all: [
          "https://zmina.info/wp-content/uploads/2022/05/sbu-vk-rozmova2.jpeg",
          "https://zmina.info/wp-content/uploads/2022/05/sbu-vk-rozmova3.jpeg",
        ],
        ru: ["https://zmina.info/wp-content/uploads/2022/05/rozmova-sbu.png"],
        ua: [
          "https://www.youtube.com/watch?v=fu1iOmHdKR8&ab_channel=%D0%A1%D0%BB%D1%83%D0%B6%D0%B1%D0%B0%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B8%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8",
        ],
      },
    },
  },
  {
    id: 4,
    date: "13.05.2022",
    source: [
      "https://www.youtube.com/watch?v=LvfPgufTiRo&ab_channel=%D0%A3%D0%9A%D0%A0%D0%90%D0%98%D0%9D%D0%9024",
    ],
    message: {
      type: "youtube",
      text: {
        en: `<b>Russian women are AFRAID of the return of their brutalized husbands from Ukraine.</b>
        - [in a drunken voice] Nastya, I don't want to tell you that I shoot at civilians there, I kill them, I break their knees. Why do you want to know?
        - I do not know.
        - What did you want to know from me? I won't tell you, Nastya, how real it is. Nastya...
        - I hoped you weren't fighting.
        - Nastya, my sun, of course, I am at war, what do you think? Nastya, I can take... Nastya, you know, I can take a person and shoot "bam" in the head with a Kalashnikov machine gun, I can shoot 100 people directly with the PKMs, I can tear off the head. What, you don't believe it? Nastya, I've become a dickhead, I've become a fucking nut.
        - How will we live with you?
        - But I can kill a person in general in the head. I'm just saying I'll kill you in the head. I'm not afraid.
        - Are you proud of it?
        - I'm not proud, Nastya. I just don't give a fuck. I will come home, I will come home alive, healthy and that's it. Nastya, I will raise my son as I should... When there were civilians, I threw civilians into the trenches. I shot everyone in the head, killed them. They cried, begged me - I still shot them. Nastya, don't look at me, because I'm so "kind" to you. I am with you as I am, I will come as I am, Nastya ... I will be a dumbass, I will come to you.
        - You said you'd be good. Now you're talking...
        - I'm not telling you ... I've never told you a lie, and I won't tell you, Nastya. I put these "hohlov" [insulting - Ukrainians] on their knees, they begged me, they said "Russia Forever", I forced them all to say "Russia Forever" and they stood on my knees, and I forced them, Nastya. So don't tell me what to do...
        `,
        ru: `<b>Российские жены БОЯТСЯ возвращения озверевших мужей из Украины.</b>
        - [пьяным голосом] Настя, я не хочу тебе рассказывать, что я там стреляю по гражданским людям, там убиваю, колени разбиваю. Зачем тебе это?
        - Не знаю.
        - Что ты от меня хотела знать? Я тебе не буду, Настя, рассказывать, как оно реально. Настя...
        - Я надеялась, что ты не воюешь.
        - Настя, солнышко мое, конечно, воюю, ты что думаешь? Настя, я могу взять... Настя, ты знаешь, я могу взять человека и выстрелить в голову "бам" с пулемета Калашникова, с ПКМа прямо 100 человек прошью, там голову оторвать. Ты что, в это не веришь? Настя, я долбоебом стал у тебя, я вообще ебанутым стал.
        - Как жить будем с тобой?
        - Но я могу убить человека вообще в голову. Я просто говорю в голову убью. Я не боюсь.
        - Ты этим гордишься?
        - Я не горжусь, Насть. Мне просто похуй. Я приеду домой блядь, я приеду домой живым-здоровым и все. Я сына... Настя, я сына воспитаю, как мне стоит, надо будет Настя... Когда были гражданские, я гражданских в окопы кидал. Я всем по голове стрелял, убивал их. Они плакали, умоляли меня - я их все равно стрелял. Настя, ты на меня не смотри, то, что я у тебя такой "добрый". Я у тебя, какой есть, я приеду таким, какой я есть, Настя... Я буду может долбоебом, приеду к тебе.
        - Ты же сказал, хорошим приедешь. Сейчас говоришь... 
        - Я тебе не говорю... Я тебе никогда неправду не говорил, и не буду говорить, Насть. Я этих хохлов на колени ставил, они меня умоляли, они говорили "раша форевер", я их всех заставлял говорить "раша форевер" и они у меня на коленях стояли вот так вот эти хохлы, а я их заставлял, Настя. По этому не надо мне говорить...
        `,
      },
      video: {
        ru: [
          "https://m.youtube.com/watch?v=LvfPgufTiRo&ab_channel=%D0%A3%D0%9A%D0%A0%D0%90%D0%98%D0%9D%D0%9024",
        ],
        ua: [
          "https://m.youtube.com/watch?v=LvfPgufTiRo&ab_channel=%D0%A3%D0%9A%D0%A0%D0%90%D0%98%D0%9D%D0%9024",
        ],
      },
    },
  },
  {
    id: 5,
    date: "30.03.2022",
    source: [
      "https://www.youtube.com/watch?v=dqUd0-OOQ6g&ab_channel=24%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB",
    ],
    message: {
      type: "youtube",
      text: {
        en: `<b>Russian soldiers rape minors and eat dogs.</b>
        1.
        - What the hell did they do? [laugh]
        - Fuck. In short, there are three tankers, they took the girl and raped her.
        - Who?
        - Three tankers. A sixteen year old girl.
        - Ours?
        - Yes.
        - Damn you fucking...

        2.
        - Kolya, do you eat normally at least?
        - Yes, good. The day before yesterday, The day before yesterday we killed Alabai.
        - Whom?
        - Alabay.
        - Do you eat dogs?
        - Well, it was ... I wanted meat [inaudible]
        - And what, there is nothing to eat?
        - Yes, there are dry rations, but we are already tired of dry rations.
        - Oh, my God, damn it, this is our army ...
        - We've killed all the chickens and geese already, here...
        - Oh damn...
        - No, it's okay, it's okay.
        - Damn, fuck. Actually damn.
        `,
        ru: `<b>Российские солдаты насилуют несовершеннолетних и едят собак.</b>`,
        // 1.
        // - Что, блядь, это и сделали? [смех]
        // - Ебали. Тут короче вообще танкиста три, взяли девченку изнасиловали.
        // - Кто?
        // - Три танкиста. Шестнадцатилетнюю девченку.
        // - Наши?
        // - Да.
        // - Блядь че ебанутые...

        // 2.
        // - Коль, вы кушаете нормально хоть?
        // - Да нормально. Позавчера алабая захренарили.
        // - Кого?
        // - Алабая.
        // - Что собак едите чтоли?
        // - Ну, было... Мяса охота [неразборчиво]
        // - А что, есть нечего чтоли?
        // - Да не, есть, почему, сухпайки там, но сухпайки уже надоели.
        // - Ааа, господи, елики-палки, блядь, армия наша называется...
        // - Кур с гусями всех похренарили уже, вот...
        // - Ой, блин...
        // - Да не, нормально, нормально.
        // - Блин, да вообще охренеть. Вообще блин.
        // `,
      },
      video: {
        ru: [
          "https://m.youtube.com/watch?v=dqUd0-OOQ6g&ab_channel=24%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB",
        ],
        ua: [
          "https://m.youtube.com/watch?v=dqUd0-OOQ6g&ab_channel=24%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB",
        ],
      },
    },
  },
  {
    id: 6,
    date: "12.04.2022",
    source: ["https://www.youtube.com/watch?app=desktop&v=YDU_fNb0Vmo"],
    message: {
      type: "gallery",
      text: {
        en: `<b>Military wife from Russia urges her husband to rape Ukrainian women.</b>
        - So, you go there, rape Ukrainian women, yes, and don't tell me anything, understand?
        - “To rape Ukrainian women and not tell you anything?”
        - Yes, so that I don't know anything [laughs]. And what?
        - May I?
        - Yes, I allow it. Just be protected.
        `,
        ru: `<b>Жена военного из России призывает мужа насиловать украинок.</b>
        - Так, ты давай там, украинских баб насилуй, да, и мне ничего не говори, понятно?
        - Украинских баб насиловать и ничего тебе не говорить?
        - Да, чтоб я ничего не знала [смех]. А что?
        - Можно да?
        - Да, разрешаю. Только предохраняйся.
        `,
        ua: `<b>Дружина військового із Росії закликає чоловіка ґвалтувати українок.</b>`,
      },
      photo: {
        all: [
          "https://www.youtube.com/watch?v=hThj48at2iw&ab_channel=%D0%A3%D0%9D%D0%86%D0%90%D0%9D",
        ],
        ru: [
          "https://news.bigmir.net/i/62/78/09/3/6278093/gallery/98b89acffe325d72e20357ceda74d82c-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg",
        ],
      },
    },
  },
  {
    id: 7,
    date: "11.05.2022",
    source: [
      "https://www.youtube.com/watch?v=WIZIspwem2s&ab_channel=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%B4%D0%B0",
    ],
    message: {
      type: "youtube",
      text: {
        en: `<b>"The Occupant. War and peace in the phone of a Russian soldier (ENG Subs)"</b>
          At the disposal of "Ukrainian Pravda" got a video from the phone captured Russian soldier.

          This is a story about the life of Lieutenant Yuri Shalaev, a graduate of Moskovsky higher command school", commander of a motorized rifle platoon military unit 71718 (deployed in Chechnya), representative of the elite
          Russian infantry.

          About how he lived and served in Russia before the start of the military special operation.

          How I came to Ukraine to fight.

          And how, finally, the war ended for him in captivity.
        `,
        ru: `<b>"The Occupant/Оккупант. Война и мир в телефоне русского солдата (ENG Subs)"</b>
        В распоряжение "Украинской правды" попало видео с телефона
          взятого в плен русского солдата.

          Это история о жизни лейтенанта Юрия Шалаева, выпускника "Московского"
          высшего командного училища", командира мотострелкового взвода
          воинской части 71718 (с дислокацией в Чечне), представителя элиты
          русской пехоты.

          О том, как он жил и служил в России до начала военной спецоперации.

          Как приехал в Украину воевать.

          И как, наконец, война закончилась для него пленом.
        `,
        ua: `<b>"The Occupant/Окупант. Війна і мир у телефоні російського солдата (ENG Subs)"</b>
        У розпорядження "Української правди" потрапило відео з телефону
          взятого в полон російського солдата.

          Це історія про життя лейтенанта Юрія Шалаєва, випускника "Московского
          высшего командного училища", командира мотострілецького взводу
          військової частини 71718 (з дислокацією в Чечні), представника еліти
          російської піхоти.

          Про те, як він жив та служив у Росії до початку "військової спецоперації".

          Як приїхав в Україну воювати.

          І як, зрештою, війна закінчилась для нього полоном.
        `,
      },
      video: {
        all: [
          "https://m.youtube.com/watch?v=WIZIspwem2s&ab_channel=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%B4%D0%B0",
        ],
      },
    },
  },
];

messages.sort((a, b) => {
  const aDateParse = a.date.split(".").reverse();
  const aDate = new Date(...aDateParse);
  const bDateParse = b.date.split(".").reverse();
  const bDate = new Date(...bDateParse);
  return aDate - bDate;
});

exports.messages = messages;

// sending types: gallery (images and videos), file (if multiple files - separate sending without comments), location, poll, music, contact
// no .png images, for youtube: video link as m.youtube.com, image ling as usual youtube
