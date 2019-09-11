export class Skill{
    name: string;
    attrKey: string;
    descripion: string;
    level: number;

    roll:number;


    constructor(name:string,attrKey:string, level: number,descripion:string){
      this.name=name;
      this.attrKey=attrKey;
      this.level=level;
      this.descripion=descripion;
      this.roll=0;
    }

}