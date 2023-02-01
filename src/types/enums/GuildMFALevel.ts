/** Guild multi-factor authentication requirement. */
export enum GuildMFALevel {
    /** Guild has no MFA/2FA requirement for moderation. */
    NONE = 0,
    /**
     * Guild requires MFA/2FA for moderation. This is required for community
     * servers.
     */
    ELEVATED,
}
