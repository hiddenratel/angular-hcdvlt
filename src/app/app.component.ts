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
  jsonstring : string;
  dataInput:string;
  onLoad(){
    // this.jsonstring=this.dataInput;
    this.characters = JSON.parse(this.dataInput);
  }

  constructor(){

    this.characters = JSON.parse('[{"skills":[{"name":"Melee","attrKey":"WS","level":0,"descripion":"Walka wrecz","roll":0},{"name":"Range","attrKey":"BS","level":0,"descripion":"Walka zasiegowa","roll":0},{"name":"Nowy Skill","attrKey":"BS","level":0,"descripion":"Walka zasiegowa","roll":0}],"name":"Elsa","description":"Postac moja","attributes":[{"key":"WS","startingValue":20,"advance":10,"currentValue":30},{"key":"BS","startingValue":20,"advance":10,"currentValue":30},{"key":"S","startingValue":20,"advance":10,"currentValue":30}]},{"skills":[{"name":"Melee","attrKey":"WS","level":0,"descripion":"Walka wrecz","roll":0},{"name":"Range","attrKey":"BS","level":0,"descripion":"Walka zasiegowa","roll":0},{"name":"Nowy Skill","attrKey":"BS","level":0,"descripion":"Walka zasiegowa","roll":0}],"name":"Otto","description":"Postac Lukasza","attributes":[{"key":"WS","startingValue":20,"advance":5,"currentValue":25},{"key":"BS","startingValue":20,"advance":10,"currentValue":30}]},{"skills":[{"name":"Melee","attrKey":"WS","level":0,"descripion":"Walka wrecz","roll":0},{"name":"Range","attrKey":"BS","level":0,"descripion":"Walka zasiegowa","roll":0},{"name":"Nowy Skill","attrKey":"BS","level":0,"descripion":"Walka zasiegowa","roll":0}],"name":"Otto","description":"Postac Lukasza","attributes":[{"key":"WS","startingValue":20,"advance":5,"currentValue":25},{"key":"BS","startingValue":20,"advance":10,"currentValue":30}]}]')
    // let firstChar = new Character();
    // firstChar.name = "Elsa";
    // firstChar.description = "Postac moja";
    // firstChar.attributes = new Array<Attribute>();
    // firstChar.attributes.push(new Attribute("WS",20,10,30))
    // firstChar.attributes.push(new Attribute("BS",20,10,30))
    // firstChar.attributes.push(new Attribute("S",20,10,30))

    // let jakisChar = new Character();
    // jakisChar.name = "Otto";
    // jakisChar.description = "Postac Lukasza";
    // jakisChar.attributes = new Array<Attribute>();
    // jakisChar.attributes.push(new Attribute("WS",20,5,25))
    // jakisChar.attributes.push(new Attribute("BS",20,10,30));
    
    //     let third = new Character();
    // third.name = "Otto";
    // third.description = "Postac Lukasza";
    // third.attributes = new Array<Attribute>();
    // third.attributes.push(new Attribute("WS",20,5,25));
    // third.attributes.push(new Attribute("BS",20,10,30));

    // this.characters = new Array<Character>();
    // this.characters.push(firstChar);
    // this.characters.push(jakisChar);
    // this.characters.push(third);

    this.jsonstring = JSON.stringify(this.characters);
  }
}

