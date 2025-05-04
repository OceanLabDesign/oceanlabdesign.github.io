let imageUrls = [];
let img;
let cols, rows;
let resolution = 10;
let grid = [];
let alphaGrid = [];
let imgAlpha = 0;
let clientId = "09af5ac31573704"; // 你提供的 Client-ID
let albumId = "D30bejC";           // 你提供的相簿 ID


let charset = ["█", "▓", "▒", "░", "▇", "▆", "▅", "▄", "▃", "▂", "▁", "@", "%", "#", "*", "+", "=", "-", ":", ".", " "];

let palette = [
  ['hsl(202, 57%, 23%)', 'hsl(148, 86%, 88%)'],
  ['hsl(92, 50%, 28%)', 'hsl(320, 91%, 86%)'],
  ['hsl(165, 67%, 11%)', 'hsl(276, 75%, 83%)'],
  ['hsl(272, 50%, 27%)', 'hsl(22, 96%, 95%)'],
  ['hsl(255, 58%, 29%)', 'hsl(66, 96%, 99%)'],
  ['hsl(28, 63%, 15%)', 'hsl(226, 74%, 100%)'],
  ['hsl(255, 59%, 29%)', 'hsl(69, 90%, 99%)'],
  ['hsl(126, 58%, 24%)', 'hsl(308, 82%, 95%)'],
  ['hsl(153, 40%, 11%)', 'hsl(315, 90%, 96%)'],
  ['hsl(307, 69%, 29%)', 'hsl(351, 77%, 83%)'],
  ['hsl(103, 61%, 18%)', 'hsl(160, 93%, 95%)'],
  ['hsl(100, 60%, 22%)', 'hsl(230, 99%, 88%)'],
  ['hsl(311, 57%, 10%)', 'hsl(86, 86%, 88%)'],
  ['hsl(343, 51%, 17%)', 'hsl(284, 83%, 90%)'],
  ['hsl(174, 50%, 28%)', 'hsl(270, 100%, 87%)'],
  ['hsl(83, 57%, 18%)', 'hsl(352, 95%, 84%)'],
  ['hsl(262, 67%, 13%)', 'hsl(180, 81%, 89%)'],
  ['hsl(76, 58%, 29%)', 'hsl(342, 94%, 88%)'],
  ['hsl(11, 69%, 17%)', 'hsl(19, 81%, 82%)'],
  ['hsl(12, 40%, 21%)', 'hsl(320, 99%, 95%)'],
  ['hsl(215, 49%, 13%)', 'hsl(114, 91%, 96%)'],
  ['hsl(116, 52%, 30%)', 'hsl(347, 90%, 90%)'],
  ['hsl(308, 45%, 10%)', 'hsl(225, 88%, 94%)'],
  ['hsl(178, 47%, 18%)', 'hsl(148, 100%, 96%)'],
  ['hsl(209, 70%, 26%)', 'hsl(52, 82%, 100%)'],
  ['hsl(198, 56%, 27%)', 'hsl(221, 98%, 90%)'],
  ['hsl(175, 61%, 22%)', 'hsl(351, 76%, 95%)'],
  ['hsl(176, 40%, 15%)', 'hsl(294, 84%, 97%)'],
  ['hsl(49, 44%, 15%)', 'hsl(302, 92%, 95%)'],
  ['hsl(47, 61%, 30%)', 'hsl(162, 96%, 80%)'],
  ['hsl(323, 61%, 14%)', 'hsl(39, 79%, 83%)'],
  ['hsl(201, 63%, 11%)', 'hsl(205, 82%, 89%)'],
  ['hsl(60, 57%, 11%)', 'hsl(143, 72%, 98%)'],
  ['hsl(306, 43%, 12%)', 'hsl(111, 71%, 82%)'],
  ['hsl(235, 59%, 17%)', 'hsl(63, 88%, 93%)'],
  ['hsl(195, 53%, 30%)', 'hsl(60, 95%, 81%)'],
  ['hsl(182, 44%, 24%)', 'hsl(280, 93%, 86%)'],
  ['hsl(209, 57%, 12%)', 'hsl(65, 91%, 98%)'],
  ['hsl(36, 67%, 26%)', 'hsl(315, 80%, 100%)'],
  ['hsl(341, 49%, 17%)', 'hsl(297, 91%, 84%)'],
  ['hsl(180, 66%, 21%)', 'hsl(100, 86%, 97%)'],
  ['hsl(5, 60%, 16%)', 'hsl(302, 97%, 96%)'],
  ['hsl(339, 41%, 12%)', 'hsl(357, 97%, 95%)'],
  ['hsl(206, 64%, 20%)', 'hsl(138, 77%, 91%)'],
  ['hsl(56, 47%, 26%)', 'hsl(109, 71%, 94%)'],
  ['hsl(36, 55%, 22%)', 'hsl(86, 99%, 83%)'],
  ['hsl(46, 50%, 20%)', 'hsl(225, 75%, 85%)'],
  ['hsl(170, 52%, 22%)', 'hsl(209, 74%, 88%)'],
  ['hsl(254, 69%, 19%)', 'hsl(165, 90%, 94%)'],
  ['hsl(360, 46%, 15%)', 'hsl(160, 98%, 99%)'],
  ['hsl(158, 62%, 16%)', 'hsl(286, 93%, 84%)'],
  ['hsl(282, 58%, 12%)', 'hsl(139, 86%, 96%)'],
  ['hsl(218, 61%, 22%)', 'hsl(235, 74%, 94%)'],
  ['hsl(110, 43%, 25%)', 'hsl(357, 72%, 82%)'],
  ['hsl(20, 67%, 29%)', 'hsl(141, 99%, 85%)'],
  ['hsl(256, 53%, 16%)', 'hsl(178, 92%, 99%)'],
  ['hsl(217, 70%, 13%)', 'hsl(333, 79%, 97%)'],
  ['hsl(333, 60%, 15%)', 'hsl(109, 85%, 85%)'],
  ['hsl(210, 43%, 14%)', 'hsl(157, 94%, 86%)'],
  ['hsl(252, 61%, 13%)', 'hsl(110, 95%, 94%)'],
  ['hsl(172, 42%, 15%)', 'hsl(45, 72%, 97%)'],
  ['hsl(246, 67%, 15%)', 'hsl(75, 100%, 89%)'],
  ['hsl(64, 54%, 19%)', 'hsl(271, 70%, 92%)'],
  ['hsl(139, 44%, 17%)', 'hsl(147, 72%, 98%)'],
  ['hsl(162, 62%, 10%)', 'hsl(241, 85%, 80%)'],
  ['hsl(268, 56%, 27%)', 'hsl(98, 98%, 94%)'],
  ['hsl(324, 54%, 20%)', 'hsl(56, 78%, 92%)'],
  ['hsl(282, 61%, 15%)', 'hsl(86, 99%, 86%)'],
  ['hsl(267, 45%, 24%)', 'hsl(31, 91%, 98%)'],
  ['hsl(28, 64%, 28%)', 'hsl(103, 91%, 92%)'],
  ['hsl(273, 50%, 24%)', 'hsl(3, 99%, 86%)'],
  ['hsl(342, 67%, 24%)', 'hsl(222, 89%, 86%)'],
  ['hsl(115, 67%, 30%)', 'hsl(163, 97%, 96%)'],
  ['hsl(215, 50%, 21%)', 'hsl(136, 92%, 100%)'],
  ['hsl(143, 67%, 15%)', 'hsl(3, 95%, 96%)'],
  ['hsl(92, 61%, 21%)', 'hsl(321, 83%, 88%)'],
  ['hsl(292, 42%, 18%)', 'hsl(162, 85%, 94%)'],
  ['hsl(360, 67%, 12%)', 'hsl(139, 84%, 92%)'],
  ['hsl(234, 69%, 22%)', 'hsl(264, 88%, 84%)'],
  ['hsl(212, 55%, 22%)', 'hsl(239, 93%, 88%)'],
  ['hsl(84, 53%, 27%)', 'hsl(202, 97%, 95%)'],
  ['hsl(101, 48%, 11%)', 'hsl(134, 89%, 88%)'],
  ['hsl(109, 43%, 30%)', 'hsl(98, 81%, 88%)'],
  ['hsl(332, 57%, 17%)', 'hsl(23, 96%, 87%)'],
  ['hsl(123, 43%, 18%)', 'hsl(217, 72%, 86%)'],
  ['hsl(31, 49%, 21%)', 'hsl(112, 75%, 88%)'],
  ['hsl(75, 56%, 22%)', 'hsl(274, 96%, 98%)'],
  ['hsl(101, 70%, 26%)', 'hsl(64, 94%, 98%)'],
  ['hsl(281, 47%, 15%)', 'hsl(43, 88%, 93%)'],
  ['hsl(184, 67%, 18%)', 'hsl(115, 99%, 84%)'],
  ['hsl(219, 51%, 23%)', 'hsl(155, 76%, 80%)'],
  ['hsl(217, 67%, 10%)', 'hsl(71, 94%, 99%)'],
  ['hsl(227, 63%, 20%)', 'hsl(179, 92%, 98%)'],
  ['hsl(263, 52%, 18%)', 'hsl(248, 93%, 92%)'],
  ['hsl(290, 52%, 12%)', 'hsl(131, 94%, 100%)'],
  ['hsl(88, 70%, 28%)', 'hsl(224, 96%, 87%)'],
  ['hsl(144, 64%, 12%)', 'hsl(37, 100%, 96%)'],
  ['hsl(217, 42%, 26%)', 'hsl(55, 83%, 90%)'],
  ['hsl(144, 40%, 24%)', 'hsl(71, 78%, 100%)'],
  ['hsl(3, 45%, 12%)', 'hsl(162, 83%, 81%)'],
  ['hsl(266, 47%, 25%)', 'hsl(53, 84%, 88%)'],
  ['hsl(182, 52%, 20%)', 'hsl(79, 90%, 83%)'],
  ['hsl(191, 70%, 26%)', 'hsl(305, 83%, 96%)'],
  ['hsl(11, 46%, 18%)', 'hsl(41, 98%, 84%)'],
  ['hsl(51, 64%, 26%)', 'hsl(204, 73%, 92%)'],
  ['hsl(133, 70%, 27%)', 'hsl(162, 96%, 80%)'],
  ['hsl(315, 65%, 12%)', 'hsl(223, 70%, 86%)'],
  ['hsl(304, 51%, 28%)', 'hsl(234, 93%, 98%)'],
  ['hsl(323, 42%, 22%)', 'hsl(13, 76%, 83%)'],
  ['hsl(65, 52%, 30%)', 'hsl(144, 100%, 93%)'],
  ['hsl(203, 61%, 12%)', 'hsl(231, 70%, 84%)'],
  ['hsl(67, 64%, 28%)', 'hsl(27, 80%, 90%)'],
  ['hsl(327, 58%, 28%)', 'hsl(75, 82%, 83%)'],
  ['hsl(233, 49%, 11%)', 'hsl(281, 72%, 95%)'],
  ['hsl(75, 42%, 12%)', 'hsl(130, 70%, 81%)'],
  ['hsl(89, 46%, 26%)', 'hsl(333, 75%, 85%)'],
  ['hsl(223, 69%, 18%)', 'hsl(65, 79%, 85%)'],
  ['hsl(41, 52%, 11%)', 'hsl(37, 85%, 81%)'],
  ['hsl(4, 61%, 26%)', 'hsl(55, 100%, 89%)'],
  ['hsl(197, 45%, 27%)', 'hsl(287, 96%, 99%)'],
  ['hsl(0, 64%, 30%)', 'hsl(230, 94%, 86%)'],
  ['hsl(54, 65%, 10%)', 'hsl(101, 82%, 92%)'],
  ['hsl(150, 62%, 29%)', 'hsl(213, 72%, 85%)'],
  ['hsl(236, 57%, 21%)', 'hsl(145, 87%, 87%)'],
  ['hsl(305, 42%, 18%)', 'hsl(204, 95%, 82%)'],
  ['hsl(330, 70%, 27%)', 'hsl(131, 96%, 98%)'],
  ['hsl(226, 59%, 12%)', 'hsl(232, 86%, 99%)'],
  ['hsl(14, 68%, 20%)', 'hsl(348, 79%, 88%)'],
  ['hsl(182, 53%, 14%)', 'hsl(144, 80%, 97%)'],
  ['hsl(92, 57%, 12%)', 'hsl(225, 99%, 81%)'],
  ['hsl(185, 40%, 18%)', 'hsl(283, 83%, 100%)'],
  ['hsl(236, 58%, 18%)', 'hsl(268, 93%, 94%)'],
  ['hsl(140, 64%, 29%)', 'hsl(170, 87%, 92%)'],
  ['hsl(299, 45%, 30%)', 'hsl(234, 75%, 100%)'],
  ['hsl(129, 64%, 26%)', 'hsl(292, 88%, 95%)'],
  ['hsl(19, 68%, 23%)', 'hsl(38, 96%, 97%)'],
  ['hsl(297, 43%, 22%)', 'hsl(292, 75%, 98%)'],
  ['hsl(45, 52%, 30%)', 'hsl(256, 74%, 100%)'],
  ['hsl(52, 42%, 21%)', 'hsl(121, 91%, 88%)'],
  ['hsl(341, 52%, 15%)', 'hsl(327, 79%, 86%)'],
  ['hsl(307, 56%, 29%)', 'hsl(74, 82%, 96%)'],
  ['hsl(36, 52%, 23%)', 'hsl(172, 75%, 98%)'],
  ['hsl(67, 50%, 20%)', 'hsl(337, 98%, 99%)'],
  ['hsl(329, 52%, 30%)', 'hsl(31, 84%, 83%)'],
  ['hsl(170, 57%, 29%)', 'hsl(92, 86%, 88%)'],
  ['hsl(179, 55%, 22%)', 'hsl(148, 86%, 97%)'],
  ['hsl(317, 60%, 12%)', 'hsl(129, 79%, 92%)'],
  ['hsl(70, 54%, 10%)', 'hsl(206, 88%, 96%)'],
  ['hsl(148, 57%, 18%)', 'hsl(220, 90%, 91%)'],
  ['hsl(208, 70%, 21%)', 'hsl(27, 88%, 95%)'],
  ['hsl(301, 66%, 30%)', 'hsl(8, 97%, 85%)'],
  ['hsl(266, 50%, 23%)', 'hsl(103, 91%, 89%)'],
  ['hsl(266, 63%, 28%)', 'hsl(10, 70%, 86%)'],
  ['hsl(296, 67%, 30%)', 'hsl(46, 76%, 96%)'],
  ['hsl(72, 48%, 25%)', 'hsl(227, 95%, 85%)'],
  ['hsl(94, 40%, 25%)', 'hsl(350, 73%, 80%)'],
  ['hsl(87, 53%, 11%)', 'hsl(116, 82%, 96%)'],
  ['hsl(283, 53%, 13%)', 'hsl(293, 96%, 87%)'],
  ['hsl(12, 48%, 22%)', 'hsl(21, 76%, 84%)'],
  ['hsl(106, 65%, 26%)', 'hsl(43, 84%, 80%)'],
  ['hsl(49, 55%, 28%)', 'hsl(248, 100%, 97%)'],
  ['hsl(340, 63%, 29%)', 'hsl(0, 79%, 90%)'],
  ['hsl(134, 42%, 29%)', 'hsl(307, 74%, 95%)'],
  ['hsl(212, 55%, 12%)', 'hsl(8, 94%, 82%)'],
  ['hsl(229, 45%, 19%)', 'hsl(287, 70%, 83%)'],
  ['hsl(175, 47%, 16%)', 'hsl(332, 84%, 97%)'],
  ['hsl(244, 42%, 22%)', 'hsl(184, 97%, 83%)'],
  ['hsl(306, 61%, 28%)', 'hsl(115, 80%, 87%)'],
  ['hsl(59, 61%, 22%)', 'hsl(94, 75%, 96%)'],
  ['hsl(7, 40%, 10%)', 'hsl(214, 70%, 82%)'],
  ['hsl(112, 45%, 18%)', 'hsl(101, 72%, 86%)'],
  ['hsl(171, 42%, 30%)', 'hsl(300, 83%, 100%)'],
  ['hsl(136, 40%, 23%)', 'hsl(299, 77%, 84%)'],
  ['hsl(122, 50%, 13%)', 'hsl(91, 76%, 80%)'],
  ['hsl(348, 42%, 20%)', 'hsl(121, 88%, 81%)'],
  ['hsl(113, 48%, 18%)', 'hsl(97, 70%, 86%)'],
  ['hsl(257, 61%, 27%)', 'hsl(166, 82%, 84%)'],
  ['hsl(102, 45%, 20%)', 'hsl(293, 86%, 80%)'],
  ['hsl(21, 48%, 13%)', 'hsl(98, 75%, 80%)'],
  ['hsl(100, 63%, 29%)', 'hsl(338, 91%, 88%)'],
  ['hsl(158, 68%, 18%)', 'hsl(224, 90%, 80%)'],
  ['hsl(196, 69%, 21%)', 'hsl(83, 81%, 98%)'],
  ['hsl(136, 52%, 15%)', 'hsl(158, 94%, 99%)'],
  ['hsl(213, 58%, 23%)', 'hsl(353, 83%, 100%)'],
  ['hsl(153, 63%, 20%)', 'hsl(331, 70%, 93%)'],
  ['hsl(99, 57%, 15%)', 'hsl(69, 77%, 80%)'],
  ['hsl(92, 43%, 25%)', 'hsl(310, 92%, 95%)'],
  ['hsl(190, 46%, 24%)', 'hsl(230, 78%, 100%)'],
  ['hsl(1, 52%, 20%)', 'hsl(175, 83%, 82%)'],
  ['hsl(58, 59%, 26%)', 'hsl(183, 79%, 91%)'],
  ['hsl(218, 44%, 11%)', 'hsl(338, 92%, 96%)'],
  ['hsl(6, 61%, 26%)', 'hsl(299, 87%, 90%)'],
  ['hsl(241, 68%, 16%)', 'hsl(171, 86%, 99%)'],
  ['hsl(334, 58%, 23%)', 'hsl(13, 80%, 85%)'],
  ['hsl(85, 46%, 22%)', 'hsl(271, 74%, 95%)'],
  ['hsl(129, 65%, 23%)', 'hsl(101, 89%, 91%)'],
  ['hsl(26, 64%, 25%)', 'hsl(321, 76%, 83%)'],
  ['hsl(39, 42%, 29%)', 'hsl(280, 70%, 89%)'],
  ['hsl(168, 49%, 27%)', 'hsl(351, 98%, 87%)'],
  ['hsl(158, 53%, 22%)', 'hsl(198, 78%, 97%)']
];

