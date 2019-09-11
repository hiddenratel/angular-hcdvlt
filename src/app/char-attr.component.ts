import { Component, Input } from '@angular/core';
import {Attribute} from './model/attribute';

@Component({
  selector: 'char-attr',
  templateUrl: './char-attr.component.html',
  styleUrls: ['./char-attr.component.css']
})

export class CharAttrComponent{
  @Input()
  attributes: Attribute[];
};