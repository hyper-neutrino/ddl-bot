import { ComponentType } from "../../enums.js";
import { BaseSelectComponentData } from "./BaseSelectComponentData.js";

export interface RoleSelectComponentData extends BaseSelectComponentData {
    type: ComponentType.ROLE_SELECT;
}
