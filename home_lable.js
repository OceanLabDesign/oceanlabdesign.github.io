// Error handling
window.addEventListener('error', function(e) {
    if (e.message && (e.message.includes('CORS') || e.message.includes('Failed to fetch') || e.message.includes('load'))) {
        document.getElementById('error-message').style.display = 'block';
        console.error('Resource loading error:', e.message);
    }
});

// Replace local script with embedded p5.js editor version
window.addEventListener('load', function() {
    try {
        // 防止重複建立 iframe（只建立一次）
        if (document.getElementById('main-iframe')) return;

        // 先移除任何已存在的 canvas 或 iframe
        const existingCanvas = document.querySelector('canvas');
        if (existingCanvas) {
            existingCanvas.remove();
        }
        
        // 建立 iframe 容器，用於控制顯示區域
        const iframeContainer = document.createElement('div');
        iframeContainer.style.position = 'absolute';
        iframeContainer.style.top = '0';
        iframeContainer.style.left = '0';
        iframeContainer.style.width = '100%';
        iframeContainer.style.height = '100vh';
        iframeContainer.style.overflow = 'auto';
        
        // 建立 iframe，設定負邊距將頂部隱藏
        const iframe = document.createElement('iframe');
        iframe.id = 'main-iframe'; // 加入唯一 id
        iframe.src = 'https://editor.p5js.org/ks.architect01/full/wTq_4XvFQ';
        iframe.style.width = '100%';
        iframe.style.height = 'calc(100vh + 40px)'; // 增加高度
        iframe.style.marginTop = '-43px'; // 負邊距隱藏頂部
        iframe.style.border = 'none';
        iframe.style.position = 'absolute';
        
        // 完整啟用 iframe 所有互動功能
        iframe.style.pointerEvents = 'auto';
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        // 確保不使用 sandbox 限制
        iframe.removeAttribute('sandbox');
        // 確保連結在同一頁面內打開
        iframe.name = "mainFrame";
        
        // 確保 iframe 在最頂層
        iframe.style.zIndex = '2000';
        
        // 添加 iframe 到容器
        iframeContainer.appendChild(iframe);
        document.body.appendChild(iframeContainer);
        
        // 添加事件監聽，攔截點擊事件處理連結目標
        window.addEventListener('message', function(event) {
            // 檢查訊息是否來自我們的 iframe
            if (event.source === iframe.contentWindow) {
                // 如果是連結點擊訊息，在當前頁面打開
                if (event.data && event.data.type === 'link' && event.data.href) {
                    window.location.href = event.data.href;
                    event.preventDefault();
                    return false;
                }
            }
        });
        
        // 監聽 iframe 加載完成事件
        iframe.onload = function() {
            console.log('Iframe loaded, modifying link behavior');
            
            try {
                // 嘗試注入代碼來修改所有連結目標
                iframe.contentWindow.postMessage({
                    action: 'modifyLinks',
                    target: '_self' // 使連結在同一頁面打開
                }, '*');
                
                // 定期檢查
                setInterval(() => {
                    iframe.contentWindow.postMessage({
                        action: 'modifyLinks',
                        target: '_self'
                    }, '*');
                }, 2000);
            } catch(e) {
                console.log('PostMessage failed:', e);
            }
        };
    } catch (error) {
        console.error('Error initializing iframe:', error);
    }
});

// barOverlay module
let barLinks = {
  "Web Design": "https://oceanlabdesign.github.io/web_design.html"
};

let barLabels = [
  "Becoming 3D (coming soon...)",
  "Web Design",
  "Retrieval-Augmented Generation",
  "Contact us",
  "About us",
  "Terms of Service",
  "Privacy Policy"
];

let bars = [];
let barStartDelay = 12;
let barHeight = 25;
let barPadding = 36;
let barFontSize = 22;
let lightColor;
let textFrame = { x: 0, y: 0, w: 0, h: 0 };
let p5Instance;

// Create a new p5 instance for the bar overlay
new p5(function(p) {
    p5Instance = p;
    
    p.setup = function() {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('bar-overlay');
        p.colorMode(p.HSB, 360, 100, 100);
        lightColor = p.color(p.random(360), 70, 90);
        
        // Set textFrame based on window dimensions
        textFrame = { 
            x: p.width * 0.1, 
            y: p.height * 0.1, 
            w: p.width * 0.8, 
            h: p.height * 0.4 
        };
        
        setupBars();
        
        // Make canvas semi-transparent
        p.clear();
    };
    
    p.draw = function() {
        p.clear(); // Clear with transparency
        drawBars();
    };
    
    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        
        // Update textFrame
        textFrame = { 
            x: p.width * 0.1, 
            y: p.height * 0.1, 
            w: p.width * 0.8, 
            h: p.height * 0.4 
        };
        
        setupBars();
    };
    
    p.mousePressed = function() {
        checkBarClick(p.mouseX, p.mouseY);
    };
}, 'bar-overlay');

