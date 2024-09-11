class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  coinsCollected = 0;
  lastCoinCollected = 0;
  salsaCollected = 0;
  lastSalsaCollected = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      // Throwable always fall to ground
      return true;
    } else {
      return this.y < 180;
    }
  }

  // character.isColloding(chicken);
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energy -= 15;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  hitCoin() {
    this.coinsCollected += 20;
    if (this.coinsCollected > 100) {
      this.coinsCollected = 100;
    } else {
      this.lastCoinCollected = new Date().getTime();
    }
  }

  hitSalsa() {
    this.salsaCollected += 20;
    if (this.salsaCollected > 100) {
      this.salsaCollected = 100;
    } else {
      this.lastSalsaCollected = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; // change to seconds
    return timepassed < 0.3;
  }

  isDead() {
    return this.energy == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 30;
  }
}
