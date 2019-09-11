import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MediaItemComponent} from './media-item.component';
import { CharViewComponent} from './char-view.component';
import { CharAttrComponent} from './char-attr.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MediaItemComponent, CharViewComponent, CharAttrComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