let darkColor, midColor, lightColor;
let rightText = "OceanLabAI";
let virtualTextGraphics;

let imageFrame = { x: 0, y: 0, w: 0, h: 0 };
let textFrame = { x: 0, y: 0, w: 0, h: 0 };

function preload() {
  let url = `https://api.imgur.com/3/album/${albumId}/images`;
  
  // 添加時間戳參數避免緩存
  const timestamp = Date.now();

  fetch(url, {
    headers: {
      Authorization: `Client-ID ${clientId}`
    },
    // 添加緩存控制頭部
    cache: 'no-store'
  })
    .then(res => res.json())
    .then(data => {
      imageUrls = data.data.map(item => item.link);
      if (imageUrls.length > 0) {
        // 保存所有URL以便重新選擇
        console.log(`📷 相簿中有 ${imageUrls.length} 張圖片`);
        
        // 隨機選擇一張圖片
        let selected = random(imageUrls);
        
        // 添加時間戳到URL避免瀏覽器緩存
        let cacheBreaker = selected.includes('?') ? 
          `&_=${timestamp}` : 
          `?_=${timestamp}`;
        
        img = loadImage(selected + cacheBreaker,
          () => {
            console.log("✅ 圖片載入成功：", selected);
            // 圖片載入後再次檢查和設置
            if (width && height) {
              let canvasHeight = computeCanvasHeight();
              resizeCanvas(windowWidth, canvasHeight);
              updateFrames();
              initGrid();
            }
          },
          () => console.error("❌ 圖片載入失敗：", selected)
        );
      } else {
        console.warn("⚠️ 相簿內沒有圖片");
      }
    })
    .catch(err => {
      console.error("❌ 無法讀取 Imgur 相簿", err);
    });
}

