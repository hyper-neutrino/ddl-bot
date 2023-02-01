import { StructureError } from "../errors/StructureError.js";
import { ComponentType } from "../types/enums.js";
import {
    ActionRowComponentData,
    ComponentData,
} from "../types/typedefs/components.js";

export class ActionRowBuilder {
    components: Exclude<ComponentData, ActionRowComponentData>[] = [];

    static from(other: ActionRowComponentData) {
        const builder = new ActionRowBuilder();
        builder.components = structuredClone(other.components);
        return builder;
    }

    toJSON(): ActionRowComponentData {
        if (this.components.length === 0)
            throw new StructureError(
                "Action row must contain at least one component."
            );

        if (
            this.components.some(
                (component) => component.type !== this.components[0].type
            )
        )
            throw new StructureError(
                "Action row must contain only the same type of component."
            );

        if (this.components[0].type === ComponentType.BUTTON) {
            if (this.components.length > 5)
                throw new StructureError(
                    "Action row can contain at most 5 buttons."
                );
        } else if (this.components.length > 1)
            throw new StructureError(
                "Action row can contain at most 1 non-button component."
            );

        return { type: ComponentType.ACTION_ROW, components: this.components };
    }
}
