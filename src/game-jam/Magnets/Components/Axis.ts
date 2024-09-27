import Component from "../../../2B2D/Components/Component";

export default class Axis implements Component {
    static readonly NAME: string = 'Magnet';
    readonly name: string = Axis.NAME;

    public static readonly HORIZONTAL:number = 1;
    public static readonly VERTICAL:number = 1;

    constructor(
        public axis: number,
    ) { }
}