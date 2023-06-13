console.log("欢迎访问 SharpIce 制作的 ‘Furry 介绍’ 项目");

window.onerror = function (message, source, lineno, colno, error) { // 错误回调
    SharpIce.DiaLog.Error(`
    <div id="DiaLog">
        <div class="ErrorContent">
            消息：${message}
            </br></br>
            位置：${source}
            </br></br>
            行：${lineno}
            </br></br>
            列：${colno}
            </br></br>
            错误：${error}
        </div>
    </div>
    `);
}
document.addEventListener('DOMContentLoaded', () => {
    pangu.autoSpacingPage(); // 中英这之间自动添加空格
});