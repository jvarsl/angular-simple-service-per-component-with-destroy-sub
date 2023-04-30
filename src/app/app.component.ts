import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 'd9a68ef7-4163-4d8b-8070-fba42f84ec31',
      name: 'Dotnet',
      publisher: 'Microsoft',
      cost: 'Free',
    },
    {
      id: 'ea37e7d4-62a2-4bd3-86a2-65b8c10e2294',
      name: 'SQL Server',
      publisher: 'Microsoft',
      cost: 'Free',
    },
    {
      id: '7fa65009-33c3-4d81-b719-bb537c5e1b5a',
      name: 'Kubernetes',
      publisher: 'Google',
      cost: 'Free',
    },
  ];
  title = 'service-per-component';

  public deleteProducts() {
    this.products = [];
  }
}
