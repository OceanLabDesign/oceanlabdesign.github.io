// academy_style_page.js — 網頁設計服務宣傳頁（p5.js 風格重構）

let services = [
  {
    title: "網頁排版",
    description: "專業的網站設計，為您打造獨一無二的視覺體驗。"
  },
  {
    title: "訂房訂位功能",
    description: "完整的預約系統，讓客戶輕鬆預訂您的服務。"
  },
  {
    title: "Line Bot 串接",
    description: "透過 Line 平台與客戶互動，提高服務效率。"
  },
  {
    title: "客服機器人串接",
    description: "24 小時自動回覆客戶問題，提升用戶體驗。"
  },
  {
    title: "Trivago API 串接",
    description: "整合 Trivago 預訂系統，擴大您的客戶基礎。"
  },
  {
    title: "2G 空間租用與維護",
    description: "專業的網站託管及維護服務。"
  }
];

// 新增套組方案陣列
let packages = [
{
  title: "基礎套餐",
  popular: false,
  description: "適合小型企業或個人網站的入門方案。",
  features: [
    "網頁排版",
    "2G空間租用與維護 (1年)",
    "免費基本SEO優化",
    "3個月技術支援"
  ],
  note: "※ 網頁租用空間每年另計"
},
{
  title: "商業套餐",
  popular: true,
  description: "提供訂位功能的中型商業網站最佳選擇。",
  features: [
    "網頁排版",
    "訂房訂位功能",
    "2G空間租用與維護 (1年)",
    "免費進階SEO優化",
    "6個月技術支援"
  ],
  note: "※ 網頁租用空間每年另計"
},
{
  title: "專業套餐",
  popular: false,
  description: "整合多種API與自動化功能的全方位解決方案。",
  features: [
    "網頁排版",
    "訂房訂位功能",
    "Line Bot 串接",
    "Trivago API 串接",
    "2G空間租用與維護 (1年)",
    "免費進階SEO優化",
    "12個月技術支援"
  ],
  note: "※ 網頁租用空間每年另計"
},
{
  title: "全能套餐",
  popular: false,
  description: "完整整合所有功能與長期支援的專業企業解決方案。",
  features: [
    "網頁排版",
    "訂房訂位功能",
    "Line Bot 串接",
    "客服機器人串接",
    "Trivago API 串接",
    "2G空間租用與維護 (2年)",
    "免費全面SEO優化",
    "24個月技術支援",
    "免費網站性能分析"
  ],
  note: "※ 網頁租用空間每年另計"
}
];

let scriptURL = "https://script.google.com/macros/s/AKfycbysY-Zsg-X7zFW99TF--KpxCgF5XfmWl9TWuNQ31eg3kqf5_kq4I16ofic8FOuhw2hUBg/exec";

