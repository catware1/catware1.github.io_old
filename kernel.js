
//
// CatWMJS Kernel
//
// Catware-Foundation, 2021.
//

//
// Functions
//

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function log(text) {
logfile += text + "\n";
if (enable_debug_term == "1") {
document.getElementById("catwmjsterm_").innerHTML += text + "\n";
}
}

function getzindex(id) {
    return zindex + 1;
}

function createWindow(title, content, id) {
  if (windows.includes(id) == false) {
  document.getElementById("mustdie").innerHTML += 
  `<div class="mydiv animate__animated animate__${animationsList[Math.floor(Math.random()*animationsList.length)]}" id="${id}">
  <div class="mydivheader" style="background-color:${colors[Math.floor(Math.random()*colors.length)]}" id="${id}header">${title}</div>
  <div class="wincontent">${content}</div>
  </div>`; 
  windows.push(id); 
  log("[CatWMJS] Created window with id: " + id + ", title: " + title); 
  for (var enable of windows) { dragElement(document.getElementById(enable));} 
  log("[CatWMJS] Windows draggability updated."); 
} else { 
  log("[CatWMJS Error] Unable to create window: window with id '" + id + "' already exists."); 
  document.getElementById(id).classList.remove("animate__animated");
}} 
 
function createWindowWithoutBorders(title, content, id) {
  if (windows.includes(id) == false) {
  document.getElementById("mustdie").innerHTML += 
  `<div class="mydiv" id="${id}">
  <div class="mydivheader" style="background-color:${colors[Math.floor(Math.random()*colors.length)]}" id="${id}header">${title}</div>
${content}
  </div>`;
  windows.push(id); 
  log("[CatWMJS] Created window with id: " + id + ", title: " + title);
  for (var enable of windows) { dragElement(document.getElementById(enable));}
  log("[CatWMJS] Windows draggability updated.");
} else {
  log("[CatWMJS Error] Unable to create window: window with id '" + id + "' already exists.");
}}

function createBlurredWindow(title, content, id) {
  if (windows.includes(id) == false) {
  document.getElementById("mustdie").innerHTML += 
  `<div class="mydiv-trans" id="${id}">
  <div class="mydivheader" style="background-color:${colors[Math.floor(Math.random()*colors.length)]}" id="${id}header">${title}</div>
  <div class="wincontent">${content}</div>
  </div>`;
  windows.push(id); 
  log("[CatWMJS] Created BLURRED window with id: " + id + ", title: " + title);
  for (var enable of windows) { dragElement(document.getElementById(enable));}
  log("[CatWMJS] Windows draggability updated.");
} else {
  log("[CatWMJS Error] Unable to create window: window with id '" + id + "' already exists.");
}}
function createBlurredWindowWithoutBorders(title, content, id) {
  if (windows.includes(id) == false) {
  document.getElementById("mustdie").innerHTML += 
  `<div class="mydiv-trans" id="${id}">
  <div class="mydivheader" style="background-color:${colors[Math.floor(Math.random()*colors.length)]}" id="${id}header">${title}</div>
${content}
  </div>`;
  windows.push(id); 
  log("[CatWMJS] Created BLURRED window with id: " + id + ", title: " + title);
  for (var enable of windows) { dragElement(document.getElementById(enable));}
  log("[CatWMJS] Windows draggability updated.");
} else {
  log("[CatWMJS Error] Unable to create window: window with id '" + id + "' already exists.");
}}

//
// Initial Setup
//

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if (isFirefox) {
log("[CatWMJS Warning] F*refox Browser detected, I beg you die bitch");
}
var animationsList = [
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight'
];
var logfile = [];
var zindex = 0;
var windows = [];
var colors = ["blue", "black"];
var enable_debug_term = "1";
if (enable_debug_term == "1") {
if (isFirefox == false) {
createBlurredWindow("CatWMJS Debug Terminal", "<pre id='catwmjsterm_'></pre>", "catwmjsterm"); } else {
createWindow("CatWMJS Debug Terminal", "<pre id='catwmjsterm_'></pre>", "catwmjsterm");
log("[CatWMJS Warning] F*refox Browser detected, I beg you die bitch");
}
}

createWindow("Welcome! | CatWMJS", "<h1>Привет!</h1><p>Обновление - сборка 2.<br>Я хуй знает, имеет ли эта ебанина практическое применение,<br> но всё же: почему бы и нет. Авторы проекта - Cat Weird, Камилла 'ова</p>", "welcome");
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    if (parseInt(elmnt.style.top) < 0) {
    elmnt.style.top = 0; }
    zindex++;
    elmnt.style.zIndex = zindex;
    elmnt.classList.remove("animate__animated");
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}