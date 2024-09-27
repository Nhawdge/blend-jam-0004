import Resource from "../2B2D/Resources/Resource";

export default class GlobalStateResource implements Resource {
    static readonly NAME: string = 'GlobalStateResource';
    readonly name: string = GlobalStateResource.NAME;

    public arena: number = 0;
}