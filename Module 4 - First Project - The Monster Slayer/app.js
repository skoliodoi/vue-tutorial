new Vue ({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  computed: {

  },
  methods: {
    startGame() {
      this.gameIsRunning = !this.gameIsRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player dealt ' + damage + ' points of damage!'
      })

      if (this.checkWin()) {
        return;
      }
      this.monsterAttack()
    },
    specialAttack() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= 
      this.turns.unshift({
        isPlayer: true,
        text: 'Player used a special attack dealing ' + damage + ' points of damage!'
      })
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack()
    },
    heal() {
      if (this.playerHealth <=90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }

      this.turns.unshift({
        isPlayer: true,
        text: 'Player healed 10 points of health!'
      })

      this.monsterAttack();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random()*max +1), min)
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! Play again?')){
          this.startGame()
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! Try again?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    monsterAttack() {
      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster dealt ' + damage + ' points of damage!'
      })
      this.checkWin()
    },
  }
});