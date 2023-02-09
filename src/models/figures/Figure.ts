import {Colors} from "./Colors";
import {Cell} from "./Cell";
import logo from "../../assets/black-king.png"

export enum FigureNames {
    FIGURE ="",
    FIGURE ="",
    FIGURE ="",
    FIGURE ="",
    FIGURE ="",
    FIGURE ="",
    FIGURE ="",
}

export class Figure{
color : Colors;
logo : typeof logo | null;
cell : Cell;
name : FigureNames;
id : number;

constructor(color : Colors , cell : Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE
}

}