class Chicken extends MovableObject {
  height = 100;
  CHICKEN_WALK = [
    "../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  constructor() {
    super().loadImage("../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.CHICKEN_WALK);

    this.x = 300 + Math.random() * 500;
    this.y = 330;
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.CHICKEN_WALK.length;
      let path = this.CHICKEN_WALK[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }
}
