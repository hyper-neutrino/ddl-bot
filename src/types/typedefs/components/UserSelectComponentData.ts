import { ComponentType } from "../../enums.js";
import { BaseSelectComponentData } from "./BaseSelectComponentData.js";

export interface UserSelectComponentData extends BaseSelectComponentData {
    type: ComponentType.USER_SELECT;
}
