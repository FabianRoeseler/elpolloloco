class Chicken extends MovableObject {
  height = 80;
  isChickenDead = false;
  audio_was_played = false;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  chickenDeath = new Audio("./audio/chicken.mp3");

  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 300 + Math.random() * 2500;
    this.y = 340;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  chickenDeadAnimation() {
    this.loadImage(this.IMAGES_DEAD);
    if (!this.audio_was_played) {
      if (this.chickenDeath) this.chickenDeath.play();
      this.audio_was_played = true;
    }
  }

  chickenWalkAnimation() {
    this.playAnimation(this.IMAGES_WALKING);
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      if (this.isChickenDead === false) {
        this.chickenWalkAnimation();
      } else {
        this.chickenDeadAnimation();
      }
    }, 200);
  }
}
