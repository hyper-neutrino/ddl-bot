/** The widget style for a guild's widget. */
export enum GuildWidgetStyle {
    /**
     * Shield-style widget with Discord icon and guild members online count.
     * [Example
     * image](https://discord.com/api/guilds/81384788765712384/widget.png?style=shield).
     */
    SHIELD = "shield",
    /**
     * Large image with guild icon, name, and online count. `POWERED BY DISCORD`
     * is the footer. [Example
     * image](https://discord.com/api/guilds/81384788765712384/widget.png?style=banner1).
     */
    BANNER_1 = "banner1",
    /**
     * Smaller widget style with guild icon, name, and online count. Split on
     * the right with the Discord logo. [Example
     * image](https://discord.com/api/guilds/81384788765712384/widget.png?style=banner2).
     */
    BANNER_2 = "banner2",
    /**
     * Large image with guild icon, name, and online count. In the footer, the
     * Discord logo is on the left and `Chat Now` is on the right. [Example
     * image](https://discord.com/api/guilds/81384788765712384/widget.png?style=banner3).
     */
    BANNER_3 = "banner3",
    /**
     * Large Discord logo at the top of the widget, guild icon, name, and online
     * count in the middle, and a `JOIN MY SERVER` button at the bottom.
     */
    BANNER_4 = "banner4",
}
