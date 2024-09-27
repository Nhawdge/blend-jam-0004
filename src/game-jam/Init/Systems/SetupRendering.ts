import Camera from "../../../2B2D/Components/Camera";
import Parent from "../../../2B2D/Components/Parent";
import Position from "../../../2B2D/Components/Position";
import Shaker from "../../../2B2D/Components/Shaker";
import Vec2 from "../../../2B2D/Math/Vec2";
import { GradientRenderer } from "../../../2B2D/Rendering/Gradient/GradientRenderer";
import SpriteRenderer from "../../../2B2D/Rendering/Sprite/SpriteRenderer";
import Update from "../../../2B2D/Update";
import CameraParent from "../Components/CameraParent";
import CameraSpawnedSignal from "../Signals/CameraSpawnedSignal";

export default function SetupRendering(update: Update) {
    update.renderers.add(SpriteRenderer.create);
    update.renderers.add(GradientRenderer.create);
  
    const parent = update.spawn(
      Position.from(0, 0),
      new CameraParent()
    );
  
    const shaker = update.spawn(
      new Shaker(200, 5, 50),
      Position.from(0, 0),
      new Parent(parent),
    );
  
    update.spawn(
      new Parent(shaker),
      new Camera(Vec2.from(2 / 1280, 2 / 720)),
      Position.from(0, 0)
    );
  
    update.signals.send(new CameraSpawnedSignal(parent));
  }