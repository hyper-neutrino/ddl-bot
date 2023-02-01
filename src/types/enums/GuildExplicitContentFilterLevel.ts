/** Safety filter level for a guild. */
export enum GuildExplicitContentFilterLevel {
    /** Media content will not be scanned. */
    DISABLED = 0,
    /** Media content from members without roles will be scanned. */
    MEMBERS_WITHOUT_ROLES,
    /**
     * Media content from every user will be scanned. This is required for
     * community servers.
     */
    ALL_MEMBERS,
}
