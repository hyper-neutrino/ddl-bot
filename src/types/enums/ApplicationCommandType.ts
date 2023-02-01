/** The type of an application command. */
export enum ApplicationCommandType {
    /** Chat input commands (slash commands) inputted into the chat input bar. */
    CHAT_INPUT = 1,
    /** User context menu commands (in the Apps menu upon clicking a user) */
    USER,
    /**
     * Message context menu commands (in the Apps menu upon right-clicking a
     * message)
     */
    MESSAGE,
}
