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
    magnet: {
        handle: 'magnet' as Handle,
        path: 'magnet.png'
    },

    load: (update: Update) => {
        const assets = update.assets();
        
        for (const bg of GameAssets.backgrounds) {
            assets.add(TextureAsset.loadSingleSprite(bg.handle, `assets/${bg.path}`));
        }

        assets.add(TextureAsset.loadSingleSprite(GameAssets.magnet.handle, `assets/${GameAssets.magnet.path}`));
    },

    isLoaded: (update: Update) => {
        const assets = update.assets();

        return assets.loaded(GameAssets.backgrounds.map(x => x.handle))
            && assets.loaded([ GameAssets.magnet.handle ]);
    }
};

export default GameAssets;