function setup() {
  noCanvas();
  document.body.style.backgroundColor = "#fdfdfd";
  document.body.style.color = "#111";
  document.body.style.fontFamily = "'Noto Serif TC', serif";
  document.body.style.margin = "0";
  document.body.style.padding = "20px";

  // 載入 Google Fonts via link
  let link = createElement('link');
  link.attribute('rel', 'stylesheet');
  link.attribute('href', 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&display=swap');
  link.parent(document.head);

  createElement('h1', '網站建設服務').style('text-align', 'center')
    .style('text-align', 'center')
  createP('為您的業務提供完整的網站解決方案').style('text-align', 'center')

  let container = createDiv().style('display', 'grid')
    .style('grid-template-columns', 'repeat(auto-fit, minmax(370px, 1fr))')
    .style('gap', '47px')
    .style('max-width', '1200px')
    .style('margin', '0 auto')
    .style('justify-items', 'center');

  services.forEach(service => {
    let cardWidth = 360; // 寬度
    let cardHeight = cardWidth * 1.618; // 黃金比例高 ≈ 1.618

    let card = createDiv().parent(container)
      .style('width', cardWidth + 'px')
      .style('height', cardHeight + 'px')
      .style('padding', '24px')
      .style('display', 'flex')
      .style('flex-direction', 'column')
      .style('justify-content', 'space-between')
      .style('border', '1px solid #ddd')
      .style('border-radius', '8px')
      .style('background', '#fff')
      .style('box-shadow', '0 2px 6px rgba(0,0,0,0.06)');

    createElement('h2', service.title).parent(card).style('text-align', 'center')

    createP(service.description).parent(card)
      .style('font-size', '16px')
      .style('margin-bottom', '16px');

    let btn = createButton('聯絡我們').parent(card)
      .style('padding', '10px 20px')
      .style('background', '#000')
      .style('color', '#fff')
      .style('border', 'none')
      .style('border-radius', '4px')
      .style('cursor', 'pointer')
      .style('font-size', '14px')
      .style('display', 'block')
      .style('margin-left', 'auto')
      .style('margin-right', 'auto');

    btn.mousePressed(() => {
      let form = createDiv()
        .style('width', '100%')
        .style('box-sizing', 'border-box')
        .parent(card);

      createInput().attribute('placeholder', '您的姓名').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('name');

      createInput().attribute('placeholder', '您的電子郵件').attribute('type', 'email').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('email');

      createInput().attribute('placeholder', '您的電話號碼').attribute('type', 'tel').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('phone');

      createElement('textarea').attribute('placeholder', '您的需求').attribute('rows', '4').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('message');

      // 修改提交按鈕，加入置中樣式
      createButton('提交').mousePressed(() => submitToGoogleSheet(service.title)).parent(form)
        .style('padding', '10px 20px')
        .style('background', '#000')
        .style('color', '#fff')
        .style('border', 'none')
        .style('border-radius', '4px')
        .style('cursor', 'pointer')
        .style('font-size', '14px')
        .style('display', 'block')           // 新增：設為區塊元素
        .style('margin-left', 'auto')        // 新增：左側自動邊距
        .style('margin-right', 'auto');      // 新增：右側自動邊距

      createDiv().id('formStatus').style('margin-top', '12px').style('text-align', 'center').style('display', 'none').parent(form);
    });
  });

  // 新增分隔線
  createElement('hr')
    .style('margin', '60px auto')
    .style('width', '80%')
    .style('border', 'none')
    .style('height', '1px')
    .style('background-color', '#ddd');

  // 套組方案標題
  createElement('h2', '套餐組合').style('text-align', 'center')
    .style('font-size', '32px')
    .style('margin-bottom', '30px');

  createP('選擇最適合您業務需求的方案組合').style('text-align', 'center')
    .style('margin-bottom', '40px')
    .style('color', '#666');

  // 套組方案區域
  let packageContainer = createDiv().style('display', 'grid')
    .style('grid-template-columns', 'repeat(auto-fit, minmax(300px, 1fr))')
    .style('gap', '30px')
    .style('max-width', '1400px')
    .style('margin', '0 auto 60px auto')
    .style('padding', '0 20px')
    .style('justify-items', 'center');

  packages.forEach(pkg => {
    // 建立套餐卡片
    let card = createDiv().parent(packageContainer)
      .style('width', '300px')
      .style('height', 'auto')
      .style('min-height', '550px')
      .style('padding', '30px 24px')
      .style('display', 'flex')
      .style('flex-direction', 'column')
      .style('justify-content', 'space-between')
      .style('border', '1px solid #ddd')
      .style('border-radius', '12px')
      .style('background', '#fff')
      .style('box-shadow', '0 3px 12px rgba(0,0,0,0.08)')
      .style('position', 'relative')
      .style('transition', 'transform 0.3s, box-shadow 0.3s');
    
    // 懸停效果
    card.mouseOver(function() {
      this.style('transform', 'translateY(-5px)');
      this.style('box-shadow', '0 8px 20px rgba(0,0,0,0.12)');
    });
    
    card.mouseOut(function() {
      this.style('transform', 'translateY(0)');
      this.style('box-shadow', '0 3px 12px rgba(0,0,0,0.08)');
    });
    
    // 熱門標籤
    if (pkg.popular) {
      let popularTag = createDiv('熱門選擇').parent(card)
        .style('position', 'absolute')
        .style('top', '12px')
        .style('right', '-30px')
        .style('background', '#ff3366')
        .style('color', 'white')
        .style('transform', 'rotate(45deg)')
        .style('padding', '8px 35px')
        .style('font-size', '14px')
        .style('font-weight', 'bold');
    }
    
    // 標題
    createElement('h3', pkg.title).parent(card)
      .style('text-align', 'center')
      .style('font-size', '24px')
      .style('margin-top', '10px')
      .style('margin-bottom', '5px');
    
    // 價格
    let priceDiv = createDiv(pkg.price).parent(card)
      .style('text-align', 'center')
      .style('font-size', '28px')
      .style('font-weight', 'bold')
      .style('margin', '5px 0');
    
    // 節省金額
    let savingsDiv = createDiv(pkg.savings).parent(card)
      .style('text-align', 'center')
      .style('font-size', '14px')
      .style('color', '#ff3366')
      .style('margin-bottom', '20px');
    
    // 描述
    createP(pkg.description).parent(card)
      .style('font-size', '16px')
      .style('text-align', 'center')
      .style('margin-bottom', '20px');
    
    // 功能列表
    let featureList = createElement('ul').parent(card)
      .style('list-style-type', 'none')
      .style('padding', '0')
      .style('margin', '0 0 20px 0');
    
    // 添加功能項目
    pkg.features.forEach(feature => {
      let item = createElement('li', feature).parent(featureList)
        .style('padding', '8px 0')
        .style('position', 'relative')
        .style('padding-left', '28px')
        .style('border-bottom', '1px solid #f0f0f0');
      
      // 勾選符號
      let check = createDiv('✓').parent(item)
        .style('position', 'absolute')
        .style('left', '0')
        .style('top', '8px')
        .style('color', '#4CAF50')
        .style('font-weight', 'bold');
    });
    
    // 註解文字
    createDiv(pkg.note).parent(card)
      .style('font-size', '12px')
      .style('color', '#777')
      .style('margin-top', '10px')
      .style('margin-bottom', '20px');
    
    // 按鈕區域
    let btnWrapper = createDiv().parent(card)
      .style('text-align', 'center')
      .style('margin-top', 'auto')
      .style('padding-top', '20px');
    
    let btn = createButton('聯絡我們').parent(btnWrapper)
      .style('padding', '12px 30px')
      .style('background', pkg.popular ? '#ff3366' : '#000')
      .style('color', '#fff')
      .style('border', 'none')
      .style('border-radius', '30px')
      .style('cursor', 'pointer')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .style('transition', 'all 0.3s');
    
    // 按鈕懸停效果
    btn.mouseOver(function() {
      this.style('background', pkg.popular ? '#ff1a53' : '#333');
      this.style('transform', 'scale(1.05)');
    });
    
    btn.mouseOut(function() {
      this.style('background', pkg.popular ? '#ff3366' : '#000');
      this.style('transform', 'scale(1)');
    });
    
    // 套餐表單按鈕點擊事件
    btn.mousePressed(() => {
      let form = createDiv()
        .style('width', '100%')
        .style('box-sizing', 'border-box')
        .parent(card);
      
      createInput().attribute('placeholder', '您的姓名').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('name-' + pkg.title);
      
      createInput().attribute('placeholder', '您的電子郵件').attribute('type', 'email').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('email-' + pkg.title);
      
      createInput().attribute('placeholder', '您的電話號碼').attribute('type', 'tel').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('phone-' + pkg.title);
      
      createElement('textarea').attribute('placeholder', '您的需求').attribute('rows', '4').attribute('required', '')
        .style('width', '100%').style('padding', '12px').style('margin-bottom', '12px')
        .style('border', '1px solid #ddd').style('border-radius', '4px').parent(form).id('message-' + pkg.title);
      
      // 提交按鈕加入置中樣式
      createButton('提交').mousePressed(() => submitPackageForm(pkg.title)).parent(form)
        .style('padding', '10px 20px')
        .style('background', pkg.popular ? '#ff3366' : '#000')
        .style('color', '#fff')
        .style('border', 'none')
        .style('border-radius', '30px')
        .style('cursor', 'pointer')
        .style('font-size', '14px')
        .style('display', 'block')
        .style('margin-left', 'auto')
        .style('margin-right', 'auto');
      
      createDiv().id('formStatus-' + pkg.title).style('margin-top', '12px').style('text-align', 'center').style('display', 'none').parent(form);
    });
  });
}

function submitToGoogleSheet(servicestitle) {
  const name = select('#name').value();
  const email = select('#email').value();
  const phone = select('#phone').value();
  const message = select('#message').value();
  const statusDiv = select('#formStatus');

  if (!name || !email || !phone || !message) {
    statusDiv.html('請填寫所有欄位').style('color', 'red').style('display', 'block');
    return;
  }

  let formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", `[詢問項目: ${servicestitle}]
` + message);
  formData.append("service", servicestitle); // 修正變數名稱不一致的問題
  formData.append("timestamp", new Date().toISOString());

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(() => {
      statusDiv.html('處理中...').style('color', '#333').style('display', 'block');
      setTimeout(() => {
        statusDiv.html('提交成功，我們會盡快與您聯絡！').style('color', 'green');
        select('#name').value('');
        select('#email').value('');
        select('#phone').value('');
        select('#message').value('');
      }, 800);
    })
    .catch(() => {
      statusDiv.html('提交失敗，請稍後再試。').style('color', 'red').style('display', 'block');
    });
}

// 新增套餐表單提交函數
function submitPackageForm(packageTitle) {
  const name = select('#name-' + packageTitle).value();
  const email = select('#email-' + packageTitle).value();
  const phone = select('#phone-' + packageTitle).value();
  const message = select('#message-' + packageTitle).value();
  const statusDiv = select('#formStatus-' + packageTitle);
  
  if (!name || !email || !phone || !message) {
    statusDiv.html('請填寫所有欄位').style('color', 'red').style('display', 'block');
    return;
  }
  
  let formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", `[套餐方案: ${packageTitle}]
` + message);
  formData.append("package", packageTitle);
  formData.append("timestamp", new Date().toISOString());
  
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(() => {
      statusDiv.html('處理中...').style('color', '#333').style('display', 'block');
      setTimeout(() => {
        statusDiv.html('提交成功，我們會盡快與您聯絡！').style('color', 'green');
        select('#name-' + packageTitle).value('');
        select('#email-' + packageTitle).value('');
        select('#phone-' + packageTitle).value('');
        select('#message-' + packageTitle).value('');
      }, 800);
    })
    .catch(() => {
      statusDiv.html('提交失敗，請稍後再試。').style('color', 'red').style('display', 'block');
    });
}
