import Builder from "./2B2D/Builder";
import GamePlugin from "./game-jam/GamePlugin";

async function main() {
  const builder = await Builder.create(1280, 720);

  builder.plugin(GamePlugin);
  const engine = await builder.finish();

  engine.start();
};


main().catch(console.error);
