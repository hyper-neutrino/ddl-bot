import { ComponentType } from "../../enums.js";
import { BaseSelectComponentData } from "./BaseSelectComponentData.js";

export interface MentionableSelectComponentsData
    extends BaseSelectComponentData {
    type: ComponentType.MENTIONABLE_SELECT;
}
