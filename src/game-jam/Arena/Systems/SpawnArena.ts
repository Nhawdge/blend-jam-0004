import Position from "../../../2B2D/Components/Position";
import Sprite from "../../../2B2D/Components/Sprite";
import Vec2 from "../../../2B2D/Math/Vec2";
import Update from "../../../2B2D/Update";
import GameAssets from "../../GameAssets";
import GlobalStateResource from "../../GlobalStateResource";

export default function SpawnArena(update: Update) {
    const currentArena = update.resource(GlobalStateResource).arena;

    update.spawn(
        new Position(Vec2.ZERO),
        new Sprite(GameAssets.backgrounds[currentArena].handle)
    );
}