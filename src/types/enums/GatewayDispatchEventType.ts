/** The type of a gateway event. */
export enum GatewayDispatchEventType {
    /** Heartbeat interval. */
    HELLO = "HELLO",
    /** The client is ready. Contains the initial state information. */
    READY = "READY",
    /** Resuming the session succeeded. */
    RESUMED = "RESUMED",
    /**
     * Server is disconnecting; the client should reconnect to the gateway and
     * resume.
     */
    RECONNECT = "RECONNECT",
    /** Failed to identify or resume, or the active session is invalid. */
    INVALID_SESSION = "INVALID_SESSION",
    /** An application command's permissions were updated. */
    APPLICATION_COMMAND_PERMISSIONS_UPDATE = "APPLICATION_COMMAND_PERMISSIONS_UPDATE",
    /** An automod rule was created. */
    AUTO_MODERATION_RULE_CREATE = "AUTO_MODERATION_RULE_CREATE",
    /** An automod rule was updated. */
    AUTO_MODERATION_RULE_UPDATE = "AUTO_MODERATION_RULE_UPDATE",
    /** An automod rule was deleted. */
    AUTO_MODERATION_RULE_DELETE = "AUTO_MODERATION_RULE_DELETE",
    /** An automod rule activated and executed an action. */
    AUTO_MODERATION_ACTION_EXECUTION = "AUTO_MODERATION_ACTION_EXECUTION",
    /** A new guild channel was created. */
    CHANNEL_CREATE = "CHANNEL_CREATE",
    /** A channel was updated. */
    CHANNEL_UPDATE = "CHANNEL_UPDATE",
    /** A channel was deleted. */
    CHANNEL_DELETE = "CHANNEL_DELETE",
    /** A message was pinned or unpinned. */
    CHANNEL_PINS_UPDATE = "CHANNEL_PINS_UPDATE",
    /** A thread was created or the client was added to a private thread. */
    THREAD_CREATE = "THREAD_CREATE",
    /** A thread was updated. */
    THREAD_UPDATE = "THREAD_UPDATE",
    /** A thread was deleted. */
    THREAD_DELETE = "THREAD_DELETE",
    /**
     * The client gained access to a channel; this contains the list of active
     * threads.
     */
    THREAD_LIST_SYNC = "THREAD_LIST_SYNC",
    /** The thread member for the client user was updated. */
    THREAD_MEMBER_UPDATE = "THREAD_MEMBER_UDPATE",
    /** User(s) were added to/removed from the thread. */
    THREAD_MEMBERS_UPDATE = "THREAD_MEMBERS_UPDATE",
    /**
     * Lazy-load for an unavailable guild, a guild became available, the client
     * joined a new guild, or the client created a guild.
     */
    GUILD_CREATE = "GUILD_CREATE",
    /** A guild was updated. */
    GUILD_UPDATE = "GUILD_UPDATE",
    /**
     * A guild became unavailable or the client left/was removed from a guild or
     * the client deleted a guild.
     */
    GUILD_DELETE = "GUILD_DELETE",
    /** A guild audit log entry was created. */
    GUILD_AUDIT_LOG_ENTRY_CREATE = "GUILD_AUDIT_LOG_ENTRY_CREATE",
    /** A user was banned from the guild. */
    GUILD_BAN_ADD = "GUILD_BAN_ADD",
    /** A user was unbanned from the guild. */
    GUILD_BAN_REMOVE = "GUILD_BAN_REMOVE",
    /** Guild emojis were updated. */
    GUILD_EMOJIS_UPDATE = "GUILD_EMOJIS_UPDATE",
    /** Guild stickers were updated. */
    GUILD_STICKERS_UPDATE = "GUILD_STICKERS_UPDATE",
    /** Guild integrations were updated. */
    GUILD_INTEGRATIONS_UPDATE = "GUILD_INTEGRATIONS_UPDATE",
    /** A user joined the guild. */
    GUILD_MEMBER_ADD = "GUILD_MEMBER_ADD",
    /** A user left or was removed from the guild. */
    GUILD_MEMBER_REMOVE = "GUILD_MEMBER_REMOVE",
    /** A guild member was updated. */
    GUILD_MEMBER_UPDATE = "GUILD_MEMBER_UPDATE",
    /** Response to requesting guild members */
    GUILD_MEMBERS_CHUNK = "GUILD_MEMBERS_CHUNK",
    /** A guild role was created. */
    GUILD_ROLE_CREATE = "GUILD_ROLE_CREATE",
    /** A guild role was updated. */
    GUILD_ROLE_UPDATE = "GUILD_ROLE_UPDATE",
    /** A guild role was deleted. */
    GUILD_ROLE_DELETE = "GUILD_ROLE_DELETE",
    /** A guild event was created. */
    GUILD_SCHEDULED_EVENT_CREATE = "GUILD_SCHEDULED_EVENT_CREATE",
    /** A guild event was updated. */
    GUILD_SCHEDULED_EVENT_UPDATE = "GUILD_SCHEDULED_EVENT_UPDATE",
    /** A guild event was deleted. */
    GUILD_SCHEDULED_EVENT_DELETE = "GUILD_SCHEDULED_EVENT_DELETE",
    /** A user subscribed to a guild event. */
    GUILD_SCHEDULED_EVENT_USER_ADD = "GUILD_SCHEDULED_EVENT_USER_ADD",
    /** A user unsubscribed from a guild event. */
    GUILD_SCHEDULED_EVENT_USER_REMOVE = "GUILD_SCHEDULED_EVENT_USER_REMOVE",
    /** A guild integration was created. */
    INTEGRATION_CREATE = "INTEGRATION_CREATE",
    /** A guild integration was updated. */
    INTEGRATION_UPDATE = "INTEGRATION_UPDATE",
    /** A guild integration was deleted. */
    INTEGRATION_DELETE = "INTEGRATION_DELETE",
    /** A user created an interaction with the client. */
    INTERACTION_CREATE = "INTERACTION_CREATE",
    /** An invite to a channel was created. */
    INVITE_CREATE = "INVITE_CREATE",
    /** An invite to a channel was deleted. */
    INVITE_DELETE = "INVITE_DELETE",
    /** A message was sent. */
    MESSAGE_CREATE = "MESSAGE_CREATE",
    /** A message was edited. */
    MESSAGE_UPDATE = "MESSAGE_UPDATE",
    /** A message was deleted. */
    MESSAGE_DELETE = "MESSAGE_DELETE",
    /** Multiple messages were deleted at once. */
    MESSAGE_DELETE_BULK = "MESSAGE_DELETE_BULK",
    /** A reaction was added to a message. */
    MESSAGE_REACTION_ADD = "MESSAGE_REACTION_ADD",
    /** A reaction was removed by a user from a message. */
    MESSAGE_REACTION_REMOVE = "MESSAGE_REACTION_REMOVE",
    /** All reactions were cleared from a message by a moderator. */
    MESSAGE_REACTION_REMOVE_ALL = "MESSAGE_REACTION_REMOVE_ALL",
    /** All reactions for a given emoji were removed from a message. */
    MESSAGE_REACTION_REMOVE_EMOJI = "MESSAGE_REACTION_REMOVE_EMOJI",
    /** A user's presence was updated. */
    PRESENCE_UPDATE = "PRESSENCE_UPDATE",
    /** A stage instance was created. */
    STAGE_INSTANCE_CREATE = "STAGE_INSTANCE_CREATE",
    /** A stage instance was updated. */
    STAGE_INSTANCE_UPDATE = "STAGE_INSTANCE_UPDATE",
    /** A stage instance was deleted. */
    STAGE_INSTANCE_DELETE = "STAGE_INSTANCE_DELETE",
    /** A user started typing. */
    TYPING_START = "TYPING_START",
    /** A user was updated. */
    USER_UPDATE = "USER_UPDATE",
    /** A user joined or left a voice channel or switched voice channels. */
    VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE",
    /** A guild's voice server was updated. */
    VOICE_SERVER_UPDATE = "VOICE_SERVER_UPDATE",
    /** A webhook was created, updated, or deleted. */
    WEBHOOKS_UPDATE = "WEBHOOKS_UPDATE",
}
