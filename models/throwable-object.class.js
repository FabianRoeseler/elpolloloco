class ThrowableObject extends MovableObject {
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.x = x;
    this.y = y;
    this.height = 70;
    this.width = 50;
    this.throw();
  }

  throw() {
    this.speedY = 15;
    this.applyGravity();
    setInterval(() => {
      this.x += 15;
    }, 25);
  }
}
