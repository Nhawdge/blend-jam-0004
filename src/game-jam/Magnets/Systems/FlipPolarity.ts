import MappedInput from "../../../2B2D/Components/MappedInput";
import Update from "../../../2B2D/Update";
import GlobalStateResource from "../../GlobalStateResource";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import PlayerActions from "../../PlayerActions";

const wasPressed = [false, false];

export default function FlipPolarity(update: Update) {
    const controllers = update.ecs.query(PlayerSpecific, MappedInput);

    for (const entity of controllers) {
        const [ player, input ] = entity.components;

        const isPressedNow = input.isPressed(update, PlayerActions.flip);

        if (isPressedNow && !wasPressed[player.player]) {
            const globalState = update.resource(GlobalStateResource);
            globalState.polarities[player.player] *= -1;
        }
        wasPressed[player.player] = isPressedNow;
    }
}