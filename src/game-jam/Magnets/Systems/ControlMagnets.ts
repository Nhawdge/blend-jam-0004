import MappedInput from "../../../2B2D/Components/MappedInput";
import Position from "../../../2B2D/Components/Position";
import Sprite from "../../../2B2D/Components/Sprite";
import Velocity from "../../../2B2D/Components/Velocity";
import Vec2 from "../../../2B2D/Math/Vec2";
import Update from "../../../2B2D/Update";
import Config from "../../Config";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import PlayerActions from "../../PlayerActions";
import Axis from "../Components/Axis";
import Magnet from "../Components/Magnet";

export default function ControlMagnets(update: Update) {
    // Probably the magnets
    const magnets = update.ecs.query(Axis, PlayerSpecific, Position, Velocity, Magnet);

    const controllers = update.ecs.query(PlayerSpecific, MappedInput);

    const axises = [
        {
            axis: Axis.HORIZONTAL,
            accel: new Vec2(Config.MagnetHorizontalAccel * update.delta, 0),
            negativeAction: PlayerActions.left,
            positiveAction: PlayerActions.right,
        },
        {
            axis: Axis.VERTICAL,
            accel: new Vec2(0, -Config.MagnetVerticalAccel * update.delta),
            positiveAction: PlayerActions.down,
            negativeAction: PlayerActions.up,
        }
    ]

    // Calculate new velocities for all magnets
    for (const controller of controllers) {
        const [ playerController, playerInput ] = controller.components;

        for (const axis of axises) {
            const magnet = magnets.find(
                x => x.components[0].axis == axis.axis 
                && x.components[1].player == playerController.player
            );
            if (magnet) {
                const [ _axis, _player, _position, velocity ] = magnet.components;
    
                if (playerInput.isPressed(update, axis.positiveAction)) {
                    velocity.velocity = velocity.velocity.add(axis.accel);
                }
                if (playerInput.isPressed(update, axis.negativeAction)) {
                    velocity.velocity = velocity.velocity.add(axis.accel.scalarMultiply(-1));
                }
    
                velocity.velocity = velocity.velocity.scalarMultiply(Config.MagnetDrag);
            }
        }
    }

    // Move magnets and update velocities again.
    for (const magnet of magnets) {
        const [ _axis, _player, position, velocity ] = magnet.components;
        const pos = position.position;

        position.position = position.position.add(velocity.velocity.scalarMultiply(update.delta));
        position.position = position.position.max(Config.MagnetExtent.scalarMultiply(-1));
        position.position = position.position.min(Config.MagnetExtent);

        // Update velocity
        // velocity.velocity = pos.sub(position.position);
    }
}