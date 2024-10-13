window.onload = function() {
    var canvas = document.getElementById('dartboardCanvas');
    var ctx = canvas.getContext('2d');

    var boardColors = ['green', 'red', 'black', 'white'];
    var centerColors = ['red', 'green'];
    var radius = canvas.width / 2;
    var numberOfSections = 20;

    // رسم القطاعات
    for (let i = 0; i < numberOfSections; i++) {
        let angle = (i * Math.PI * 2) / numberOfSections;
        let nextAngle = ((i + 1) * Math.PI * 2) / numberOfSections;

        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, angle, nextAngle);
        ctx.fillStyle = boardColors[i % boardColors.length];
        ctx.fill();
        ctx.closePath();
    }

    // رسم المركز
    ctx.beginPath();
    ctx.arc(radius, radius, radius / 10, 0, Math.PI * 2);
    ctx.fillStyle = centerColors[0];
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(radius, radius, radius / 20, 0, Math.PI * 2);
    ctx.fillStyle = centerColors[1];
    ctx.fill();
    ctx.closePath();
};
