import Builder from "../2B2D/Builder";
import Update from "../2B2D/Update";
import ArenaPlugin from "./Arena/ArenaPlugin";
import FightPlugin from "./Fight/FightPlugin";
import FightState from "./Fight/States/FightState";
import GlobalStateResource from "./GlobalStateResource";
import InitPlugin from "./Init/InitPlugin";
import LoadedSignal from "./Init/Signals/LoadedSignal";
import InitState from "./Init/States/InitState";
import MagnetsPlugin from "./Magnets/MagnetsPlugin";
import PlayerPlugin from "./Player/PluginPlugin";

export default function GamePlugin(builder: Builder) {
    builder.plugin(InitPlugin);
    builder.plugin(FightPlugin);
    builder.plugin(ArenaPlugin);
    builder.plugin(PlayerPlugin);
    builder.plugin(MagnetsPlugin);

    builder.resource(new GlobalStateResource());

    builder.signals.handle(LoadedSignal, (update: Update) => {
        update.schedule.enter(FightState);
    });
}