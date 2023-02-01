import { EmojiData } from "./EmojiData.js";

export interface StringSelectOptionData {
    label: string;
    value: string;
    description?: string;
    emoji?: EmojiData;
    default?: boolean;
}
