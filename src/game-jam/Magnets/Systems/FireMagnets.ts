import MappedInput from "../../../2B2D/Components/MappedInput";
import Update from "../../../2B2D/Update";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import PlayerActions from "../../PlayerActions";
import Magnet from "../Components/Magnet";
import MagStrength from "../MagStrength";

export default function FireMagnets(update: Update) {
    const controllers = update.ecs.query(PlayerSpecific, MappedInput);
    const magnets = update.ecs.query(Magnet, PlayerSpecific);

    for (const controller of controllers) {
        const [ player, input ] = controller.components;
        const strength = 
            input.isPressed(update, PlayerActions.pull) ? MagStrength.Move
            : MagStrength.None;

        for (const mag of magnets.filter(x => x.components[1].player == player.player)) {
            mag.components[0].strength = strength;
        }
    }
}