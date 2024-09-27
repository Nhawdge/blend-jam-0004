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
        path: 'magnet.png',
        json: 'magnet.json'
    },
    player: {
        handle: 'player' as Handle,
        path: 'dummy13.png',
        json: 'dummy13.json'
    },

    load: (update: Update) => {
        const assets = update.assets();
        
        for (const bg of GameAssets.backgrounds) {
            assets.add(TextureAsset.loadSingleSprite(bg.handle, `assets/${bg.path}`));
        }

        assets.add(TextureAsset.loadSpriteWithAtlas(
            GameAssets.magnet.handle, 
            `assets/${GameAssets.magnet.path}`,
            `assets/${GameAssets.magnet.json}`
        ));

        assets.add(TextureAsset.loadSpriteWithAtlas(
            GameAssets.player.handle, 
            `assets/${GameAssets.player.path}`,
            `assets/${GameAssets.player.json}`
        ));
    },

    isLoaded: (update: Update) => {
        const assets = update.assets();

        return assets.loaded(GameAssets.backgrounds.map(x => x.handle))
            && assets.loaded([ 
                GameAssets.magnet.handle,
                GameAssets.player.handle
            ]);
    }
};

export default GameAssets;
