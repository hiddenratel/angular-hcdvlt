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
};