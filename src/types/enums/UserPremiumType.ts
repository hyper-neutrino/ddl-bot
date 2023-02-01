/** The type of premium subscription a user has. */
export enum UserPremiumType {
    /** This user has no premium subscription. */
    NONE = 0,
    /** This user has Nitro Classic (no longer purchasable). */
    NITRO_CLASSIC,
    /** This user has a full Nitro subscription. */
    NITRO,
    /** This user has Nitro Basic. */
    NITRO_BASIC,
}
