import TextureAsset from "../2B2D/Assets/TextureAsset";
import { Handle } from "../2B2D/Handle";
import Update from "../2B2D/Update";

const GameAssets = {
    backgrounds: [
        {
            handle: "bg-conf-room" as Handle,
            path: "bg-conference-room.png"
        },
        {
            handle: "bg-laptops" as Handle,
            path: "bg-laptops.png"
        },
        {
            handle: "bg-lounge" as Handle,
            path: "bg-lounge.png"
        }
    ],

    load: (update: Update) => {
        const assets = update.assets();
        
        for (const bg of GameAssets.backgrounds) {
            assets.add(TextureAsset.loadSingleSprite(bg.handle, `assets/${bg.path}`))
        }
    },

    isLoaded: (update: Update) => {
        const assets = update.assets();

        return assets.loaded(GameAssets.backgrounds.map(x => x.handle));
    }
};

export default GameAssets;
