import Resource from "../2B2D/Resources/Resource";
import MagStrength from "./Magnets/MagStrength";

export default class GlobalStateResource implements Resource {
    static readonly NAME: string = 'GlobalStateResource';
    readonly name: string = GlobalStateResource.NAME;

    public arena: number = 0;
    public polarities: number[] = [
        -1,
        1
    ];
    public strengths = [
        MagStrength.None,
        MagStrength.None,
    ];
}