import Position from "../../../2B2D/Components/Position";
import Velocity from "../../../2B2D/Components/Velocity";
import Vec2 from "../../../2B2D/Math/Vec2";
import Update from "../../../2B2D/Update";
import Config from "../../Config";
import GlobalStateResource from "../../GlobalStateResource";
import Axis from "../../Magnets/Components/Axis";
import Magnet from "../../Magnets/Components/Magnet";
import MagStrength from "../../Magnets/MagStrength";
import Player from "../Components/Player";
import PlayerSpecific from "../Components/PlayerSpecific";

export default function MovePlayers(update: Update) {
    const magnets = update.ecs.query(Magnet, PlayerSpecific, Axis, Position);
    const players = update.ecs.query(Player, PlayerSpecific, Velocity, Position);
    const globalState = update.resource(GlobalStateResource);

    for (const entity of magnets) {
        const [ mag, magPlayer, magAxis, magPosition ] = entity.components;
        if (mag.strength == MagStrength.None)
            continue;

        if (mag.strength == MagStrength.Move) {
            const matchingPlayer = players.find(x => x.components[1].player == magPlayer.player);
            if (matchingPlayer) {
                const [ _player, _specify, velocity, position ] = matchingPlayer.components;

                if (magAxis.axis == Axis.VERTICAL) {
                    const difference = Math.abs(magPosition.position.y - position.position.y);
                    if (difference > 50) {
                        continue;
                    }
                } else {
                    const difference = Math.abs(magPosition.position.x - position.position.x);
                    if (difference > 50) {
                        continue;
                    }
                }

                let strength = Config.PullStrength[magAxis.axis].scalarMultiply(globalState.polarities[magPlayer.player]);

                velocity.velocity = velocity.velocity.add(strength.scalarMultiply(update.delta));
            }
        }
    }


    for (const entity of players) {
        const [ _player, _specify, velocity, pos ] = entity.components;

        velocity.velocity = velocity.velocity.scalarMultiply(Config.PlayerDrag);
        pos.position = pos.position.add(velocity.velocity.scalarMultiply(update.delta));
    }
}