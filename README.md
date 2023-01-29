# HotelInventoryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3. First web app built with Angular and learning it's principles.

## Directives

1. Are use to change the behaviour and appearance of DOM element
2. Can implement all lifecycle hooks
3. Contains 'logic'

⭐_the difference between a structural & attribute built in directives_
⭐``*ngIf`` -  a HTML attribute: If Statement for a HTML Element to be displayed
```
<div *ngIf="rooms?.availableRooms != undefined && rooms.availableRooms > 0">
  Rooms List:
</div>
```
⭐``*ngFor`` - a HTML attribute: loops items such as objects to be displayed at the component.html <br>
⭐``*ngFor`` also highlights each even and odd object and its index <br>
```
<tr *ngFor="let room of roomList; let e = even; let o = odd let i = index">
      <!-- loops each object -->
      <td>{{ i }}</td>
      <td>{{e ? "Even" : "Odd"}}</td>
      <td>{{ room.roomNumber }}</td>
      <td>{{ room.roomType }}</td>
      <td>{{ room.price }}</td>
      <td>{{ room.amenities }}</td>
      <td>{{ room.checkinTime }}</td>
    </tr>
  </table>
```
⭐``ngSwitch`` - similar to switch cases: between the component.ts and the html => renders different views depending on the value of the component.ts
_component.ts_
```export class AppComponent {
  title = 'hotelInventoryApp';
  role = 'Admin';
}
```
_component.html_
```
<div [ngSwitch]="role">
  <div *ngSwitchCase="'User'">
    Welcome User!
  </div>
  <div *ngSwitchCase="'Admin'">
    <hinv-rooms></hinv-rooms>
  </div>
  <div *ngSwitchDefault>
    You are not authorized!
  </div>
</div>
```
⭐``ngClass`` - assigns classes to a HTML element
```
<tr [ngClass]="e ? 'even' : 'odd'" *ngFor="let room of roomList; let e = even; let o = odd let i = index">
```
_component.css_
```
.even {
  background-color: steelblue;
  color: white;
}

.odd {
  background-color: tomato;
  color: white;
}
```
⭐``ngStyle`` - assigns inline styles to a HTML element 
```
<div [ngStyle]="{'color': rooms.availableRooms ? 'blue' : 'red'}" [innerText]="numberOfRooms"></div>
```
