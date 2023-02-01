/** Scopes for an application's OAuth2 authorization. */
export enum OAuth2Scopes {
    /**
     * Allows the app to fetch data from the user's "Now Playing / Recently
     * Played" list (requires approval).
     */
    ACTIVITIES_READ = "activities.read",
    /**
     * Allows the app to edit a user's activity (requires approval - not needed
     * for GameSDK Activity Manager).
     */
    ACTIVITIES_WRITE = "activities.write",
    /** Allows the app to read build data for the user's applications. */
    APPLICATIONS_BUILDS_READ = "applications.builds.read",
    /**
     * Allows the app to upload/update builds for a user's applications
     * (requires approval).
     */
    APPLICATIONS_BUILDS_UPLOAD = "applications.builds.upload",
    /** Allows the app to create commands in the guild. */
    APPLICATIONS_COMMANDS = "applications.commands",
    /**
     * Allows the app to update its commands using a Bearer token (client
     * credentials grant only).
     */
    APPLICATIONS_COMMANDS_UPDATE = "applications.commands.update",
    /**
     * Allows the app to update permissions for its commands in a guild the user
     * has permissions to do so in.
     */
    APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE = "applications.commands.permissions.update",
    /** Allows the app to read entitlements for a user's applications. */
    APPLICATIONS_ENTITLEMENTS = "applications.entitlements",
    /**
     * Allows the app to read and update store data (SKUs, store listings,
     * achievements, etc.) for a user's applications (the store feature is no
     * longer active).
     */
    APPLICATIONS_STORE_UPDATE = "applications.store.update",
    /** The app's bot user will be added to the guild the user selects. */
    BOT = "bot",
    /** Allows /users/@me/connections to return linked third-party accounts. */
    CONNECTIONS = "connections",
    /**
     * Allows the app to see information about the user's DMs and group DMs
     * (requires approval).
     */
    DM_CHANNELS_READ = "dm_channels.read",
    /** Allows /users/@me to return an `email`. */
    EMAIL = "email",
    /** Allows the app to join users to a group DM. */
    GDM_JOIN = "gdm.join",
    /**
     * Allows /users/@me/guilds to return basic information about all of a
     * user's guilds.
     */
    GUILDS = "guilds",
    /**
     * Allows /guilds/:guild_id/members/:user_id to be used for joining users to
     * a guild.
     */
    GUILDS_JOIN = "guilds.join",
    /**
     * Allows /users/@me/guilds/:gid/member to return a user's member
     * information in a guild.
     */
    GUILDS_MEMBERS_READ = "guilds.members.read",
    /**
     * Allows /users/@me without `email` (use {@link OAuth2Scopes.EMAIL} to
     * include `email`).
     */
    IDENTIFY = "identify",
    /**
     * For local RPC server API access, allows the app to read messages from all
     * client channels. Otherwise, restricted to channels/guilds created by the
     * app.
     */
    MESSAGES_READ = "messages.read",
    /**
     * Allows the app to know the user's friends and implicit relationships
     * (requires approval).
     */
    RELATIONSHIPS_READ = "relationships.read",
    /**
     * Allows the app to update a user's connection and metadata for the app
     * itself.
     */
    ROLE_CONNECTIONS_WRITE = "role_connections.write",
    /**
     * For local RPC server API access, allows the app to control a user's local
     * Discord client (requires approval).
     */
    RPC = "rpc",
    /**
     * For local RPC server API access, allows the app to update a user's
     * activity (requires approval)
     */
    RPC_ACTIVITIES_WRITE = "rpc.activities.write",
    /**
     * For local RPC server API access, allows the app to read notifications
     * pushed to the user (requires approval)
     */
    RPC_NOTIFICATIONS_READ = "rpc.notifications.read",
    /**
     * For local RPC server API access, allows the app to read a user's voice
     * settings and listen for voice events (requires approval)
     */
    RPC_VOICE_READ = "rpc.voice.read",
    /**
     * For local RPC server API access, allows the app to update a user's voice
     * settings (requires approval)
     */
    RPC_VOICE_WRITE = "rpc.voice.write",
    /**
     * Allows the app to connect the voice on a user's behalf and see all voice
     * members (requires approval)
     */
    VOICE = "voice",
    /**
     * Generates a webhook that is returned in the OAuth token response for
     * authorization code grants.
     */
    WEBHOOK_INCOMING = "webhook.incoming",
}
