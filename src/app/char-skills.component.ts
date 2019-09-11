import { Component,Input } from '@angular/core';
import { Skill } from './model/skill';

@Component({
  selector: 'char-skills',
  templateUrl: './char-skills.component.html',
  styleUrls: ['./char-skills.component.css']
})

export class CharSkillsComponent{
  @Input()
  skills: Array<Skill>;

  onRoll(skill){
    skill.roll=randomIntFromInterval(0,100);
  }
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}