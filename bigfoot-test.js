var assert = require('chai').assert;
var Bigfoot = require('./bigfoot.js');


describe('Bigfoot', function () {

  it('should have a name', function () {
    var bigfoot = new Bigfoot({ name: 'Harry' });
    assert.equal(bigfoot.name, 'Harry');
  });

  it('should start off being extremely hairy and dfeaul to having a weird scent', function () {
    var bigfoot = new Bigfoot({ name: 'Large Marge' });
    assert.equal(bigfoot.hair, true);
    assert.equal(bigfoot.scent, 'weird');
  });

  it('should be able to have its own scent', function () {
    var bigfoot = new Bigfoot({ name: 'Sir Nigel', scent: 'damp garbage' });
    assert.equal(bigfoot.scent, 'damp garbage');
  });

  it('should feel some type of way after getting a haircut and have a brand new style', function () {
    var bigfoot = new Bigfoot({ name: 'Young Ders', scent: 'hotdog juice' });
    assert.equal(bigfoot.mood, 'meh');
    bigfoot.makeover('combover', 'weak sauce');
    assert.equal(bigfoot.hair, 'combover');
    assert.equal(bigfoot.mood, 'weak sauce');
    bigfoot.makeover('mullet', 'extreme');
    assert.equal(bigfoot.mood, 'extreme');
    assert.equal(bigfoot.hair, 'mullet');
  });

  it('should be able to steal clothes to complete its look', function () {
    var bigfoot = new Bigfoot({ name: 'Fluff McCutcheon', scent: 'baby kittens' });
    var rackOfClothes = ['jorts', 'throwback jersey', 'tophat', 'tube socks'];
    assert.deepEqual(bigfoot.wardrobe, []);
    bigfoot.shoppingSpree(rackOfClothes);
    assert.deepEqual(bigfoot.wardrobe.length, 4);
    assert.deepEqual(bigfoot.wardrobe[0], 'tube socks');
  });

  it('should start off not having snacked', function () {
    var bigfoot = new Bigfoot({ name: 'Lady Grey', scent: 'lavander' });
    assert.equal(bigfoot.appetite, 'starving!');
    assert.equal(bigfoot.caloriesConsumed, 0);
    bigfoot.munch();
    bigfoot.munch();
    assert.equal(bigfoot.appetite, 'starving!');
    assert.equal(bigfoot.caloriesConsumed, 2000);
  });

  function feedingFrenzy(timesEaten, bigfoot) {
    for (var i = 0; i < timesEaten; i++) {
      bigfoot.munch();
    };
  };


  it('should feel content if it eats over 10000 calories', function () {
    var bigfoot = new Bigfoot({ name: 'Big Country', scent: 'old folks home' });
    feedingFrenzy(10, bigfoot);
    assert.equal(bigfoot.caloriesConsumed, 10000);
    assert.equal(bigfoot.appetite, 'starving!');
    bigfoot.munch();
    assert.equal(bigfoot.appetite, 'content.');
    assert.equal(bigfoot.caloriesConsumed, 11000);
  });

  it('should feel queasy if it eats over 20000 calories', function () {
    var bigfoot = new Bigfoot({ name: 'Sven', scent: 'eggs benedict' });
    assert.equal(bigfoot.appetite, 'starving!');
    feedingFrenzy(20, bigfoot);
    assert.equal(bigfoot.appetite, 'queasy :(');
  });


});
