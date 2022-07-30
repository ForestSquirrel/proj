import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { MainPageComponent } from './main-page/main-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MonitorPageComponent } from './monitor-page/monitor-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardModule } from 'ngx-card/';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { RecDialogContentComponent } from './rec-dialog-content/rec-dialog-content.component';
import { DSDialogContentComponent } from './3ds-dialog-content/3ds-dialog-content.component';






const routes: Routes = [
  {
    path: 'Transaction',
    component: MainDashboardComponent
  },
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'Monitor',
    component: MonitorPageComponent
  }


];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainDashboardComponent,
    MonitorPageComponent,
    RecDialogContentComponent,
    DSDialogContentComponent,
  ],
  imports: [
    CardModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    MatTabsModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,//
    MatDividerModule,
    MatCardModule,
    ClipboardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatMenuModule,
    MatRippleModule,
    //MatAutocompleteModule,
    MatButtonModule,
    //MatCheckboxModule,
    //MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    //MatSliderModule,
    //MatSlideToggleModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }