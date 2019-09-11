export class Attribute{
    key: string;
    descripion: string;
    startingValue: number;
    advance: number;
    currentValue: number;

    constructor(key:string, startingValue:number, advance: number, currentValue: number){
      this.key=key;
      this.startingValue=startingValue;
      this.advance=advance;
      this.currentValue=currentValue;
    }

}