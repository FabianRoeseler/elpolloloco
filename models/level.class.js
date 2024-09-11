class Level {
  enemies;
  clouds;
  backgroundObjects;
  coin;
  level_end_x = 2250;

  constructor(enemies, clouds, backgroundObjects, coins) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coin = coins;
    this.backgroundObjects = backgroundObjects;
  }
}
