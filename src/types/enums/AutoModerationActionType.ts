/** Actions that can be taken when an automod rule triggers. */
export enum AutoModerationActionType {
    /** Blocks the message from being sent. */
    BLOCK_MESSAGE = 1,
    /** Sends an alert message to a designated channel */
    SEND_ALERT_MESSAGE,
    /** Times out the user for the specified duration */
    TIMEOUT,
}
