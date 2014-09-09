sand.define('Cosmos/God', function ()  {
  return Seed.extend({
    '+init' : function (god) {
      this.powers = this.powers;
      this.creations = this.creations;
      this.karma = this.karma;
      this.believers = god.believers;
    }
  })
})