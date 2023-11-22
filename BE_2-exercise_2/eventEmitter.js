const EventEmitter = require('events');

class UserEventSimulator extends EventEmitter {
  constructor() {
    super();
    this.usernames = ['majed', 'mohammad', 'salem'];
    this.minInterval = 0.2;
    this.maxInterval = 2;
  }

  startSimulation() {
    this._simulateUserLogin();
  }

  _simulateUserLogin() {
    const randomUserIndex = Math.floor(Math.random() * this.usernames.length);
    const randomUser = this.usernames[randomUserIndex];

    this.emit('userLoggedIn', randomUser);

    setTimeout(() => {
      this.emit('userLoggedOut', randomUser);
      this._simulateUserLogin();
    }, Math.random() * (this.maxInterval * 1000 - this.minInterval * 1000) + this.minInterval * 1000);
  }
}

const userEventSimulator = new UserEventSimulator();

userEventSimulator.on('userLoggedIn', (username) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: ${username} logged in`);
});

userEventSimulator.on('userLoggedOut', (username) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: ${username} logged out`);
});

userEventSimulator.startSimulation();