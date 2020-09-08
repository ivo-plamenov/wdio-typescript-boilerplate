export default class UIComponent {
    constructor(private componentName: string) {}

    name():string {
        return this.componentName;
    }
}