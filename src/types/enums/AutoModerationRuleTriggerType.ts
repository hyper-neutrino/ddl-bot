/** Trigger types for automod rules. */
export enum AutoModerationRuleTriggerType {
    /** Check if content contains words from a user-default list of keywords. */
    KEYWORD = 1,
    /** Check if content represents generic spam. */
    SPAM = 3,
    /**
     * Check if content contains words from internal pre-defined wordsets (see
     * also: {@link AutoModerationRuleKeywordPresetType})
     */
    KEYWORD_PRESET,
    /** Check if content contains more (unique) mentions than allowed. */
    MENTION_SPAM,
}
