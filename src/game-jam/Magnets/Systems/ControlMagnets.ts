import MappedInput from "../../../2B2D/Components/MappedInput";
import Sprite from "../../../2B2D/Components/Sprite";
import Update from "../../../2B2D/Update";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import Axis from "../Components/Axis";

export default function ControlMagnets(update: Update) {
    // Probably the magnets
    const magnets = update.ecs.query(Axis, PlayerSpecific, Sprite);

    const controllers = update.ecs.query(PlayerSpecific, MappedInput);

    for (const controller of controllers) {
        const [ playerController, playerInput ] = controller.components;

        // TODO...
    }
}