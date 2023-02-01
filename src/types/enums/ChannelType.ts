/** The type of a channel. */
export enum ChannelType {
    /** A text channel in a server. */
    GUILD_TEXT = 0,
    /** A DM between users. */
    DM,
    /** A voice channel in a server. */
    GUILD_VOICE,
    /** A DM with multiple users. */
    GROUP_DM,
    /** A category in a server. Can contain up to 50 channels. */
    GUILD_CATEGORY,
    /**
     * An announcement channel in a server, which users can follow in other
     * channels to have them published messages crossposted there.
     */
    GUILD_ANNOUNCEMENT,
    /**
     * A thread channel in a `GUILD_ANNOUNCEMENT` channel. These are always
     * public.
     */
    ANNOUNCEMENT_THREAD = 10,
    /**
     * A thread channel in a `GUILD_TEXT` channel or a forum post in a
     * `GUILD_FORUM` channel.
     */
    PUBLIC_THREAD,
    /**
     * A thread channel in a `GUILD_TEXT` channel that can only be viewed by
     * invited users and users with the `MANAGE_THREADS` permission.
     */
    PRIVATE_THREAD,
    /** A voice channel for hosting events with an audience. */
    GUILD_STAGE_VOICE,
    /** The channel in a hub containing the listed servers. */
    GUILD_DIRECTORY,
    /** A thread-only forum channel. */
    GUILD_FORUM,
}
