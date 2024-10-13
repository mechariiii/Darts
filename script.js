window.onload = function() {
    var canvas = document.getElementById('dartboardCanvas');
    var ctx = canvas.getContext('2d');
    var radius = canvas.width / 2;

    function drawSection(startAngle, endAngle, color) {
        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    // الألوان الدائرية
    var colors = ['green', 'red', 'black', 'white'];
    var sectionAngle = (2 * Math.PI) / 20;

    // رسم القطاعات الـ 20
    for (var i = 0; i < 20; i++) {
        var startAngle = i * sectionAngle;
        var endAngle = startAngle + sectionAngle;
        var color = colors[i % colors.length];
        drawSection(startAngle, endAngle, color);
    }

    // رسم المركز
    ctx.beginPath();
    ctx.arc(radius, radius, radius / 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(radius, radius, radius / 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
};