function computeCanvasHeight() {
  if (!img || !img.width) {
    return windowHeight; // 若圖片未加載，返回預設高度
  }
  
  if (windowHeight > windowWidth) {
    let imgRatio = img.height / img.width;
    let imgH = windowWidth * imgRatio;
    return imgH * 2; // 上圖下文
  } else {
    return windowHeight;
  }
}

function computeResolution() {
  resolution = floor(min(windowWidth, windowHeight) / 50);
}

function setup() {
  let canvasHeight = windowHeight; // 先用預設高度
  let canvas = createCanvas(windowWidth, canvasHeight);
  canvas.parent(document.body);
  canvas.style('display', 'block');
  computeResolution();
  frameRate(6);
  textFont('Century Gothic');
  textAlign(CENTER, CENTER);
  pickPalette();
  
  // 只有在圖片已載入時才更新框架和格柵
  if (img && img.width) {
    canvasHeight = computeCanvasHeight();
    resizeCanvas(windowWidth, canvasHeight);
    updateFrames();
  }
  
  initGrid();
}

function draw() {
  background(lerpColor(darkColor, lightColor, 0.33));
  if (imgAlpha < 255) imgAlpha += 5;

  // 如果圖片已載入且還沒更新過框架，則更新
  if (img && img.width && !virtualTextGraphics) {
    let canvasHeight = computeCanvasHeight();
    resizeCanvas(windowWidth, canvasHeight);
    updateFrames();
    initGrid();
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      let brightnessValue = 127;

      if (inImageArea(x, y)) {
        let u = map(x - imageFrame.x, 0, imageFrame.w, 0, img.width);
        let v = map(y - imageFrame.y, 0, imageFrame.h, 0, img.height);
        let c = img.get(constrain(floor(u), 0, img.width - 1), constrain(floor(v), 0, img.height - 1));
        let realBrightness = (red(c) + green(c) + blue(c)) / 3;
        brightnessValue = map(imgAlpha, 0, 255, 127, realBrightness);
      } else if (inTextArea(x, y)) {
        let u = map(x - textFrame.x, 0, textFrame.w, 0, virtualTextGraphics.width);
        let v = map(y - textFrame.y, 0, textFrame.h, 0, virtualTextGraphics.height);
        let vc = virtualTextGraphics.get(constrain(floor(u), 0, virtualTextGraphics.width - 1), constrain(floor(v), 0, virtualTextGraphics.height - 1));
        let realBrightness = (red(vc) + green(vc) + blue(vc)) / 3;
        brightnessValue = map(realBrightness, 0, 255, 255, 0);
      }

      if (alphaGrid[i][j] > 0) {
        let ch = pickCharByBrightness(brightnessValue);
        let finalAlpha = alphaGrid[i][j];
        if (brightnessValue < 85) {
          fill(lightColor.levels[0], lightColor.levels[1], lightColor.levels[2], finalAlpha);
        } else if (brightnessValue < 170) {
          fill(midColor.levels[0], midColor.levels[1], midColor.levels[2], finalAlpha);
        } else {
          fill(darkColor.levels[0], darkColor.levels[1], darkColor.levels[2], finalAlpha);
        }
        textSize(windowHeight * 0.033);
        text(ch, x + resolution / 2, y + resolution / 2);
      }
    }
  }
