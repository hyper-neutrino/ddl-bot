import { ComponentType, TextInputStyle } from "../../enums.js";

export interface TextInputComponentData {
    type: ComponentType.TEXT_INPUT;
    custom_id: string;
    style: TextInputStyle;
    label: string;
    min_length?: number;
    max_length?: number;
    required?: boolean;
    value?: string;
    placeholder?: string;
}
