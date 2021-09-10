const Discord = require('discord.js')

module.exports = class Logcord {
   /**
    * Main Client of Logcord
    * 
    * @param {Discord.Client} client Discord Client
    * @param {LogcordOptions} options Logcord Options
    */
    constructor (client, {
        type = 'all'
    } = {}) {
        if (!(client instanceof Discord.Client)) throw new TypeError('Invalid `client`. `client` parameter is required.')

        this.type = type
        client.once('ready', async () => {
            console.log('[Logcord] Started ')
        })
    }
}