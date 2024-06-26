var isAnimationRunning = true;
function toggleAnimation() {
    isAnimationRunning = !isAnimationRunning;
}
window.onload = function () {
    // Create 3 clouds and add them to the cloud div
    var cloud1 = document.createElement('img');
    cloud1.src = 'image/cloud_one.png';
    cloud1.style.position = 'absolute';
    cloud1.id = "cloud1-id";
    cloud1.classList.add("fun-style");
    cloud1.setAttribute('height', "160");
    cloud1.setAttribute('width', "160");
    document.getElementsByClassName('cloud-div')[0].appendChild(cloud1);
    var cloud2 = document.createElement('img');
    cloud2.src = 'image/cloud_two.png';
    cloud2.style.position = 'absolute';
    cloud2.style.bottom = '0px';
    cloud2.style.left = '300px';
    cloud2.id = "cloud2-id";
    cloud2.classList.add("fun-style");
    cloud2.setAttribute('height', "160");
    cloud2.setAttribute('width', "160");
    document.getElementsByClassName('cloud-div')[0].appendChild(cloud2);
    var cloud3 = document.createElement('img');
    cloud3.src = 'image/cloud_one.png';
    cloud3.style.position = 'absolute';
    cloud3.style.bottom = '100px';
    cloud3.style.left = '130px';
    cloud3.id = "cloud3-id";
    cloud3.classList.add("fun-style");
    cloud3.setAttribute('height', "160");
    cloud3.setAttribute('width', "160");
    document.getElementsByClassName('cloud-div')[0].appendChild(cloud3);
    var cloud4 = document.createElement('img');
    cloud4.src = 'image/cloud_one.png';
    cloud4.style.position = 'absolute';
    cloud4.style.bottom = '70px';
    cloud4.style.left = '130px';
    cloud4.id = "cloud4-id";
    cloud4.classList.add("fun-style");
    cloud4.setAttribute('height', "160");
    cloud4.setAttribute('width', "160");
    document.getElementsByClassName('cloud-div')[0].appendChild(cloud4);
    // Create diff x positions and move 
    var cloud1_x = Math.random() * 300;
    var cloud2_x = Math.random() * 300;
    var cloud3_x = Math.random() * 1600;
    var cloud4_x = Math.random() * 1600;
    var timer = setInterval(frame, 10);
    function frame() {
        // move all cloud x positions
        if (cloud1_x >= window.innerWidth) {
            cloud1_x = 0.0;
        }
        else if (isAnimationRunning) {
            cloud1_x += 0.5;
            cloud1.style.left = cloud1_x + 'px';
        }
        if (cloud2_x >= window.innerWidth) {
            cloud2_x = 0.0;
        }
        else if (isAnimationRunning) {
            cloud2_x += 0.75;
            cloud2.style.left = cloud2_x + 'px';
        }
        if (cloud3_x >= window.innerWidth) {
            cloud3_x = 0.0;
        }
        else if (isAnimationRunning) {
            cloud3_x += 1;
            cloud3.style.left = cloud3_x + 'px';
        }
        if (cloud4_x <= 0) {
            cloud4_x = 1800;
        }
        else if (isAnimationRunning) {
            cloud4_x -= 1;
            cloud4.style.left = cloud4_x + 'px';
        }
    }
};
