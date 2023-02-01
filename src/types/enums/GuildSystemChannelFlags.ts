/** Bitfield flags for a guild's system channel. */
export enum GuildSystemChannelFlags {
    /** Do not post welcome messages. */
    SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
    /** Do not post boost notifications. */
    SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
    /** Do not post server setup tips. */
    SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
    /** Do not show the button to welcome incoming members with stickers. */
    SUPPRESS_JOIN_NOTIFICATION_REPLIES = 1 << 3,
    /** Do not show role subscription purchase and renewal notifications. */
    SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS = 1 << 4,
    /**
     * Do not show the button to reply to role subscription notifications with
     * stickers.
     */
    SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES = 1 << 5,
}
