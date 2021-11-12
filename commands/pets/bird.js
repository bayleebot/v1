'use strict'

const fetchClass    = require(`./../../classes/fetch.js`);
const fetch         = new fetchClass();

module.exports = class {
    constructor(client, db) {
        this.client = client;
        this.db     = db;
    }

    getConfig() {
        return module.exports.config;
    }
    
    async onChat(msg, args, config) {
        var settings = module.exports.config;
        await fetch.redditImage(msg, `birbs`, settings);
    }
}

module.exports.config = {
    info: {
        module: 'pets',
        name: '🐦 Bird Pics',
        trigger: 'bird',
        aliases: [],
        usage: '%trigger%',
        color: 2996390
    },
    
    cooldown: {
        seconds: '10'
    }
}