class Bigfoot {
  constructor(object) {
    this.name = object.name
    this.scent = object.scent || 'weird';
    this.hair = true;
    this.mood = 'meh';
    this.wardrobe = [];
    this.appetite = 'starving!';
    this.caloriesConsumed = 0;
  }

  makeover(hairStyle, mood) {
    this.hair = hairStyle;
    this.mood = mood;
  }

  shoppingSpree(clothes) {
    for (var i = 0; i < clothes.length; i++) {
      this.wardrobe.unshift(clothes[i]);
    }
  }

  munch() {
    this.caloriesConsumed += 1000;
    if (this.caloriesConsumed > 19999) {
      this.appetite = 'queasy :('
      return;
    } else if (this.caloriesConsumed > 10000) {
      this.appetite = 'content.';
    }
  }

};

module.exports = Bigfoot;
