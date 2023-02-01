/** The type of an incoming interaction. */
export enum InteractionType {
    /** A ping to ensure the interaction endpoint is working. */
    PING = 1,
    /** An application command (slash command or context menu command). */
    APPLICATION_COMMAND,
    /** A message component. */
    MESSAGE_COMPONENT,
    /**
     * An autocomplete interaction for a command option that has autocomplete
     * enabled.
     */
    APPLICATION_COMMAND_AUTOCOMPLETE,
    /** A pop-up modal was submitted. */
    MODAL_SUBMIT,
}
