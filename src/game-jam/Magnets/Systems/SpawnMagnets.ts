import Depth from "../../../2B2D/Components/Depth";
import Position from "../../../2B2D/Components/Position";
import Sprite from "../../../2B2D/Components/Sprite";
import Color from "../../../2B2D/Math/Color";
import Vec2 from "../../../2B2D/Math/Vec2";
import Update from "../../../2B2D/Update";
import Dimensions from "../../Dimensions";
import GameAssets from "../../GameAssets";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import Axis from "../Components/Axis";

export default function SpawnMagnets(update: Update) {
    // Player 1, top
    update.spawn(
        new Sprite(GameAssets.magnet.handle),
        new Position(new Vec2(0, Dimensions.TopMagnetY)),
        new Depth(0.1),
        new PlayerSpecific(1),
        new Axis(Axis.HORIZONTAL)
    );

    // Player 1, left
    update.spawn(
        new Sprite(GameAssets.magnet.handle, undefined, Vec2.ONE, Color.White(1), Math.PI / 2),
        new Position(new Vec2(Dimensions.LeftMagnetX, 0)),
        new Depth(0.1),
        new PlayerSpecific(1),
        new Axis(Axis.VERTICAL)
    );


    // Player 2, bottom
    update.spawn(
        new Sprite(GameAssets.magnet.handle, undefined, Vec2.ONE, new Color(0, 0, 1, 1), Math.PI),
        new Position(new Vec2(0, -Dimensions.TopMagnetY)),
        new Depth(0.1),
        new PlayerSpecific(2),
        new Axis(Axis.HORIZONTAL)
    );

    // Player 2, right
    update.spawn(
        new Sprite(GameAssets.magnet.handle, undefined, Vec2.ONE, new Color(0, 0, 1, 1), -Math.PI / 2),
        new Position(new Vec2(-Dimensions.LeftMagnetX, 0)),
        new Depth(0.1),
        new PlayerSpecific(1),
        new Axis(Axis.VERTICAL)
    );
}