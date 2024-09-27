import Depth from "../../../2B2D/Components/Depth";
import Position from "../../../2B2D/Components/Position";
import Sprite from "../../../2B2D/Components/Sprite";
import Velocity from "../../../2B2D/Components/Velocity";
import Color from "../../../2B2D/Math/Color";
import Vec2 from "../../../2B2D/Math/Vec2";
import Update from "../../../2B2D/Update";
import Config from "../../Config";
import GameAssets from "../../GameAssets";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import Axis from "../Components/Axis";

export default function SpawnMagnets(update: Update) {
    const frames = ['0', '1', '2', '3'];
    const randomFrame = () => frames[Math.floor(Math.random() * frames.length)];

    // Player 1, top
    update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, Color.White(1), Math.PI),
        new Position(new Vec2(0, Config.MagnetExtent.y)),
        new Depth(0.1),
        new PlayerSpecific(1),
        new Axis(Axis.HORIZONTAL),
        new Velocity(Vec2.ZERO),
    );

    // Player 1, left
    update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, Color.White(1), -Math.PI / 2),
        new Position(new Vec2(-Config.MagnetExtent.x, 0)),
        new Depth(0.1),
        new PlayerSpecific(1),
        new Axis(Axis.VERTICAL),
        new Velocity(Vec2.ZERO),
    );


    // Player 2, bottom
    update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, new Color(0.25, 0.25, 1, 1), 0),
        new Position(new Vec2(0, -Config.MagnetExtent.y)),
        new Depth(0.1),
        new PlayerSpecific(2),
        new Axis(Axis.HORIZONTAL),
        new Velocity(Vec2.ZERO),
    );

    // Player 2, right
    update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, new Color(0.25, 0.25, 1, 1), Math.PI / 2),
        new Position(new Vec2(Config.MagnetExtent.x, 0)),
        new Depth(0.1),
        new PlayerSpecific(2),
        new Axis(Axis.VERTICAL),
        new Velocity(Vec2.ZERO),
    );
}