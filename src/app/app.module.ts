import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { GridVotingComponent } from './grid-voting/grid-voting.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { SampleComponent } from './sample/sample.component';
import { InputFormatDirective } from './input-format.directive';
import { RegisterComponent } from './register/register.component';
import { CustomFormsModule } from 'ng2-validation';
import { RegReactiveComponent } from './reg-reactive/reg-reactive.component';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    GridVotingComponent,
    FavoriteComponent,
    PanelComponent,
    SampleComponent,
    InputFormatDirective,
    RegisterComponent,
    RegReactiveComponent,
    ChildComponent,
     
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
