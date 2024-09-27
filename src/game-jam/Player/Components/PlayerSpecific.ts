import Component from "../../../2B2D/Components/Component";

export default class PlayerSpecific implements Component {
    static readonly NAME: string = 'PlayerSpecific';
    readonly name: string = PlayerSpecific.NAME;

    constructor(public player:number) { }
}