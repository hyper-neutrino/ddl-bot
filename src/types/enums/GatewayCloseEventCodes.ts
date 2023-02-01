/** Event codes for when the gateway is disconnected by Discord. */
export enum GatewayCloseEventCodes {
    /** An unknown error occurred. Try reconnecting. */
    UNKNOWN_ERROR = 4000,
    /** The gateway opcode sent by the client was invalid. Do not repeat. */
    UNKNOWN_OPCODE,
    /** The payload sent by the client was not decodable. Do not repeat. */
    DECODE_ERROR,
    /**
     * The client sent a payload before authenticating. Authenticate and try
     * again.
     */
    NOT_AUTHENTICATED,
    /**
     * The token sent with the identify payload was incorrect. Fix this before
     * retrying.
     */
    AUTHENTICATION_FAILED,
    /** The client sent multiple identify payloads. Do not repeat. */
    ALREADY_AUTHENTICATED,
    /**
     * The sequence sent when resuming was invalid. Reconnect with a new
     * session.
     */
    INVALID_SEQ = 4007,
    /** The client is sending payloads too quickly. This causes a disconnect. */
    RATE_LIMITED,
    /** The session timed out. Start a new one. */
    SESSION_TIMED_OUT,
    /** The shard sent when identifying was invalid. */
    INVALID_SHARD,
    /**
     * The session would have handled too many guilds; you must shard your
     * connection.
     */
    SHARDING_REQUIRED,
    /**
     * The client is using an invalid version for the gateway; use a different
     * version.
     */
    INVALID_API_VERSION,
    /** The gateway intents sent were invalid. */
    INVALID_INTENTS,
    /**
     * One or more gateway intents sent were not allowed. They must be enabled
     * on the developer portal / approved by Discord.
     */
    DISALLOWED_INTENTS,
}
