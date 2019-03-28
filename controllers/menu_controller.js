const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose from an option below: ',
        choices: ['Add new contact', 'Exit', 'Get date and time'],
      },
    ];
    this.contacts = [];
  }

  main() {
    console.log('Welcome to AddressBloc!');
    inquirer
      .prompt(this.mainMenuQuestions)
      .then(response => {
        switch (response.mainMenuChoice) {
          case 'Add new contact':
            this.addContact();
            break;
          case 'Exit':
            this.exit();
            break;
          case 'Get date and time':
            this.getDate();
            break;
          default:
            console.log('Invalid Input');
            this.main();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  clear() {
    console.log('\x1Bc');
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate() {
    this.clear();
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;
    console.log(dateTime);
    this.main();
  }

  exit() {
    console.log('Thanks for using AddressBloc!');
    process.exit();
  }
};
