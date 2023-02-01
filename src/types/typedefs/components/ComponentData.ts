import { ActionRowComponentData } from "./ActionRowComponentData.js";
import { ButtonComponentData } from "./ButtonComponentData.js";
import { ChannelSelectComponentData } from "./ChannelSelectComponentData.js";
import { MentionableSelectComponentsData } from "./MentionableSelectComponentData.js";
import { RoleSelectComponentData } from "./RoleSelectComponentData.js";
import { StringSelectComponentData } from "./StringSelectComponentData.js";
import { TextInputComponentData } from "./TextInputComponentData.js";
import { UserSelectComponentData } from "./UserSelectComponentData.js";

export type ComponentData =
    | ActionRowComponentData
    | ButtonComponentData
    | ChannelSelectComponentData
    | MentionableSelectComponentsData
    | RoleSelectComponentData
    | StringSelectComponentData
    | TextInputComponentData
    | UserSelectComponentData;
