import { ComponentType } from "../../enums.js";
import { StringSelectOptionData } from "../StringSelectOptionData.js";
import { BaseSelectComponentData } from "./BaseSelectComponentData.js";

export interface StringSelectComponentData extends BaseSelectComponentData {
    type: ComponentType.STRING_SELECT;
    options: StringSelectOptionData[];
}
