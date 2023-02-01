/** Bitfield flags for a user. */
export enum UserFlags {
    /** Official Discord employee */
    STAFF = 1 << 0,
    /** Partnered Server Owner */
    PARTNER = 1 << 1,
    /** HypeSquad Events Member */
    HYPESQUAD = 1 << 2,
    /** Level 1 Bug Hunter */
    BUG_HUNTER_LEVEL_1 = 1 << 3,
    /** HypeSquad House: Bravery */
    HYPESQUAD_ONLINE_HOUSE_BRAVERY = 1 << 6,
    /** HypeSquad House: Brilliance */
    HYPESQUAD_ONLINE_HOUSE_BRILLIANCE = 1 << 7,
    /** HypeSquad House: Balance */
    HYPESQUAD_ONLINE_HOUSE_BALANCE = 1 << 8,
    /** Early Nitro Supporter */
    PREMIUM_EARLY_SUPPORTER = 1 << 9,
    /** This user is a team. */
    TEAM_PSEUDO_USER = 1 << 10,
    /** Level 2 Bug Hunter */
    BUG_HUNTER_LEVEL_2 = 1 << 14,
    /** This is a bot account and is verified. */
    VERIFIED_BOT = 1 << 16,
    /** Early Verified Bot Developer */
    VERIFIED_DEVELOPER = 1 << 17,
    /** Moderator Programs Alumni */
    CERTIFIED_MODERATOR = 1 << 18,
    /**
     * This bot only uses HTTP interactions and is shown in the online member
     * list.
     */
    BOT_HTTP_INTERACTIONS = 1 << 19,
    /** Active Developer */
    ACTIVE_DEVELOPER = 1 << 22,
}
