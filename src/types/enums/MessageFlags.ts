/** Bitfield flags for a message. */
export enum MessageFlags {
    /** This message was published to subscribed channels (original message). */
    CROSSPOSTED = 1 << 0,
    /**
     * This message is a crossposted message from an announcement channel
     * (published copy).
     */
    IS_CROSSPOST = 1 << 1,
    /** This message does not show embeds from links. */
    SUPPRESS_EMBEDS = 1 << 2,
    /**
     * This message is a crossposted message whose origin message has been
     * deleted.
     */
    SOURCE_MESSAGE_DELETED = 1 << 3,
    /** This message is an urgent system message. */
    URGENT = 1 << 4,
    /** This message has a thread tied to it (with the same ID). */
    HAS_THREAD = 1 << 5,
    /**
     * This message is an ephemeral interaction response (only visible to that
     * user and can be deleted by them).
     */
    EPHEMERAL = 1 << 6,
    /**
     * This message is a loading state for an interaction response and shows as
     * `<bot> is thinking...`.
     */
    LOADING = 1 << 7,
    /**
     * This message failed to mention some roles and add their members to the
     * thread.
     */
    FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 1 << 8,
}
