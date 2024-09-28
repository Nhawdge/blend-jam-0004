import Vec2 from "../2B2D/Math/Vec2";

export default {
    TotalArenas: 3,
    MagnetHorizontalAccel: 0.02,
    MagnetVerticalAccel: 0.02,
    MagnetDrag: 0.9,
    MagnetExtent: new Vec2(580, 290),
    FloorY: -150,
    PlayerStartX: 350,
    BeamWidth: 50,
    PullStrength: [
        new Vec2(0, -0.01), // Vertical
        new Vec2(0.01, 0), // Horizontal
    ],
    PlayerDrag: 0.9,
}
