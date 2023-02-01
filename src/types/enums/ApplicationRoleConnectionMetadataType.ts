/**
 * Metadata type for role connections (the operator used to determine if a
 * threshold is met).
 */
export enum ApplicationRoleConnectionMetadataType {
    /** Metadata value <= configured value */
    INTEGER_LESS_THAN_OR_EQUAL = 1,
    /** Metadata value >= configured value */
    INTEGER_GREATER_THAN_OR_EQUAL,
    /** Metadata value == configured value */
    INTEGER_EQUAL,
    /** Metadata value != configured value */
    INTEGER_NOT_EQUAL,
    /** Metadata value is before configured value (days before current time) */
    DATETIME_LESS_THAN_OR_EQUAL,
    /** Metadata value is after configured value (days before current time) */
    DATETIME_GREATER_THAN_OR_EQUAL,
    /** Metadata value is the same the configured value */
    BOOLEAN_EQUAL,
    /** Metadata value is the opposite of the configured value */
    BOOLEAN_NOT_EQUAL,
}
