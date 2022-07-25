import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  cardForm!: FormGroup;
  hide = true;
  curType = 'RUB';

  links = ['Local Transactions', 'Uzbekistan to Russia Transactions', 'Russia to Uzbekistan Transactions'];
  activeLink = this.links[0];

  container: any = {};//: A selector or DOM element for the form where users will be entering their information
  card_width!: number;//: default 350px
  messages: any = {validDate: 'valid\ndate', monthYear: 'mm/yyyy'};//: Strings for translation
  placeholders: any = {number: '•••• •••• •••• ••••', name: 'Full Name', expiry: '••/••', cvc: '•••'};//: Placeholders for rendered fields
  masks: any;
  format: boolean = true;
  dbg: boolean = false;//: If true, will log helpful messages for setting up Card

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      cardno: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      expDate: ['', Validators.required],
      cvvNo: ['', Validators.required]
    });

  }

  onSubmit(){
    console.log(this.cardForm.value)
  }
  onClickTransaction() {
    this.router.navigate(['/Transaction']);
  }
  onClickHome() {
    this.router.navigate(['/']);
  }

}
