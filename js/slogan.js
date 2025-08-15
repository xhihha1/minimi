// Slogan 陣列
// const slogans = [
//   "大到吃不完？換成 Mini Mi，剛剛好不浪費。",
//   "麵包不用硬撐，幸福剛剛好。",
//   "麵包不用等到變石頭，Mini Mi 現做現吃。",
//   "趁熱酥香，才是真愛。",
//   "Mini Mi，保留肉的多汁，鎖住每一口的鮮。"
// ];

// let slogans = i18next.t("slogan", { returnObjects: true });

let sloganIndex = 0;
const sloganElement = document.getElementById("slogan-text");

function showSlogan() {
  // 淡出
  sloganElement.style.opacity = 0;

  setTimeout(() => {
    let slogans = i18next.store.data[i18next.language].translation.slogan;
    if (!Array.isArray(slogans)) {
      console.error("Slogans is not an array:", slogans);
      return;
    }
    sloganElement.textContent = slogans[sloganIndex];
    sloganElement.style.opacity = 1;
    sloganIndex = (sloganIndex + 1) % slogans.length;
  }, 1000);
}

// 初始顯示
showSlogan();

// 每 4 秒換一次
setInterval(showSlogan, 4000);
