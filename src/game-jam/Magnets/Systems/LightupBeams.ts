import MappedInput from "../../../2B2D/Components/MappedInput";
import Visible from "../../../2B2D/Components/Visibility";
import Update from "../../../2B2D/Update";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import PlayerActions from "../../PlayerActions";
import Beam from "../Components/Beam";

export default function LightupBeams(update: Update) {
    const controllers = update.ecs.query(PlayerSpecific, MappedInput);
    const beams = update.ecs.query(PlayerSpecific, Visible, Beam);

    for (const controller of controllers) {
        const [ player, input ] = controller.components;
        const isVisible = input.isPressed(update, PlayerActions.pull);

        const playerBeams = beams.filter(x => x.components[0].player == player.player);
        for (const beam of playerBeams) {
            const [ _player, visible, _beam ] = beam.components;
            visible.visible = isVisible;
        }
    }
}