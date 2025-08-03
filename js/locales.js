async function i18nextInit() {
  const data = await fetch("./locales/en.json").then((res) => res.json());
  console.log(data);
  // Initialize i18next with the default language and resources
  const resources = {
    en: await fetch("./locales/en.json").then((res) => res.json()),
    zh: await fetch("./locales/zh.json").then((res) => res.json()),
    vi: await fetch("./locales/vi.json").then((res) => res.json()),
  };

  const userLang = navigator.language.slice(0, 2);
  const defaultLang = ["en", "zh", "vi"].includes(userLang) ? userLang : "zh";

  i18next.init(
    {
      lng: defaultLang,
      resources: {
        en: { translation: resources.en },
        zh: { translation: resources.zh },
        vi: { translation: resources.vi },
      },
    },
    function (err, t) {
      updateContent();
    }
  );

  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = i18next.t(key);
    });
  }

  document.getElementById("lang").addEventListener("change", function () {
    const lang = this.value;
    i18next.changeLanguage(lang, updateContent);
  });
}

i18nextInit();

// const resources = {
//   en: await fetch("./locales/en.json").then((res) => res.json()),
//   zh: await fetch("./locales/zh.json").then((res) => res.json()),
//   vi: await fetch("./locales/vi.json").then((res) => res.json()),
// };

// const userLang = navigator.language.slice(0, 2);
// const defaultLang = ["en", "zh", "vi"].includes(userLang) ? userLang : "zh";

// i18next.init(
//   {
//     lng: defaultLang,
//     resources: {
//       en: { translation: resources.en },
//       zh: { translation: resources.zh },
//       vi: { translation: resources.vi },
//     },
//   },
//   function (err, t) {
//     updateContent();
//   }
// );

// function updateContent() {
//   document.querySelectorAll("[data-i18n]").forEach((el) => {
//     const key = el.getAttribute("data-i18n");
//     el.innerHTML = i18next.t(key);
//   });
// }

// document.getElementById("lang").addEventListener("change", function () {
//   const lang = this.value;
//   i18next.changeLanguage(lang, updateContent);
// });
