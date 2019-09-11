import { Component, Input } from '@angular/core';
import { Character } from './model/character';

@Component({
  selector: 'char-view',
  templateUrl: './char-view.component.html',
  styleUrls: ['./char-view.component.css']
})

export class CharViewComponent{
  @Input()
  characters: Array<Character>;
};
