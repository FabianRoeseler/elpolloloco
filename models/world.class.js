class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  statusBarCoins = new StatusBarCoins();
  statusBarSalsa = new StatusBarSalsa();
  coins = new Coins();
  salsa = new Salsa();
  throwableObjects = [];

  bottlepop = new Audio("../audio/bottlepop.mp3");
  coinsound = new Audio("../audio/pickupCoin.wav");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });

    this.level.coin.forEach((co) => {
      if (this.character.isColliding(co)) {
        this.character.hitCoin();
        this.statusBarCoins.setPercentage(this.character.coinsCollected);
        this.coinsound.play();
        this.character.checkIsPickingUp();
      }
    });

    this.level.salsa.forEach((bo) => {
      if (this.character.isColliding(bo)) {
        this.character.hitSalsa();
        this.statusBarSalsa.setPercentage(this.character.salsaCollected);
        this.bottlepop.play();
        this.character.checkIsPickingUp();
      }
    });
  }

  removeObjectFromCanvas(object) {
    const coinIndex = this.level.coin.indexOf(object);
    if (coinIndex > -1) {
      this.level.coin.splice(coinIndex, 1);
      return;
    }

    const salsaIndex = this.level.salsa.indexOf(object);
    if (salsaIndex > -1) {
      this.level.salsa.splice(salsaIndex, 1);
      return;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coin);
    this.addObjectsToMap(this.level.salsa);
    this.addObjectsToMap(this.throwableObjects);

    // fixed items inser here
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarCoins);
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarSalsa);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Image mirror included
   * @param {*} mo
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    /*     mo.drawFrame(this.ctx); */ // adding hitbox frame

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
