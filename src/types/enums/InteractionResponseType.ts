/** The type of a interaction response. */
export enum InteractionResponseType {
    /** Acknowledge a `Ping`. */
    PONG = 1,
    /** Respond with a message. */
    CHANNEL_MESSAGE_WITH_SOURCE = 4,
    /**
     * Acnkowledge an interaction and edit a response within 15 minutes. The
     * user sees a loading state.
     */
    DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
    /**
     * Acknowledge an interaction and edit the message from which the
     * interaction was created later. The user does not see a loading state.
     */
    DEFERRED_UPDATE_MESSAGE,
    /** Edit the message from which the interaction was created. */
    UPDATE_MESSAGE,
    /** Respond to an autocomplete interaction with the list of choices. */
    APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
    /** Respond to an interaction with a pop-up modal. */
    MODAL,
}
