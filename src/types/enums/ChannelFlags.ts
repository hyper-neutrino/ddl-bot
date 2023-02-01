/** Bitfield flags for channels. */
export enum ChannelFlags {
    /** This forum post is pinned to the top of its parent `GUILD_FORUM` channel. */
    PINNED = 1 << 1,
    /**
     * This `GUILD_FORUM` channel requires the user to select at least one tag
     * when creating a new forum post.
     */
    REQUIRE_TAG = 1 << 4,
}
