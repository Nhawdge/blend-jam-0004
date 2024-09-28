import MappedInput from "../../../2B2D/Components/MappedInput";
import Update from "../../../2B2D/Update";
import PlayerSpecific from "../../Player/Components/PlayerSpecific";
import PlayerActions from "../../PlayerActions";

export default function SpawnControls(update: Update) {
    // Player 1
    const playerOne = MappedInput.build(0, b => {
        b.for(PlayerActions.up, c => {
            c.keyboard('w');
            c.negative(1, 0.25);
        });
        b.for(PlayerActions.down, c => {
            c.keyboard('s');
            c.positive(1, 0.25);
        });
        b.for(PlayerActions.left, c => {
            c.keyboard('a');
            c.negative(1, 0.25);
        });
        b.for(PlayerActions.right, c => {
            c.keyboard('d');
            c.positive(1, 0.25);
        });
        b.for(PlayerActions.pull, c => {
            c.keyboard('f');
            c.button(0);
        });
        b.for(PlayerActions.flip, c => {
            c.keyboard('q');
            c.button(1);
        });
    });

    update.spawn(
        new PlayerSpecific(0),
        playerOne
    );

    // Player 2
    const playerTwo = MappedInput.build(1, b => {
        b.for(PlayerActions.up, c => {
            c.keyboard('ArrowUp');
            c.negative(1, 0.25);
        });
        b.for(PlayerActions.down, c => {
            c.keyboard('ArrowDown');
            c.positive(1, 0.25);
        });
        b.for(PlayerActions.left, c => {
            c.keyboard('ArrowLeft');
            c.negative(1, 0.25);
        });
        b.for(PlayerActions.right, c => {
            c.keyboard('ArrowRight');
            c.positive(1, 0.25);
        });
        b.for(PlayerActions.pull, c => {
            c.keyboard('/');
            c.button(0);
        });
        b.for(PlayerActions.flip, c => {
            c.keyboard('\'');
            c.button(1);
        });
    });

    update.spawn(
        new PlayerSpecific(1),
        playerTwo
    );
}