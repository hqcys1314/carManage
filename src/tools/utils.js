// 设置标题
function setDocumentTitle(title) {
  document.title = title;
  // iOS中特殊处理
  // 微信使用WKWebView，在单页应用中通过document.title多次修改原生title的方法将失效，该问题将于微信3月份发布的版本中解决。
  let ua = navigator.userAgent;
  if (/ip(hone|od|ad)/i.test(ua) && /micromessenger|qq/i.test(ua)) {
    let iframe = document.createElement('iframe');
    // qq的webview中必须设置具体的src才生效
    iframe.setAttribute('src', /qq/i.test(ua) ? '/static/imgVar/favicon.ico' : 'about:blank');
    iframe.style.display = 'none';
    iframe.addEventListener('load', function () {
      setTimeout(function () {
        document.body.removeChild(iframe);
      }, 0);
    });
    document.body.appendChild(iframe);
  }
}


export default{
  setDocumentTitle,
}
