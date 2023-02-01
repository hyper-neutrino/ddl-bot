/** The status of a guild scheduled event. */
export enum GuildScheduledEventStatus {
    /** The event has yet to begin. */
    SCHEDULED = 1,
    /** The event is currently running. */
    ACTIVE,
    /** The event is done. Its `status` can no longer be updated. */
    COMPLETED,
    /** The event has been canceled. Its `status` can no longer be updated. */
    CANCELED,
}
