/**
 * The type of an application command option. Subcommands and subcommand groups
 * are structured differently in Daedalus.
 */
export enum ApplicationCommandOptionType {
    /** A string argument. */
    STRING = 3,
    /**
     * An integer between -2^53 and 2^53. Notably, IDs must be strings (but
     * should probably be another type depending on what the ID refers to).
     */
    INTEGER,
    /** A boolean argument (true/false). */
    BOOLEAN,
    /** A user argument. */
    USER,
    /** A channel argument. */
    CHANNEL,
    /** A role argument. */
    ROLE,
    /** A role or user argument. */
    MENTIONABLE,
    /** A double (floating-point number) between -2^53 and 2^53. */
    NUMBER,
    /** An attachment (file) argument. */
    ATTACHMENT,
}
