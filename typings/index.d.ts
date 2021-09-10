import Discord from 'discord.js'

declare module 'logcord' {
    class Logcord {
        constructor(client: Discord.Client, options: LogcordOptions)
        public client: Discord.Client
        public options: LogcordOptions
    }


    export interface LogcordOptions {
        type?: 'mod' | 'dev' | 'moderaitor' | 'development' | [
            'rateLimit',
            'ready',
            'guildCreate',
            'guildDelete',
            'guildUpdate',
            'guildUnavailable',
            'guildAvailable',
            'guildMemberAdd',
            'guildMemberRemove',
            'guildMemberUpdate',
            'guildMemberAvailable',
            'guildMemberSpeaking',
            'guildMembersChunk',
            'guildIntegrationsUpdate',
            'roleCreate',
            'roleDelete',
            'inviteCreate',
            'inviteDelete',
            'roleUpdate',
            'emojiCreate',
            'emojiDelete',
            'emojiUpdate',
            'guildBanAdd',
            'guildBanRemove',
            'channelCreate',
            'channelDelete',
            'channelUpdate',
            'channelPinsUpdate',
            'message',
            'messageDelete',
            'messageUpdate',
            'messageDeleteBulk',
            'messageReactionAdd',
            'messageReactionRemove',
            'messageReactionRemoveAll',
            'messageReactionRemoveEmoji',
            'userUpdate',
            'presenceUpdate',
            'voiceServerUpdate',
            'voiceStateUpdate',
            'subscribe',
            'unsubscribe',
            'typingStart',
            'typingStop',
            'webhookUpdate',
            'error',
            'warn',
            'debug',
            'shardDisconnect',
            'shardError',
            'shardReconnecting',
            'shardReady',
            'shardResume',
            'invalidated',
            'raw'
        ]
    }
}