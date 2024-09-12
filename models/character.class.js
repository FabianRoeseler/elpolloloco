class Character extends MovableObject {
  height = 250;
  y = 80;
  speed = 10;
  pickedUp = false;

  IMAGES_IDLE = [
    "./img/2_character_pepe/1_idle/idle/I-1.png",
    "./img/2_character_pepe/1_idle/idle/I-2.png",
    "./img/2_character_pepe/1_idle/idle/I-3.png",
    "./img/2_character_pepe/1_idle/idle/I-4.png",
    "./img/2_character_pepe/1_idle/idle/I-5.png",
    "./img/2_character_pepe/1_idle/idle/I-6.png",
    "./img/2_character_pepe/1_idle/idle/I-7.png",
    "./img/2_character_pepe/1_idle/idle/I-8.png",
    "./img/2_character_pepe/1_idle/idle/I-9.png",
    "./img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_LONGIDLE = [
    "./img/2_character_pepe/1_idle/long_idle/I-11.png",
    "./img/2_character_pepe/1_idle/long_idle/I-12.png",
    "./img/2_character_pepe/1_idle/long_idle/I-13.png",
    "./img/2_character_pepe/1_idle/long_idle/I-14.png",
    "./img/2_character_pepe/1_idle/long_idle/I-15.png",
    "./img/2_character_pepe/1_idle/long_idle/I-16.png",
    "./img/2_character_pepe/1_idle/long_idle/I-17.png",
    "./img/2_character_pepe/1_idle/long_idle/I-18.png",
    "./img/2_character_pepe/1_idle/long_idle/I-19.png",
    "./img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  IMAGES_WALKING = [
    "./img/2_character_pepe/2_walk/W-21.png",
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "./img/2_character_pepe/3_jump/J-31.png",
    "./img/2_character_pepe/3_jump/J-32.png",
    "./img/2_character_pepe/3_jump/J-32.png",
    "./img/2_character_pepe/3_jump/J-33.png",
    "./img/2_character_pepe/3_jump/J-33.png",
    "./img/2_character_pepe/3_jump/J-35.png",
    "./img/2_character_pepe/3_jump/J-36.png",
    "./img/2_character_pepe/3_jump/J-36.png",
    "./img/2_character_pepe/3_jump/J-37.png",
    "./img/2_character_pepe/3_jump/J-37.png",
    "./img/2_character_pepe/3_jump/J-37.png",
    "./img/2_character_pepe/3_jump/J-37.png",
    "./img/2_character_pepe/3_jump/J-38.png",
    "./img/2_character_pepe/3_jump/J-38.png",
    "./img/2_character_pepe/3_jump/J-39.png",
    "./img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "./img/2_character_pepe/5_dead/D-51.png",
    "./img/2_character_pepe/5_dead/D-52.png",
    "./img/2_character_pepe/5_dead/D-53.png",
    "./img/2_character_pepe/5_dead/D-54.png",
    "./img/2_character_pepe/5_dead/D-55.png",
    "./img/2_character_pepe/5_dead/D-56.png",
    "./img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "./img/2_character_pepe/4_hurt/H-41.png",
    "./img/2_character_pepe/4_hurt/H-42.png",
    "./img/2_character_pepe/4_hurt/H-43.png",
  ];

  world;
  walking_sound = new Audio("./audio/walk.mp3");
  hitHurt = new Audio("./audio/hitHurt.wav");
  snore = new Audio("./audio/snore.mp3");

  loseGame() {
    this.playAnimation(this.IMAGES_DEAD);
    this.speedY = 30;
    setTimeout(() => {
      document.getElementById("loseScreen").style.display = "block";
    }, 500);
    this.snore.pause();
  }

  constructor() {
    super().loadImage("./img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONGIDLE);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.idle();
    this.applyGravity();
    this.animate();
  }

  /**
   * ANIMATIONS: Idle, Walking etc. with speed on intervals
   * Walking sound start and end
   */
  idle() {
    clearInterval(this.idleInterval);
    clearTimeout(this.longIdleTimeout);
    this.idleInterval = setInterval(() => {
      let i = this.currentImage % this.IMAGES_IDLE.length;
      let path = this.IMAGES_IDLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 500);
    this.longIdleTimeout = setTimeout(() => {
      this.longIdle();
      setTimeout(() => {
        this.snore.play();
      }, 250);
    }, 3500);
  }

  longIdle() {
    clearInterval(this.idleInterval);
    this.longIdleInterval = setInterval(() => {
      let i = this.currentImage % this.IMAGES_LONGIDLE.length;
      let path = this.IMAGES_LONGIDLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 500);
  }

  resetIdle() {
    clearInterval(this.idleInterval);
    clearInterval(this.longIdleInterval);
    clearTimeout(this.longIdleTimeout);
    this.idle();
  }

  pickUpItems() {
    const coin = this.world.level.coin.find((coin) => this.isColliding(coin));
    if (coin) {
      this.pickedUp = true;
      return coin;
    }
    const salsa = this.world.level.salsa.find((salsa) =>
      this.isColliding(salsa)
    );
    if (salsa) {
      this.pickedUp = true;
      return salsa;
    }
    this.pickedUp = false;
    return null;
  }

  checkIsPickingUp() {
    const collectedObject = this.pickUpItems();
    if (collectedObject) {
      this.removeObject(collectedObject);
    }
  }

  removeObject(object) {
    this.world.removeObjectFromCanvas(object);
    this.pickedUp = false;
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
        this.resetIdle();
      }

      if (this.world.keyboard.LEFT && this.x > 100) {
        this.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
        this.resetIdle();
      }

      if (
        (this.world.keyboard.UP || this.world.keyboard.SPACE) &&
        !this.isAboveGround()
      ) {
        this.jump();
        this.resetIdle();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.loseGame();
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.hitHurt.play();
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 50);
  }
}
