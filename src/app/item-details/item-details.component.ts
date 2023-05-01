import { Component, Input, OnInit } from '@angular/core';
import { PerComponentService } from '../per-component.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() name!: string;
  @Input() publisher!: string;

  constructor(private perComponentService: PerComponentService) {
    this.perComponentService.exposeObservable().subscribe(console.log);
  }

  ngOnInit(): void {}

  tellGuid() {
    this.perComponentService.tellGuid();
  }
}
