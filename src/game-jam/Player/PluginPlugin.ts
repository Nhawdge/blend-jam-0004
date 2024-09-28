import Builder from "../../2B2D/Builder";
import FightState from "../Fight/States/FightState";
import MovePlayers from "./Systems/MovePlayers";
import SpawnPlayers from "./Systems/SpawnPlayers";

export default function PlayerPlugin(builder: Builder) {
    builder.schedule.enter(FightState, SpawnPlayers);
    builder.schedule.update(FightState, MovePlayers);
}