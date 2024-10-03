import Visible from "../../../2B2D/Components/Visibility";
import Update from "../../../2B2D/Update";
import GlobalStateResource from "../../GlobalStateResource";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import Beam from "../Components/Beam";
import MagStrength from "../MagStrength";

export default function LightupBeams(update: Update) {
    const beams = update.ecs.query(PlayerSpecific, Visible, Beam);
    const globalState = update.resource(GlobalStateResource);
    
    for (const player of [ 0, 1 ]) {
        const playerBeams = beams.filter(x => x.components[0].player == player);
        const power = globalState.strengths[player];

        for (const beam of playerBeams) {
            const [ _player, visible, _beam ] = beam.components;
            visible.visible = power == MagStrength.Move;
        }
    }
}