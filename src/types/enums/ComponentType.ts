/** The type of a message/modal component. */
export enum ComponentType {
    /** A row containing other components. */
    ACTION_ROW = 1,
    /** A button that can be clicked to open a URL or send an interaction. */
    BUTTON,
    /** A select menu for picking from a list of pre-defined text options. */
    STRING_SELECT,
    /** A text input field that allows entering arbitrary data. */
    TEXT_INPUT,
    /** A select menu for picking users. */
    USER_SELECT,
    /** A select menu for picking roles. */
    ROLE_SELECT,
    /** A select menu for picking users and roles. */
    MENTIONABLE_SELECT,
    /** A select menu for picking channels. */
    CHANNEL_SELECT,
}