// 最上層半透明字體疊加（直接顯示用）
// 主標題 OceanLabAI
push();
let txtAlpha = constrain(imgAlpha, 0, 255); // 淡入透明度
fill(red(darkColor), green(darkColor), blue(darkColor), txtAlpha);
textAlign(CENTER, CENTER);
textStyle(BOLD);
  textFont('Century Gothic');
textSize(min(textFrame.w, textFrame.h) / (rightText.length * 0.55));
text(rightText, textFrame.x + textFrame.w / 2, textFrame.y + textFrame.h / 2);
pop();

// 副標題
push();
fill(red(darkColor), green(darkColor), blue(darkColor), txtAlpha * 0.6); // 更淡一點
textAlign(CENTER, TOP);
  textStyle(BOLD);
textFont('Century Gothic');
textSize(min(textFrame.w, textFrame.h) / 32);
text(
  "由建築師所建立的團隊",
  textFrame.x + textFrame.w / 2,
  textFrame.y + textFrame.h / 2 + min(textFrame.h, textFrame.w) / 12
);
pop();
  
  updateCells();
}

function updateCells() {
  let next = [], nextAlpha = [];

  for (let i = 0; i < cols; i++) {
    next[i] = [], nextAlpha[i] = [];
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      let brightnessValue = 127;

      if (inImageArea(x, y)) {
        let u = map(x - imageFrame.x, 0, imageFrame.w, 0, img.width);
        let v = map(y - imageFrame.y, 0, imageFrame.h, 0, img.height);
        let c = img.get(constrain(floor(u), 0, img.width - 1), constrain(floor(v), 0, img.height - 1));
        let realBrightness = (red(c) + green(c) + blue(c)) / 3;
        brightnessValue = map(imgAlpha, 0, 255, 127, realBrightness);
      } else if (inTextArea(x, y)) {
        let u = map(x - textFrame.x, 0, textFrame.w, 0, virtualTextGraphics.width);
        let v = map(y - textFrame.y, 0, textFrame.h, 0, virtualTextGraphics.height);
        let vc = virtualTextGraphics.get(constrain(floor(u), 0, virtualTextGraphics.width - 1), constrain(floor(v), 0, virtualTextGraphics.height - 1));
        let realBrightness = (red(vc) + green(vc) + blue(vc)) / 3;
        brightnessValue = map(realBrightness, 0, 255, 255, 0);
      }

      let neighbors = countNeighbors(grid, i, j);
      let survivalBias = map(brightnessValue, 0, 255, 1.4, 0.6);
      let state = grid[i][j];

      let newState;
      if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        newState = random(1) < survivalBias ? 1 : 0;
      } else if (state == 0 && neighbors == 3) {
        newState = random(1) < survivalBias ? 1 : 0;
      } else {
        newState = state;
      }

      next[i][j] = newState;
      nextAlpha[i][j] = constrain(alphaGrid[i][j] + (newState ? 25 : -25), 0, 255);
    }
  }

  grid = next;
  alphaGrid = nextAlpha;
}

