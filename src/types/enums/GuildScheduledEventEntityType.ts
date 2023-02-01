/** The target type of a guild scheduled event's location. */
export enum GuildScheduledEventEntityType {
    /** The event is targeting a stage. */
    STAGE_INSTANCE = 1,
    /** The event is targeting a voice channel. */
    VOICE,
    /** The event is targeting something else. */
    EXTERNAL,
}
