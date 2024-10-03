import Animated from "../../../2B2D/Components/Animated";
import Depth from "../../../2B2D/Components/Depth";
import Parent from "../../../2B2D/Components/Parent";
import Position from "../../../2B2D/Components/Position";
import RenderOrder from "../../../2B2D/Components/RenderOrder";
import Sprite from "../../../2B2D/Components/Sprite";
import Velocity from "../../../2B2D/Components/Velocity";
import Visible from "../../../2B2D/Components/Visibility";
import Color from "../../../2B2D/Math/Color";
import Vec2 from "../../../2B2D/Math/Vec2";
import Update from "../../../2B2D/Update";
import Config from "../../Config";
import GameAssets from "../../GameAssets";
import OverlayLayer from "../../OverlayLayer";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import Axis from "../Components/Axis";
import Beam from "../Components/Beam";
import Magnet from "../Components/Magnet";

export default function SpawnMagnets(update: Update) {
    const frames = ['0', '1', '2', '3'];
    const randomFrame = () => frames[Math.floor(Math.random() * frames.length)];

    // Player 1, top
    let parent = update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, Color.White(1), Math.PI),
        new Position(new Vec2(0, Config.MagnetExtent.y)),
        new Depth(0.1),
        new PlayerSpecific(0),
        new Axis(Axis.HORIZONTAL),
        new Velocity(Vec2.ZERO),
        new Magnet(),
    );

    // And the associated beam
    update.spawn(
        // new Gradient(Color.White(0.3), Color.White(0.3), Color.White(0.3), Color.White(0.3), new Vec2(Config.BeamWidth, 370)),
        new Sprite(GameAssets.arrows.handle, '0', new Vec2(-2, 2), Color.White(0.3), -Math.PI / 2).withRepeat(new Vec2(12, 1)),
        new Animated('Red'),
        new Position(new Vec2(0, -290)),
        new Parent(parent),
        new Visible(false),
        new PlayerSpecific(0),
        new Axis(Axis.HORIZONTAL),
        new RenderOrder(OverlayLayer),
        new Beam(),
    );

    // Player 1, left
    parent = update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, Color.White(1), -Math.PI / 2),
        new Position(new Vec2(-Config.MagnetExtent.x, 0)),
        new Depth(0.1),
        new PlayerSpecific(0),
        new Axis(Axis.VERTICAL),
        new Velocity(Vec2.ZERO),
        new Magnet(),
    );

    // Beam
    update.spawn(
        new Sprite(GameAssets.arrows.handle, '0', new Vec2(-2, 2), Color.White(0.3)).withRepeat(new Vec2(12, 1)),
        new Animated('Red'),
        new Position(new Vec2(590, 0)),
        new Parent(parent),
        new Visible(true),
        new PlayerSpecific(0),
        new Axis(Axis.HORIZONTAL),
        new RenderOrder(OverlayLayer),
        new Beam(),
    );



    // Player 2, bottom
    parent = update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, new Color(0.25, 0.25, 1, 1), 0),
        new Position(new Vec2(0, -Config.MagnetExtent.y)),
        new Depth(0.1),
        new PlayerSpecific(1),
        new Axis(Axis.HORIZONTAL),
        new Velocity(Vec2.ZERO),
        new Magnet(),
    );

    // Beam
    update.spawn(
        new Sprite(GameAssets.arrows.handle, '0', new Vec2(2, 2), Color.White(0.3), -Math.PI / 2).withRepeat(new Vec2(12, 1)),
        new Animated('Blue'),
        new Position(new Vec2(0, 290)),
        new Parent(parent),
        new Visible(false),
        new PlayerSpecific(1),
        new Axis(Axis.HORIZONTAL),
        new RenderOrder(OverlayLayer),
        new Beam(),
    );

    // Player 2, right
    parent = update.spawn(
        new Sprite(GameAssets.magnet.handle, randomFrame(), Vec2.ONE, new Color(0.25, 0.25, 1, 1), Math.PI / 2),
        new Position(new Vec2(Config.MagnetExtent.x, 0)),
        new Depth(0.1),
        new PlayerSpecific(1),
        new Axis(Axis.VERTICAL),
        new Velocity(Vec2.ZERO),
        new Magnet(),
    );

    // Beam
    update.spawn(
        new Sprite(GameAssets.arrows.handle, '0', new Vec2(2, 2), Color.White(0.3)).withRepeat(new Vec2(12, 1)),
        new Animated('Blue'),
        new Position(new Vec2(-590, 0)),
        new Parent(parent),
        new Visible(false),
        new PlayerSpecific(1),
        new Axis(Axis.HORIZONTAL),
        new RenderOrder(OverlayLayer),
        new Beam(),
    );
}