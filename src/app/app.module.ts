import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsTrayComponent } from './components/controls-tray/controls-tray.component';
import { DrawingAreaComponent } from './components/drawing-area/drawing-area.component';
import { GenericFormBuilderComponent } from './components/generic-form-builder/generic-form-builder.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { PropertiesComponent } from './components/properties/properties.component';
@NgModule({
  declarations: [
    AppComponent,
    GenericFormComponent,
    GenericFormBuilderComponent,
    MenuComponent,
    ControlsTrayComponent,
    DrawingAreaComponent,
    PropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
