import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RecDialogContentComponent } from '../rec-dialog-content/rec-dialog-content.component';
import { DialogData } from '../interfaces/dialog-interface';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  cardForm!: FormGroup;
  hide = true;
  curType = 'RUB';
  sum = 0;
  NoSpinner = true;
  name = 'CARDHOLDER NAME';
  cardno = '';

  TransactionData : DialogData = {cardno:'XXXXX', 
  firstName: 'XXXXXX',
  lastName: 'XXXXXXX',
  expDate: 'XXXXXXX',
  sumRUB: 1111,
  sumUZS: 11111,
  cvvNo: 'XXXXXX',
  rName: 'XXXXXXX',
  date: 'XXXXXX'
};


  links = ['Local Transactions', 'Uzbekistan to Russia Transactions', 'Russia to Uzbekistan Transactions'];
  activeLink = this.links[0];

  container: any = {};//: A selector or DOM element for the form where users will be entering their information
  card_width!: number;//: default 350px
  messages: any = { validDate: 'valid\ndate', monthYear: 'mm/yyyy' };//: Strings for translation
  placeholders: any = { number: '•••• •••• •••• ••••', name: 'Full Name', expiry: '••/••', cvc: '•••' };//: Placeholders for rendered fields
  masks: any;
  format: boolean = true;
  dbg: boolean = false;//: If true, will log helpful messages for setting up Card

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder, private http: HttpClient, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      cardno: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      expDate: ['', Validators.required],
      cvvNo: ['', Validators.required]
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RecDialogContentComponent, {
      data: this.TransactionData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onSubmit() {
    this.TransactionData.cardno = this.cardForm.value.cardno;
    this.TransactionData.firstName = this.cardForm.value.firstName;
    this.TransactionData.lastName = this.cardForm.value.lastName;
    this.TransactionData.expDate = this.cardForm.value.expDate;
    this.TransactionData.cvvNo = "***";
    console.log(this.cardForm.value);
  }
  onClickTransaction() {
    this.router.navigate(['/Transaction']);
  }
  onClickMonitor() {
    this.router.navigate(['/Monitor']);
  }
  onClickHome() {
    this.router.navigate(['/']);
  }
  async onSend() {
    this.TransactionData.sumRUB = this.sum;
    this.TransactionData.sumUZS = this.sum*128;
    this.TransactionData.rName = this.name;
    this.TransactionData.date = Date.now().toString();
    console.log(this.TransactionData);
    this.NoSpinner = !this.NoSpinner;
    await delay(2000);
    this.NoSpinner = !this.NoSpinner;
    this.openDialog();
  }
  onCNChange() {
    if (this.cardno.length != 0) {
      var rand = Math.floor(Math.random() * 11);
      switch (rand) {
        case 0:
          this.name = "Lishan Taliesin"; break;
        case 1:
          this.name = "Micha Talat"; break;
        case 2:
          this.name = "Barabal Keren-Happuch"; break;
        case 3:
          this.name = "Omolara Nika"; break;
        case 4:
          this.name = "Iedida Fikriye"; break;
        case 5:
          this.name = "Chimwala Liwen"; break;
        case 6:
          this.name = "Thomas Taymuraz"; break;
        case 7:
          this.name = "Dmytro Derbáil"; break;
        case 8:
          this.name = "Ankita Sitaram"; break;
        case 9:
          this.name = "Orla Aina"; break;
        case 10:
          this.name = "Fester Herman"; break;
        default:
          this.name = "Sunday Jaya"; break;
      }
    } else {
      this.name = "CARDHOLDER NAME";
    }
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
