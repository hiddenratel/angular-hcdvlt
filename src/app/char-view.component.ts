import { Component } from '@angular/core';

@Component({
  selector: 'char-view',
  templateUrl: './char-view.component.html',
  styleUrls: ['./char-view.component.css']
})

export class CharViewComponent{
  char: Character;
  ;
};

export class Character{
    name: string;
    descripion: string;
}