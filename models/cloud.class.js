class Cloud extends MovableObject {
  y = 40;
  heigth = 350;
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");

    this.x = 150;
    this.width = 240;
  }
}
