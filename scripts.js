// 获取按钮
let topBtn = document.getElementById("topBtn");

// 当用户滚动到一定高度时显示按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// 当用户点击按钮时，回到页面顶部
function topFunction() {
    document.body.scrollTop = 0; // 适用于 Safari
    document.documentElement.scrollTop = 0; // 适用于 Chrome, Firefox, IE 和 Opera
}