/** The type of an activity sent as a message. */
export enum MessageActivityType {
    /** This message allows users to join a party. */
    JOIN = 1,
    /** This message allows users to spectate a user. */
    SPECTATE,
    /** This message allows users to listen along with a music integration. */
    LISTEN,
    /** This message allows users to request to join a party. */
    JOIN_REQUEST = 5,
}
