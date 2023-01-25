what is the difference between these two notations?

records[id][prop] & records[id].prop
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection


function setup() {
    createCanvas(400, 200);
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
}

function draw() {
    background(0);
    if (weater) {
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        ellipse(100, 100, temp, temp);
        ellipse(300, 100, humidity, humidity);
    }
}

What does createCanvas and ellipse do? What are different utilisations of this?