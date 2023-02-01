/** The type of a message. */
export enum MessageType {
    /** A normal message. */
    DEFAULT = 0,
    /** A user being added to a thread or group DM. */
    RECIPIENT_ADD,
    /** A user being removed from a thread or group DM. */
    RECIPEINT_REMOVE,
    /** An incoming call. */
    CALL,
    /** A channel name being changed (for threads/forum posts). */
    CHANNEL_NAME_CHANGE,
    /** A group DM channel's icon being changed. */
    CHANNEL_ICON_CHANGE,
    /** A message being pinned to a channel. */
    CHANNEL_PINNED_MESSAGE,
    /** A boost system message. */
    GUILD_BOOST,
    /** A boost system message, and the server reached tier 1 from tier 0. */
    GUILD_BOOST_TIER_1,
    /** A boost system message, and the server reached tier 2 from tier 1. */
    GUILD_BOOST_TIER_2,
    /** A boost system message, and the server reached tier 3 from tier 2. */
    GUILD_BOOST_TIER_3,
    /** An announcement channel being added to crosspost into this channel. */
    CHANNEL_FOLLOW_ADD,
    /** Notification for the guild being disqualified from discovery. */
    GUILD_DISCOVERY_DISQUALIFIED,
    /** Notification for the guild being requalified for discovery. */
    GUILD_DISCOVERY_REQUALIFIED,
    /** First warning for guild's discovery grace period. */
    GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
    /** Last warning for guild's discovery grace period. */
    GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
    /** A thread being created. */
    THREAD_CREATED,
    /** A reply to another message. */
    REPLY,
    /** A message created by a chat input command. */
    CHAT_INPUT_COMMAND,
    /** The initial message used to start a thread. */
    THREAD_STARTER_MESSAGE,
    /** ??? */
    GUILD_INVITE_REMINDER,
    /** A message created by a context menu command. */
    CONTEXT_MENU_COMMAND,
    /** An automod action notification. */
    AUTO_MODERATION_ACTION,
    /** A role subscription purchase notification. */
    ROLE_SUBSCRIPTION_PURCHASE,
    /** ??? */
    INTERACTION_PREMIUM_UPSELL,
    /** A guild purchased premium for an application. */
    GUILD_APPLICATION_PREMIUM_SUBSCRIPTION,
}
