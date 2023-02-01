/** The type of a channel webhook. */
export enum WebhookType {
    /**
     * This webhook can post messages with a generated token (i.e. "normal"
     * webhooks).
     */
    INCOMING = 1,
    /** This webhook is used to crosspost messages from announcement channels. */
    CHANNEL_FOLLOWER,
    /** This webhook is an interaction webhook. */
    APPLICATION,
}
