
window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;

        var maskMax = this.offsetWidth - mask.offsetWidth;  //遮挡层的移动上限

        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }

        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 大图片的移动距离 = 遮挡层的移动距离 * 大图片的移动上限 / 遮挡层的移动上限
        var bigImg = document.querySelector('.bigImg');
        var imgMax = bigImg.offsetWidth - big.offsetWidth; //大图片的移动上限
        var imgX = maskX * imgMax / maskMax;
        var imgY = maskY * imgMax / maskMax;
        bigImg.style.left = -imgX + 'px';
        bigImg.style.top = -imgY + 'px';

    })

})