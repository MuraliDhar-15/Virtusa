import { Component } from '@angular/core';

interface Delivery {
  productName: string;
  priority: string;
  address: string;
  status: string;
  customerName?: string;
  signature?: string;
}
@Component({
  selector: 'app-delivery-agent',
  templateUrl: './delivery-agent.component.html',
  styleUrls: ['./delivery-agent.component.css']
})
export class DeliveryAgentComponent {
  deliveryList: Delivery[] = [
    { productName: 'Product A', priority: 'High', address: '123 Main St', status: 'Pending' },
    { productName: 'Product B', priority: 'Medium', address: '456 Elm St', status: 'Pending' }
  ];
  deliveryHistory: Delivery[] = [
    { productName: 'Product C', priority: 'Low', address: '789 Oak St', status: 'Delivered', customerName: 'John Doe', signature: 'John Doe Signature' }
  ];
  addToDeliveryList(product: Delivery) {
    this.deliveryList.push(product);
  }
  removeFromDeliveryList(product: Delivery) {
    this.deliveryList = this.deliveryList.filter(p => p !== product);
  }
  updateDeliveryStatus(product: Delivery, newStatus: string) {
    product.status = newStatus;
  }
  captureCustomerDetails(product: Delivery, customerName: string, signature: string) {
    product.customerName = customerName;
    product.signature = signature;
    product.status = 'Delivered';
  }
  updateMissedDeliveryStatus(product: Delivery) {
    product.status = 'Missed Delivery';
  }
  updateReturnDeliveryStatus(product: Delivery) {
    product.status = 'Returned';
  }
}