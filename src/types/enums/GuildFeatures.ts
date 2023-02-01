/** Features that a guild may have access to. */
export enum GuildFeatures {
    /** Guild has access to animated guild banner images. */
    ANIMATED_BANNER = "ANIMATED_BANNER",
    /** Guild has access to animated guild icons. */
    ANIMATED_ICON = "ANIMATED_ICON",
    /**
     * Guild is using the [old permissions configuration
     * behavior](https://discord.com/developers/docs/change-log#upcoming-application-command-permission-changes).
     */
    APPLICATION_COMMAND_PERMISSIONS_V2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
    /** Guild has set up automod rules. */
    AUTO_MODERATION = "AUTO_MODERATION",
    /** Guild has access to guild banner images. */
    BANNER = "BANNER",
    /**
     * Guild is community (can enable welcome screen, membership screening,
     * stage and forum channels, discovery, and receives community updates).
     */
    COMMUNITY = "COMMUNITY",
    /** Guild has enabled monetization. */
    CREATOR_MONETIZABLE_PROVIZIONAL = "CREATER_MONETIZABLE_PROVIZIONAL",
    /** Guild has enabled the role subscription promotion page. */
    CREATOR_STORE_PAGE = "CREATOR_STORE_PAGE",
    /** Guild is a support server on the App Directory. */
    DEVELOPER_SUPPORT_SERVER = "DEVELOPER_SUPPORT_SERVER",
    /** Guild can be discovered in discovery. */
    DISCOVERABLE = "DISCOVERABLE",
    /** Guild can be featured in discovery. */
    FEATURABLE = "FEATURABLE",
    /** Guild has paused invites, preventing new users from joining. */
    INVITES_DISABLED = "INVITES_DISABLED",
    /** Guild has access to invite splash images. */
    INVITE_SPLASH = "INVITE_SPLASH",
    /**
     * Guild has enabled [membership
     * screening](https://discord.com/developers/docs/resources/guild#membership-screening-object).
     */
    MEMBER_VERIFICATION_GATE_ENABLED = "MEMBER_VERIFICATION_GATE_ENABLED",
    /** Guild has increased custom sticker slots. */
    MORE_STICKERS = "MORE_STICKERS",
    /** Guild has access to announcement channels. */
    NEWS = "NEWS",
    /** Guild is a Discord partner. */
    PARTNERED = "PARTNERED",
    /** Guild can be previewed via membership screening or the directory. */
    PREVIEW_ENABLED = "PREVIEW_ENABLED",
    /** Guild has access to role icons. */
    ROLE_ICONS = "ROLE_ICONS",
    /** Guild has purchasable role subscriptions. */
    ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
    /** Guild has enabled role subscriptions. */
    ROLE_SUBSCRIPTIONS_ENABLED = "ROLE_SUBSCRIPTIONS_ENABLED",
    /** Guild has enabled ticketed events. */
    TICKETED_EVENTS_ENABLED = "TICKETED_EVENTS_ENABLED",
    /** Guild has access to a vanity URL. */
    VANITY_URL = "VANITY_URL",
    /** Guild is verified. */
    VERIFIED = "VERIFIED",
    /** Guild has access to 384kbps bitrate. */
    VIP_REGIONS = "VIP_REGIONS",
    /** Guild has enabled the welcome screen. */
    WELCOME_SCREEN_ENABLED = "WELCOME_SCREEN_ENABLED",
}
