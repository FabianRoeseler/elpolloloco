class Cloud extends MovableObject {
  y = 80;
  heigth = 550;
  width = 340;
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");

    this.x = Math.random() * 2500;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
