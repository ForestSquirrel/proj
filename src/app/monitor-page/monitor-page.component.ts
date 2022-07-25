import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-monitor-page',
  templateUrl: './monitor-page.component.html',
  styleUrls: ['./monitor-page.component.css']
})
export class MonitorPageComponent implements AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  onClickTransaction() {
    this.router.navigate(['/Transaction']);
  }
  onClickMonitor() {
    this.router.navigate(['/Monitor']);
  }
  onClickHome() {
    this.router.navigate(['/']);
  }
  displayedColumns: string[] = ['position', 'imageUrl'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  imageUrl: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {imageUrl: '../../assets/rec.jpg', position: 1},
  {imageUrl: '../../assets/rec.jpg', position: 2},
  {imageUrl: '../../assets/rec.jpg', position: 3},
  {imageUrl: '../../assets/rec.jpg', position: 4},
  {imageUrl: '../../assets/rec.jpg', position: 5},
  {imageUrl: '../../assets/rec.jpg', position: 6},
  {imageUrl: '../../assets/rec.jpg', position: 7},
  {imageUrl: '../../assets/rec.jpg', position: 8},
  {imageUrl: '../../assets/rec.jpg', position: 9},
  {imageUrl: '../../assets/rec.jpg', position: 10},
  {imageUrl: '../../assets/rec.jpg', position: 11},
  {imageUrl: '../../assets/rec.jpg', position: 12},
  {imageUrl: '../../assets/rec.jpg', position: 13},
  {imageUrl: '../../assets/rec.jpg', position: 14},
  {imageUrl: '../../assets/rec.jpg', position: 15},
  {imageUrl: '../../assets/rec.jpg', position: 16},
  {imageUrl: '../../assets/rec.jpg', position: 17},
  {imageUrl: '../../assets/rec.jpg', position: 18},
  {imageUrl: '../../assets/rec.jpg', position: 19},
  {imageUrl: '../../assets/rec.jpg', position: 20},
];
