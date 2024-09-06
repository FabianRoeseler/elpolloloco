class ThrowableObject extends MovableObject {
  constructor() {
    super().loadImage("img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.x = 100;
    this.y = 100;
    this.height = 80;
    this.width = 60;
    this.throw(100, 150);
  }

  throw(x, y) {
    this.x = x;
    this.y - y;
    this.speedY = 15;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
