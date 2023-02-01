/** The verification level for a guild. */
export enum GuildVerificationLevel {
    /** No restrictions. */
    NONE = 0,
    /** Must have a verified email. */
    LOW,
    /** Must be registered on Discord for 5+ minutes. */
    MEDIUM,
    /** Must be registered on Discord for 10+ minutes. */
    HIGH,
    /** Must have a verified phone number. */
    VERY_HIGH,
}
