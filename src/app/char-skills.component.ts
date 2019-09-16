import { Component,Input } from '@angular/core';
import { Skill } from './model/skill';
import { Attribute } from './model/attribute';

@Component({
  selector: 'char-skills',
  templateUrl: './char-skills.component.html',
  styleUrls: ['./char-skills.component.css']
})

export class CharSkillsComponent{
  @Input()
  skills: Array<Skill>;
  @Input()
  attributes:Array<Attribute>;

  onRoll(skill){
    skill.roll=randomIntFromInterval(0,100);
  }
  getCssClass(skill:Skill,modifier){
    for(let attribute of this.attributes){
      if(attribute.key==skill.attrKey)
      {
         if(attribute.currentValue>=(skill.roll+modifier))
         return "tg-kd4e"; 
         else
         return "tg-mnhx"; 
      }
      
      
    }
    // return "tg-kd4e"; 
    return "tg-0lax"; 
  }
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}