function inImageArea(x, y) {
  return (x >= imageFrame.x && x < imageFrame.x + imageFrame.w &&
    y >= imageFrame.y && y < imageFrame.y + imageFrame.h);
}

function inTextArea(x, y) {
  return (x >= textFrame.x && x < textFrame.x + textFrame.w &&
    y >= textFrame.y && y < textFrame.y + textFrame.h);
}

function updateFrames() {
  // 確保圖片已載入且有寬度屬性
  if (!img || !img.width) {
    console.log("圖片尚未載入完成，跳過 updateFrames");
    return;
  }

  let imgAspect = img.width / img.height;
  let screenAspect = width / height;

  if (screenAspect > 1) {
    // 橫式
    imageFrame.h = height;
    imageFrame.w = height * imgAspect;
    imageFrame.x = 0;
    imageFrame.y = 0;

    textFrame.x = imageFrame.w;
    textFrame.y = 0;
    textFrame.w = width - imageFrame.w;
    textFrame.h = height;
  } else {
    // 直式
    imageFrame.w = width;
    imageFrame.h = width / imgAspect;
    imageFrame.x = 0;
    imageFrame.y = 0;

    textFrame.x = 0;
    textFrame.y = imageFrame.h;
    textFrame.w = width;
    textFrame.h = imageFrame.h;
  }

  createVirtualText();
}