function setupBars() {
    bars = [];
    p5Instance.textSize(barFontSize);
    let topCount = 3;
    let belowCount = barLabels.length - topCount;

    let topStartY, belowStartY;

    let aspectRatio = p5Instance.windowWidth / p5Instance.windowHeight;
    // 非常窄的螢幕（直式手機、超高比例直式螢幕）
    // 例如 9:19.5、9:21 這類超長手機
    if (aspectRatio < 0.7) {
        topStartY = p5Instance.height * 0.58;
        belowStartY = topStartY + topCount * (barHeight + barPadding) + barPadding * 10;//極窄直式螢幕（超長手機）
    } else if (aspectRatio < 0.8) {
        topStartY = p5Instance.height * 0.56;
        belowStartY = topStartY + topCount * (barHeight + barPadding) + barPadding * 14;//一般直式手機（約 9:16、10:16）例如 iPhone 13/14/15 Pro Max (428x926 ≈ 0.46)，iPhone 8 (375x667 ≈ 0.56)
    } else if (aspectRatio < 1.2) {
        topStartY = textFrame.y + textFrame.h + barPadding * 1.5;
        belowStartY = topStartY + topCount * (barHeight + barPadding) + barPadding * 12;//例如 iPad 直式 (820x1180 ≈ 0.69)，或 4:3 比例螢幕
    } else if (aspectRatio < 1.6) {
        topStartY = textFrame.y + textFrame.h + barPadding * 0.6;
        belowStartY = topStartY + topCount * (barHeight + barPadding) + barPadding * 13;//筆電、桌機常見的 16:10、3:2 螢幕例如 1280x800 (1.6)、1920x1200 (1.6)、Surface (3:2 ≈ 1.5)
    } else if (aspectRatio < 1.78) {
        topStartY = textFrame.y + textFrame.h + barPadding * 2.5;
        belowStartY = topStartY + topCount * (barHeight + barPadding) + barPadding * 0.3;//16:9 螢幕（最常見的桌機/筆電）例如 1920x1080 (1.77)、1366x768 (1.78)
    } else {
        topStartY = textFrame.y + textFrame.h + barPadding * 2.5;
        belowStartY = topStartY + topCount * (barHeight + barPadding) + barPadding * 16;//超寬螢幕（21:9、32:9 等） 例如 2560x1080 (2.37)、3440x1440 (2.39)
    }

    // 這段程式碼的 aspectRatio 判斷，對應的螢幕比例說明如下：
    // aspectRatio = p5Instance.windowWidth / p5Instance.windowHeight

    for (let i = 0; i < barLabels.length; i++) {
        let isBelow = i >= topCount;
        let localIndex = isBelow ? i - topCount : i;
        let y = (isBelow ? belowStartY : topStartY) + localIndex * (barHeight + barPadding);

        bars.push({
          y: y,
          w: 0,
          maxW: p5Instance.windowWidth * 0.76,
          delay: i * barStartDelay,
          label: barLabels[i],
          fromLeft: false,
          clicked: false,
          clickTimer: 0
        });
    }
}

function drawBars() {
    p5Instance.textAlign(p5Instance.CENTER, p5Instance.CENTER);
    p5Instance.textFont('Century Gothic');
    p5Instance.textSize(barFontSize);
    p5Instance.noStroke();

    for (let i = 0; i < bars.length; i++) {
        let bar = bars[i];

        if (bar.clicked) {
          bar.clickTimer--;
          if (bar.clickTimer <= 0) {
            bar.clicked = false;
          }
        }

        if (p5Instance.frameCount > bar.delay && bar.w < bar.maxW) {
          bar.w += 18;
          if (bar.w > bar.maxW) bar.w = bar.maxW;
        }
        
        if (p5Instance.windowHeight > p5Instance.windowWidth) {
          let x = p5Instance.windowWidth * 0.3;
          p5Instance.fill(0, 190);
          p5Instance.rect(x, bar.y, bar.w, barHeight);
        } else {
          let x = p5Instance.width * 0.45;
          p5Instance.fill(0, 200);
          p5Instance.rect(x, bar.y, bar.w, barHeight);
        }
        
        if (bar.w > bar.maxW * 0.4) {
          let inverted = p5Instance.color(
            360 - p5Instance.hue(lightColor),
            p5Instance.saturation(lightColor),
            Math.min(100, 100 - p5Instance.lightness(lightColor) + 80)
          );
          p5Instance.fill(inverted);
          p5Instance.text(bar.label, p5Instance.width / 1.52, bar.y + barHeight / 2);
        }
    }
}

function checkBarClick(x, y) {
    console.log("[click] x:", x, "y:", y);
    for (let i = 0; i < bars.length; i++) {
        let bar = bars[i];
        let barX = p5Instance.windowHeight > p5Instance.windowWidth ? 
            p5Instance.windowWidth * 0.3 : p5Instance.width * 0.45;
        let barY = bar.y;
        let barW = bar.maxW;
        let barH = barHeight;

        console.log(`[bar] ${bar.label} → X: ${barX}~${barX + barW}, Y: ${barY}~${barY + barH}`);

        if (x >= barX && x <= barX + barW && y >= barY && y <= barY + barH) {
            console.log("→ 點擊到 bar：", bar.label);
            let label = bar.label;
            bar.clicked = true;
            bar.clickTimer = 150;
            if (barLinks[label]) {
                console.log("→ 開啟連結：", barLinks[label]);
                window.open(barLinks[label], '_self');
            }
        }
    }
}

function touchEnded(event) {
    const touch = event.changedTouches ? event.changedTouches[0] : null;
    if (touch) {
        console.log("[touch] clientX:", touch.clientX, "clientY:", touch.clientY);
        checkBarClick(touch.clientX, touch.clientY);
    } else {
        console.log("[touch] fallback mouseX/mouseY:", mouseX, mouseY);
        checkBarClick(mouseX, mouseY);
    }
    return false;
}

document.addEventListener('touchend', touchEnded, false);

// Prevent default touch behavior
