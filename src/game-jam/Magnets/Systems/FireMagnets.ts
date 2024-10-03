import MappedInput from "../../../2B2D/Components/MappedInput";
import Update from "../../../2B2D/Update";
import GlobalStateResource from "../../GlobalStateResource";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import PlayerActions from "../../PlayerActions";
import MagStrength from "../MagStrength";

export default function FireMagnets(update: Update) {
    const controllers = update.ecs.query(PlayerSpecific, MappedInput);
    const globalState = update.resource(GlobalStateResource);

    for (const controller of controllers) {
        const [ player, input ] = controller.components;
        const strength = 
            input.isPressed(update, PlayerActions.pull) ? MagStrength.Move
            : MagStrength.None;

        globalState.strengths[player.player] = strength;
    }
}