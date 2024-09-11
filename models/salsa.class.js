class Salsa extends MovableObject {
  height = 60;
  width = 60;

  y = 370;
  IMAGES_SALSA = [
    "../img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    /*     "../img/6_salsa_bottle/2_salsa_bottle_on_ground.png", */
  ];

  constructor() {
    super().loadImage("../img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.IMAGES_SALSA);
    this.x = 300 + Math.random() * 2000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_SALSA);
    }, 200);
  }
}
