let level1;

function initLevel() {
  document.getElementById("loseScreen").style.display = "none";
  level1 = new Level(
    [
      new Chickenbaby(),
      new Chickenbaby(),
      new Chickenbaby(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Endboss(),
    ],
    [new Cloud(), new Cloud(), new Cloud(), new Cloud()],
    [
      new BackgroundObject("./img/5_background/layers/air.png", 0),
      new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 0),
      new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0),
      new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0),
      new BackgroundObject("./img/5_background/layers/air.png", 719),
      new BackgroundObject(
        "./img/5_background/layers/3_third_layer/2.png",
        719
      ),
      new BackgroundObject(
        "./img/5_background/layers/2_second_layer/2.png",
        719
      ),
      new BackgroundObject(
        "./img/5_background/layers/1_first_layer/2.png",
        719
      ),
      new BackgroundObject("./img/5_background/layers/air.png", 1438),
      new BackgroundObject(
        "./img/5_background/layers/3_third_layer/1.png",
        1438
      ),
      new BackgroundObject(
        "./img/5_background/layers/2_second_layer/1.png",
        1438
      ),
      new BackgroundObject(
        "./img/5_background/layers/1_first_layer/1.png",
        1438
      ),
      new BackgroundObject("./img/5_background/layers/air.png", 2157),
      new BackgroundObject(
        "./img/5_background/layers/3_third_layer/2.png",
        2157
      ),
      new BackgroundObject(
        "./img/5_background/layers/2_second_layer/2.png",
        2157
      ),
      new BackgroundObject(
        "./img/5_background/layers/1_first_layer/2.png",
        2157
      ),
    ],
    [new Coins(), new Coins(), new Coins(), new Coins(), new Coins()],
    [new Salsa(), new Salsa(), new Salsa(), new Salsa(), new Salsa()]
  );
}
