import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from '@progress/kendo-angular-popup';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CovenantsService } from './covenants.service';
import { PopupAnchorDirective } from './popup.anchor-target.directive';

import {DemoMaterialModule} from './material-module';

@NgModule({
    declarations: [
        AppComponent,
        PopupAnchorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        GridModule,
        DropDownListModule,
        DropDownsModule,
        PopupModule,
        InputsModule,
        DemoMaterialModule,
    ],
    providers: [
        CovenantsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
