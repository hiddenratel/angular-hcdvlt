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
  characters: Array<Character>;
  // firstChar :Character;

  constructor(){
    let firstChar = new Character();
    firstChar.name = "Elsa";
    firstChar.description = "Postac Magdy";
    firstChar.attributes = new Array<Attribute>();
    firstChar.attributes.push(new Attribute("WS",20,10,30))
    firstChar.attributes.push(new Attribute("BS",20,10,30))

    let jakisChar = new Character();
    jakisChar.name = "Otto";
    jakisChar.description = "Postac Lukasza";
    jakisChar.attributes = new Array<Attribute>();
    jakisChar.attributes.push(new Attribute("WS",20,5,25))
    jakisChar.attributes.push(new Attribute("BS",20,10,30));
    
        let third = new Character();
    third.name = "Otto";
    third.description = "Postac Lukasza";
    third.attributes = new Array<Attribute>();
    third.attributes.push(new Attribute("WS",20,5,25));
    third.attributes.push(new Attribute("BS",20,10,30));

    this.characters = new Array<Character>();
    this.characters.push(firstChar);
    this.characters.push(jakisChar);
    this.characters.push(third);
  }
}

