import { ChannelType, ComponentType } from "../../enums.js";
import { BaseSelectComponentData } from "./BaseSelectComponentData.js";

export interface ChannelSelectComponentData extends BaseSelectComponentData {
    type: ComponentType.CHANNEL_SELECT;
    channel_types?: ChannelType[];
}
