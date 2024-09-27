import Builder from "../../2B2D/Builder";
import FightState from "../Fight/States/FightState";
import SpawnPlayers from "./Systems/SpawnPlayers";

export default function PlayerPlugin(builder: Builder) {
    builder.schedule.enter(FightState, SpawnPlayers);
}