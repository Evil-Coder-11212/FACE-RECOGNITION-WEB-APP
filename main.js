// https://teachablemachine.withgoogle.com/models/JLu1P1h47/
let video;
let results;
function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/b-Gkb31SL/model.json"
  );
}

function setup() {
  createCanvas(300, 300);
  video = createCapture(VIDEO);
  video.hide();
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
  } else {
    results = result[0];
    console.log(results);
    document.querySelector("#accuracy").textContent = `Accuracy: ${floor(
      results.confidence * 100
    )}%`;
    if (results.label == "Class 1") {
      document.querySelector("#name").textContent = `Name: Person 1`;
    } else {
      document.querySelector("#name").textContent = `Name: Person 2`;
    }
  }
}

function save() {
  save("image");
}

function draw() {
  image(video, 0, 0, 300, 300);
}
