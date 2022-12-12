import { Submenu } from "./submenu";

export class Sidenav {
    id!: string;
    text!: string;
    subMenu!: Submenu[];
    isHighlight!: boolean;
    isSeparator!: boolean;
}