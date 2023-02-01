/** The type of an activity. Bots cannot use the Custom type. */
export enum ActivityType {
    /** Playing {} */
    PLAYING = 0,
    /** Streaming {} */
    STREAMING,
    /** Listening to {} */
    LISTENING,
    /** Watching {} */
    WATCHING,
    /** {emoji} {details} */
    CUSTOM,
    /** Competing in {} */
    COMPETING,
}
