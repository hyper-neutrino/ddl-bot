/** Opcodes for gateway events. */
export enum GatewayOpcodes {
    /** [Receive] An event was dispatched. */
    DISPATCH = 0,
    /** [Send + Receive] Used to keep the connection alive. */
    HEARTBEAT,
    /** [Send] Start a new session during the initial handshake. */
    IDENTIFY,
    /** [Send] Update the client's presence. */
    PRESENCE_UPDATE,
    /** [Send] Join/leave or move between voice channels. */
    VOICE_STATE_UPDATE,
    /** [Send] Resume a previously disconnected session. */
    RESUME,
    /** [Receive] The client should try to reconnect and resume. */
    RECONNECT,
    /** [Send] Request information about offline members in a large guild. */
    REQUEST_GUILD_MEMBERS,
    /**
     * [Receive] The session is now invalid. The client should reconnect and
     * identify/resume.
     */
    INVALID_SESSION,
    /**
     * [Receive] Sent after connecting and includes the `heartbeat_interval` to
     * use.
     */
    HELLO,
    /**
     * [Receive] Sent in response to receiving a heartbeat to acknowledge its
     * reception.
     */
    HEARTBEAT_ACK,
}
