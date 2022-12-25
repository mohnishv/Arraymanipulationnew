import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { combineLatest, forkJoin, map } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  prediction: any;
  Photos: any;
  postdata: any;
  album: any;
  result: any[] = [];
  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    combineLatest({
      users: this._api.getUsers(),
      contacts: this._api.getContacts(),
      addresses: this._api.getAddresses(),
    })
      .pipe(
        map((response) => {
          const users = <Array<any>>response.users;
          const contacts = <Array<any>>response.contacts;
          const addresses = <Array<any>>response.addresses;
          const result: any[] = [];
          users.map((user: any) => {
            result.push({
              ...users.find((user1: any) => user1.userId === user.userId),
              ...users.find((user1: any) => user1.id === user.id),
              ...users.find((user1: any) => user1.title === user.title),
              ...contacts.find(
                (contact: any) => contact.userId === user.userId
              ),
              ...contacts.find((contact: any) => contact.id === user.id),
              ...contacts.find((contact: any) => contact.title === user.title),
              ...addresses.find((address: any) => address.id === address.id),
            });
          });

          console.log('result ', result);
          return result;
        })
      )
      .subscribe((data) => {
        console.log(data);
        // this.users = data;
      });
    this._api.getTypeRequest('photos').subscribe((res: any) => {
      this.prediction = res;
      console.log(this.prediction);
    });
  }

  // this._api.getTypeRequest('posts').subscribe((res: any) => {
  //   this.postdata = res;
  //   console.log(this.postdata);
  // });
  // this._api.getTypeRequest('albums').subscribe((res: any) => {
  //   this.album = res;
  //   console.log(this.album);
  // });
}
