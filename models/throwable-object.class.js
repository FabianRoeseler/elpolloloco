class ThrowableObject extends MovableObject {
  BOTTLE_ROTAION = [
    "../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  BOTTLE_SMASH = [
    "../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "../img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "../img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "../img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "../img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "../img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  isColliding(mo) {
    return super.isColliding(mo);
  }
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.loadImages(this.BOTTLE_ROTAION);
    this.loadImages(this.BOTTLE_SMASH);
    this.x = x;
    this.y = y;
    this.height = 70;
    this.width = 50;
    this.throw();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.y > 300 /* || this.isColliding(world.endboss */) {
        this.playAnimation(this.BOTTLE_SMASH);
      } else {
        this.playAnimation(this.BOTTLE_ROTAION);
      }
    }, 100);
  }

  throw() {
    this.speedY = 15;
    this.applyGravity();
    if (this.otherDirection) {
      setInterval(() => {
        this.x -= 10;
      }, 25);
    } else {
      setInterval(() => {
        this.x += 10;
      }, 25);
    }
  }
}
