import Builder from "../../2B2D/Builder";
import FightState from "../Fight/States/FightState";
import SpawnArena from "./Systems/SpawnArena";

export default function ArenaPlugin(builder: Builder) {
    builder.schedule.enter(FightState, SpawnArena);
}