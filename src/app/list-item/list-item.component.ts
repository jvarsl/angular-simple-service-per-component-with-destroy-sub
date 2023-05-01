import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../Product';
import { PerComponentService } from '../per-component.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  providers: [PerComponentService],
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input() product!: Product;

  constructor(private perComponentService: PerComponentService) {
    this.perComponentService.exposeObservable().subscribe(console.log);
  }

  ngOnInit(): void {
    this.perComponentService.tellGuid();
  }

  tellGuid() {
    this.perComponentService.tellGuid();
  }

  ngOnDestroy() {
    console.log('destroyed ListItemComponent');
  }
}
