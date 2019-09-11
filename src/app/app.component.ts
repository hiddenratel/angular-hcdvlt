import { Component } from '@angular/core';
import { Character } from './model/character';
import { Attribute } from './model/attribute';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  firstChar :Character;

  constructor(){
    this.firstChar= new Character();
    this.firstChar.name = "Elsa";
    this.firstChar.description = "Postac Magdy";
    this.firstChar.attributes = new Array<Attribute>();
    this.firstChar.attributes.push(new Attribute("WS",20,10,30))
    this.firstChar.attributes.push(new Attribute("BS",20,10,30))
  }
}
