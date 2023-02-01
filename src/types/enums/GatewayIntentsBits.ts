/** Intents to tell the gateway events to send. */
export enum GatewayIntentsBits {
    /**
     * Guild events: `GUILD_CREATE`, `GUILD_UPDATE`, `GUILD_DELETE`,
     * `GUILD_ROLE_CREATE`, `GUILD_ROLE_UPDATE`, `GUILD_ROLE_DELETE`,
     * `CHANNEL_CREATE`, `CHANNEL_UPDATE`, `CHANNEL_DELETE`,
     * `CHANNEL_PINS_UPDATE`, `THREAD_CREATE`, `THREAD_UPDATE`, `THREAD_DELETE`,
     * `THREAD_LIST_SYNC`, `THREAD_MEMBER_UPDATE`, `THREAD_MEMBERS_UPDATE`,
     * `STAGE_INSTANCE_CREATE`, `STAGE_INSTANCE_UPDATE`,
     * `STAGE_INSTANCE_DELETE`.
     */
    GUILDS = 1 << 0,
    /**
     * Guild member events: `GUILD_MEMBER_ADD`, `GUILD_MEMBER_UPDATE`,
     * `GUILD_MEMBER_REMOVE`, `THREAD_MEMBERS_UPDATE`
     */
    GUILD_MEMBERS = 1 << 1,
    /**
     * Guild moderation events: `GUILD_AUDIT_LOG_ENTRY_CREATE`, `GUILD_BAN_ADD`,
     * `GUILD_BAN_REMOVE`
     */
    GUILD_MODERATION = 1 << 2,
    /**
     * Guild emoji and sticker events: `GUILD_EMOJIS_UPDATE`,
     * `GUILD_STICKERS_UPDATE`
     */
    GUILD_EMOJIS_AND_STICKERS = 1 << 3,
    /**
     * Guild integration events: `GUILD_INTEGRATIONS_UPDATE`,
     * `INTEGRATION_CREATE`, `INTEGRATION_UPDATE`, `INTEGRATION_DELETE`
     */
    GUILD_INTEGRATIONS = 1 << 4,
    /** Guild webhook events: `WEBHOOKS_UPDATE` */
    GUILD_WEBHOOKS = 1 << 5,
    /** Guild invite events: `INVITE_CREATE`, `INVITE_DELETE` */
    GUILD_INVITES = 1 << 6,
    /** Guild voice state events: `VOICE_STATE_UPDATE` */
    GUILD_VOICE_STATES = 1 << 7,
    /** Guild presence events: `PRESENCE_UPDATED` */
    GUILD_PRESENCES = 1 << 8,
    /**
     * Guild message events: `MESSAGE_CREATE`, `MESSAGE_UPDATE`,
     * `MESSAGE_DELETE`, `MESSAGE_DELETE_BULK`
     */
    GUILD_MESSAGES = 1 << 9,
    /**
     * Guild message reaction events: `MESSAGE_REACTION_ADD`,
     * `MESSAGE_REACTION_REMOVE`, `MESSAGE_REACTION_REMOVE_ALL`,
     * `MESSAGE_REACTION_REMOVE_EMOJI`
     */
    GUILD_MESSAGE_REACTIONS = 1 << 10,
    /** Guild typing events: `TYPING_START` */
    GUILD_MESSAGE_TYPING = 1 << 11,
    /**
     * Direct message events: `MESSAGE_CREATE`, `MESSAGE_UPDATE`,
     * `MESSAGE_DELETE`, `CHANNEL_PINS_UPDATE`
     */
    DIRECT_MESSAGES = 1 << 12,
    /**
     * Direct message reaction events: `MESSAGE_REACTION_ADD`,
     * `MESSAGE_REACTION_REMOVE`, `MESSAGE_REACTION_REMOVE_ALL`,
     * `MESSAGE_REACTION_REMOVE_EMOJI`
     */
    DIRECT_MESSAGE_REACTIONS = 1 << 13,
    /** Direct message typing events: `TYPING_START` */
    DIRECT_MESSAGE_TYPING = 1 << 14,
    /**
     * Receive message content in message events. This does not correspond to
     * enabling/disabling gateway events.
     */
    MESSAGE_CONTENT = 1 << 15,
    /**
     * Guild scheduled event events: `GUILD_SCHEDULED_EVENT_CREATE`,
     * `GUILD_SCHEDULED_EVENT_UPDATE`, `GUILD_SCHEDULED_EVENT_DELETE`,
     * `GUILD_SCHEDULED_EVENT_USER_ADD`, `GUILD_SCHEDULED_EVENT_USER_REMOVE`
     */
    GUILD_SCHEDULED_EVENTS = 1 << 16,
    /**
     * Automod configuration events: `AUTO_MODERATION_RULE_CREATE`,
     * `AUTO_MODERATION_RULE_UPDATE`, `AUTO_MODERATION_RULE_DELETE`
     */
    AUTO_MODERATION_CONFIGURATION = 1 << 20,
    /** Automod execution events: `AUTO_MODERATION_ACTION_EXECUTION` */
    AUTO_MODERATION_EXECUTION = 1 << 21,
}
