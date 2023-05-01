import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PerComponentService implements OnDestroy {
  private guid!: string;
  private idk = new BehaviorSubject<string>('init');
  constructor() {
    this.guid = uuidv4();
    console.log(`Sample service is created for ${this.guid}`);
    // this.idk.asObservable().subscribe((x) => console.log('val', x));
  }
  tellGuid() {
    console.log(this.guid);
  }

  exposeObservable() {
    return this.idk.asObservable();
  }

  ngOnDestroy() {
    this.idk.complete();
    console.log('destroyed PerComponentService');
  }
}
