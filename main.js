function preload()
{}

function setup()
{
    canvas = createCanavs(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 640, 480);

    fill(255, 0 , 0);
    stroke(255, 0 , 0);
    ellipse(70, 80, 40, 60);
    ellipse(260, 80, 40, 60);
    ellipse(70, 300, 40, 60);
    ellipse(260, 300, 40, 60);
    rect(87, 65, 155, 30);
    rect(87, 285, 155, 30);
    rect(55, 103, 30, 175);
    rect(245, 103, 30, 175);
    circle(70, 186, 45);
    circle(260, 186, 45);
    circle(167, 77, 45);
    circle(167, 299, 45);
}

function save_picture()
{
    save('framed photo.png');
}