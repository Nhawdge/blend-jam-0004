import Builder from "../../2B2D/Builder";
import FightState from "../Fight/States/FightState";
import InitState from "../Init/States/InitState";
import ControlMagnets from "./Systems/ControlMagnets";
import FireMagnets from "./Systems/FireMagnets";
import FlipPolarity from "./Systems/FlipPolarity";
import LightupBeams from "./Systems/LightupBeams";
import SpawnControls from "./Systems/SpawnControls";
import SpawnMagnets from "./Systems/SpawnMagnets";

export default function MagnetsPlugin(builder: Builder) {
    builder.schedule.exit(InitState, SpawnControls);
    builder.schedule.enter(FightState, SpawnMagnets);
    builder.schedule.update(FightState, FireMagnets);
    builder.schedule.update(FightState, FlipPolarity);
    builder.schedule.update(FightState, ControlMagnets);
    builder.schedule.update(FightState, LightupBeams);
}