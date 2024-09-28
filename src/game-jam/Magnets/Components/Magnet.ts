import Component from "../../../2B2D/Components/Component";
import MagStrength from "../MagStrength";

export default class Magnet implements Component {
    static readonly NAME: string = 'Magnet';
    readonly name: string = Magnet.NAME;
    constructor(
        public strength: MagStrength = MagStrength.None
    ) {}
}