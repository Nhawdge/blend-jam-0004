import Animated from "../../../2B2D/Components/Animated";
import Depth from "../../../2B2D/Components/Depth";
import Position from "../../../2B2D/Components/Position";
import Sprite from "../../../2B2D/Components/Sprite";
import Velocity from "../../../2B2D/Components/Velocity";
import Color from "../../../2B2D/Math/Color";
import Vec2 from "../../../2B2D/Math/Vec2";
import Update from "../../../2B2D/Update";
import Config from "../../Config";
import GameAssets from "../../GameAssets";
import PlayerSpecific from "../Components/PlayerSpecific";

export default function SpawnPlayers(update: Update) {
    // Player 1
    update.spawn(
        new Sprite(GameAssets.player.handle, '0', Vec2.ONE, new Color(1, 0.25, 0.25, 1), 0),
        new Position(new Vec2(-Config.PlayerStartX, Config.FloorY)),
        new Velocity(Vec2.ZERO),
        new PlayerSpecific(1),
        new Animated('idle'),
        new Depth(0.1),
    );

    // Player 2
    update.spawn(
        new Sprite(GameAssets.player.handle, '0', new Vec2(-1, 1), Color.White(1), 0),
        new Position(new Vec2(Config.PlayerStartX, Config.FloorY)),
        new Velocity(Vec2.ZERO),
        new PlayerSpecific(2),
        new Animated('idle'),
        new Depth(0.1),
    );
}