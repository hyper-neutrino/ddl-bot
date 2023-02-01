/** Bitfield flags for guild members. */
export enum GuildMemberFlags {
    /** The member has left and rejoined the guild. */
    DID_REJOIN = 1 << 0,
    /** The member has completed onboarding. */
    COMPLETED_ONBOARDING = 1 << 1,
    /** The member is exempt from verification requirements. */
    BYPASSES_VERIFICATION = 1 << 2,
    /** The member has started onboarding. */
    STARTED_ONBOARDING = 1 << 3,
}
