class Level {
  enemies;
  clouds;
  backgroundObjects;
  coin;
  salsa;
  level_end_x = 2250;

  constructor(enemies, clouds, backgroundObjects, coins, salsa) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coin = coins;
    this.salsa = salsa;
    this.backgroundObjects = backgroundObjects;
  }
}
