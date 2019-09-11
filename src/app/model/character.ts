import { Attribute } from './attribute';
import { Skill } from './skill';
export class Character{
    name: string;
    description: string;
    attributes: Array<Attribute>;
    skills: Array<Skill>;
    constructor(){
      this.skills=new Array<Skill>();
      this.skills.push(new Skill("Melee","WS",0,"Walka wrecz"));
      this.skills.push(new Skill("Range","BS",0,"Walka zasiegowa"));
      this.skills.push(new Skill("Nowy Skill","BS",0,"Walka zasiegowa"));
    }

}