function createVirtualText() {
  // 確保文字框架尺寸存在
  if (!textFrame.w || !textFrame.h) {
    console.log("文字框架尺寸未定義，跳過 createVirtualText");
    return;
  }
  
  virtualTextGraphics = createGraphics(textFrame.w, textFrame.h);
  virtualTextGraphics.pixelDensity(1.35);

  // 背景（可調透明以降低細胞干擾）
  virtualTextGraphics.background(
    lerpColor(darkColor, lightColor, 0.08)
  );

  // 設定文字樣式（明亮色、粗體）
  virtualTextGraphics.fill(
    red(lightColor), green(lightColor), blue(lightColor), 255
  );
  virtualTextGraphics.textAlign(CENTER, CENTER);
  virtualTextGraphics.textFont('Century Gothic');
  virtualTextGraphics.textStyle(BOLD); // ✅ 正確粗體設定
  virtualTextGraphics.textSize(min(textFrame.w, textFrame.h) / (rightText.length * 0.55));

  // 繪製主文字到虛擬畫布中
  virtualTextGraphics.text(rightText, textFrame.w / 2, textFrame.h / 2);

  // 🔽 加入副標讓細胞也偵測到
  virtualTextGraphics.textStyle(NORMAL);
  virtualTextGraphics.textSize(min(textFrame.w, textFrame.h) / 32);
  virtualTextGraphics.text(
    "由建築師所建立的團隊，我們擅長設計，適合希望打造品牌形象的您",
    textFrame.w / 2,
    textFrame.h / 2 + min(textFrame.h, textFrame.w) / 12
  );
}

