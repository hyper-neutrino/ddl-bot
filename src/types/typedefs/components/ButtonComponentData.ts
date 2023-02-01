import { ButtonStyle, ComponentType } from "../../enums.js";
import { EmojiData } from "../EmojiData.js";

export type ButtonComponentData =
    | NonLinkButtonComponentData
    | LinkButtonComponentData;

interface BaseButtonComponentData {
    type: ComponentType.BUTTON;
    label?: string;
    emoji?: EmojiData;
    disabled?: boolean;
}

interface NonLinkButtonComponentData extends BaseButtonComponentData {
    style: Omit<ButtonStyle, ButtonStyle.LINK>;
    custom_id: string;
}

interface LinkButtonComponentData extends BaseButtonComponentData {
    style: ButtonStyle.LINK;
    url: string;
}
