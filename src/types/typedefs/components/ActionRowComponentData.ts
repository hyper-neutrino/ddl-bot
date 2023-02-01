import { ComponentType } from "../../enums.js";
import { ComponentData } from "../components.js";

export interface ActionRowComponentData {
    type: ComponentType.ACTION_ROW;
    components: Exclude<ComponentData, ActionRowComponentData>[];
}
