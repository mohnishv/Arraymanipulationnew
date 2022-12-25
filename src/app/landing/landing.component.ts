import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  dropselect: any;
  cacheForecasts: any;
  searchText: any;
  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this._api.getTypeRequest('users').subscribe((res: any) => {
      console.log(res);
      this.dropselect = res;
    });
    this._api.getTypeRequest('users').subscribe((res: any) => {
      console.log(res);
      this.cacheForecasts = res;
    });
  }

  filterForeCasts(filterVal: any) {
    filterVal = filterVal.target.value;
    const departmentList = this.cacheForecasts.filter(
      this.dropselect.name == 'filterVal'
    );
    console.log(departmentList);
  }
}
