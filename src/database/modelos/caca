const fs = require("fs");
const { unsubscribe } = require("../../routes/main");

const User = {
    fileName: "../data/usersBase.json",

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    generateId: function () {
        let allUser = this.findAll();
        let lastUser = allUser.pop();
        if (lastUser) {
            return lastUser.id + 1;
        } return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUser = this.findAll();
        let userFound = allUser.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findByField: function (field, text) {
        let allUser = this.findAll();
        let userFound = allUser.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    create: function (userData) {
        let allUser = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUser.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUser, null, " "));

        return newUser;
    },

    delete: function (id) {
        let allUser = this.findAll();
        let finalUser = allUser.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, " "))
        return true;
    }
};
module.exports = User;