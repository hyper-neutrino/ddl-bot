/** The type of an audit log event. */
export enum AuditLogEventType {
    /** Server settings were updated. */
    GUILD_UPDATE = 1,
    /** A channel was created. */
    CHANNEL_CREATE = 10,
    /** Channel settings were updated. */
    CHANNEL_UPDATE,
    /** A channel was deleted. */
    CHANNEL_DELETE,
    /** Permission overwrites were created in a channel. */
    CHANNEL_OVERWRITE_CREATE,
    /** Permission overwrites were updated in a channel. */
    CHANNEL_OVERWRITE_UPDATE,
    /** Permission overwrites were deleted in a channel. */
    CHANNEL_OVERWRITE_DELETE,
    /** A member was kicked (removed) from the server. */
    MEMBER_KICK = 20,
    /** A member was kicked (removed) from the server via pruning. */
    MEMBER_PRUNE,
    /** A member was banned from the server. */
    MEMBER_BAN,
    /** A member was unbanned from the server. */
    MEMBER_UNBAN,
    /** A member was updated in the server. */
    MEMBER_UPDATE,
    /** A member's roles were changed in the server. */
    MEMBER_ROLE_UPDATE,
    /** A member was moved from one voice channel to another. */
    MEMBER_VOICE_MOVE,
    /** A member was disconnected from a voice channel. */
    MEMBER_VOICE_DISCONNECT,
    /** A bot was added to the server. */
    BOT_ADD,
    /** A role was created. */
    ROLE_CREATE = 30,
    /** A role was updated. */
    ROLE_UPDATE,
    /** A role was deleted. */
    ROLE_DELETE,
    /** A server invite was created. */
    INVITE_CREATE = 40,
    /** A server invite was updated. */
    INVITE_UPDATE,
    /** A server invite was deleted. */
    INVITE_DELETE,
    /** A webhook was created. */
    WEBHOOK_CREATE = 50,
    /** A webhook was updated or moved to another channel. */
    WEBHOOK_UPDATE,
    /** A webhook was deleted. */
    WEBHOOK_DELETE,
    /** A server emoji was created. */
    EMOJI_CREATE = 60,
    /** A server emoji was updated. */
    EMOJI_UPDATE,
    /** A server emoji was deleted. */
    EMOJI_DELETE,
    /** One message was deleted. */
    MESSAGE_DELETE = 72,
    /** Many messages were deleted. */
    MESSAGE_DELETE_BULK,
    /** A message was pinned to its channel. */
    MESSAGE_PIN,
    /** A message was unpinned from its channel. */
    MESSAGE_UNPIN,
    /** An app was added to the server. */
    INTEGRATION_CREATE = 80,
    /** An app was updated (e.g. its scopes changed). */
    INTEGRATION_UPDATE,
    /** An app was removed from the server. */
    INTEGRATION_DELETE,
    /** A stage instance was created (i.e. a stage channel went live). */
    STAGE_INSTANCE_CREATE,
    /** A stage instance's details were updated. */
    STAGE_INSTANCE_UPDATE,
    /** A stage instance was deleted (i.e. a stage channel is no longer live). */
    STAGE_INSTANCE_DELETE,
    /** A server sticker was created. */
    STICKER_CREATE = 90,
    /** A server sticker was updated. */
    STICKER_UPDATE,
    /** A server sticker was deleted. */
    STICKER_DELETE,
    /** A server event was created. */
    GUILD_SCHEDULED_EVENT_CREATE = 100,
    /** A server event was updated. */
    GUILD_SCHEDULED_EVENT_UPDATE,
    /** A server event was deleted. */
    GUILD_SCHEDULED_EVENT_DELETE,
    /** A thread was created in a channel. */
    THREAD_CREATE = 110,
    /** A thread was updated. */
    THREAD_UPDATE,
    /** A thread was deleted. */
    THREAD_DELETE,
    /** An application command's permissions were updated. */
    APPLICATION_COMMAND_PERMISSION_UPDATE = 121,
    /** An automod rule was created. */
    AUTO_MODERATION_RULE_CREATE = 140,
    /** An automod rule was updated. */
    AUTO_MODERATION_RULE_UPDATE,
    /** An automod rule was deleted. */
    AUTO_MODERATION_RULE_DELETE,
    /** An automod rule blocked a message from being sent. */
    AUTO_MODERATION_BLOCK_MESSAGE,
    /** An automod rule flagged a message and reported it to a channel. */
    AUTO_MODERATION_FLAG_TO_CHANNEL,
    /** An automod rule automatically timed out a member. */
    AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
}
