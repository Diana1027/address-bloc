const inquirer = require('inquirer');
const MenuController = require('./controllers/menu_controller');

const menu = new MenuController();

menu.clear();
menu.main();
