class Bigfoot {
  constructor(name, scent) {
    this.name = name;
    this.hair = true;
    this.scent = scent;
    this.appetite = 'starving!';
    this.caloriesConsumed = 0;
    this.mood = 'meh';
    this.wardrobe = [];
  }

  munch() {
    this.caloriesConsumed += 1000
    if (this.caloriesConsumed > 10000) {
      this.appetite = 'content.'
    }
    if (this.caloriesConsumed >= 20000) {
      this.appetite = 'queasy :(';
    }
  };

  makeover(hairstyle, mood) {
    this.hair = hairstyle;
    this.mood = mood;
  }

  shoppingSpree(clothes) {
    for (var i = 0; i < clothes.length; i++) {
      this.wardrobe.unshift(clothes[i])
    }
  }
}


module.exports = Bigfoot;