function windowResized() {
  let canvasHeight = computeCanvasHeight();
  resizeCanvas(windowWidth, canvasHeight);
  computeResolution();
  updateFrames();
  initGrid();
}

function initGrid() {
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  grid = [], alphaGrid = [];
  for (let i = 0; i < cols; i++) {
    grid[i] = [], alphaGrid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = random() < 0.3 ? 1 : 0;
      alphaGrid[i][j] = grid[i][j] * 255;
    }
  }
}

function pickPalette() {
  let p = random(palette);
  darkColor = color(p[0]);
  lightColor = color(p[1]);
  midColor = lerpColor(darkColor, lightColor, 0.5);
}

function pickCharByBrightness(val) {
  let i = floor(map(val, 0, 255, 0, charset.length));
  return charset[constrain(i, 0, charset.length - 1)];
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  return sum - grid[x][y];
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    pickPalette();
    updateFrames();
  } else if (key === 'n' || key === 'N') {
    initGrid();
  } else if (key === 'i' || key === 'I') {
    reloadImage(); // 按I鍵可手動重新載入圖片
  }
}

// 添加重新載入圖片的函數
function reloadImage() {
  if (imageUrls.length > 0) {
    imgAlpha = 0; // 重置透明度實現淡入效果
    
    // 隨機選擇一張新圖片
    let selected = random(imageUrls);
    
    // 添加時間戳到URL避免瀏覽器緩存
    const timestamp = Date.now();
    let cacheBreaker = selected.includes('?') ? 
      `&_=${timestamp}` : 
      `?_=${timestamp}`;
    
    img = loadImage(selected + cacheBreaker,
      () => {
        console.log("✅ 圖片重新載入成功：", selected);
        // 重新計算尺寸並更新
        let canvasHeight = computeCanvasHeight();
        resizeCanvas(windowWidth, canvasHeight);
        updateFrames();
        initGrid();
      },
      () => console.error("❌ 圖片載入失敗：", selected)
    );
  }
}
