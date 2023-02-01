# HotelInventoryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3. First web app built with Angular and learning it's principles.

## Introduction

🌟 creating a component <br>
🌟 rendering view to app (hinv-rooms) ``app.component.html`` <br>
🌟 Interpolation binding: 
```
<div [innerText]="numberOfRooms"></div>
<!-- same as document.getElementBtId('numberBtRooms').innerText = numberOfRooms -->
```
🌟 Property binding:
```
<div [hidden]="hideRooms">
  Number of Rooms:
  <div [innerText]="numberOfRooms"></div>
  <!-- same as document.getElementBtId('numberBtRooms').innerText = numberOfRooms -->
</div>
```
🌟 Event binding
```
<button (click)="toggle()">Toggle</button>
```

⭐ component.ts => holds all properties, values, and methods that are being rendered in that component.html

## Directives

1. Are use to change the behaviour and appearance of DOM element
2. Can implement all lifecycle hooks
3. Contains 'logic'

⭐_the difference between a structural & attribute built in directives_ <br>
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

## Pipes

1. Use for data transformation
2. They don't change the actual object
_use documentation for pipe types_ <br>
**Built-in Pipes**

⭐ Date Pipe: 
```
date (give default date formate)
date: 'short'
```
⭐ Casing Pipes: 
```
| lowercase
| uppercase
| titlecase
```
⭐ Currency: 
```
currency (default @ USD)
currency: 'EUR'
```
⭐ Percent Pipe: 
```
| percent
```
_1 = 100%, so use decimals for anything below 100%_
⭐ NumberPipe: 
```
date (give default date formate)
date: 'short'
```
⭐ Slice Pipe: _Not best for slicing large sets of data, rely using services_
```
<tr [ngClass]="e ? 'even' : 'odd'"
      *ngFor="let room of roomList | slice: 0: 4; let e = even; let o = odd let i = index">
```
_grabs items from idx 0 - 3_
⭐ JSON Pipe: _Not best for production UI, use for developmental purposes only_
```
{{ roomList | json }}
```
_displays a stringfy version of the object roomList_
⭐ Number Pipe: _displays numbers in a specific formate_
```
{{ room.rating | number : '1.0-0'}}
{{ room.rating | number : '1.1-2'}}
{{ room.rating | number : '1.0-0' : 'en-us' }}
```
``min digit - max digit to display : locale (displays placement of points and commas dependent on part of world)``

## Lifecycle and Component Communication

1. Component Commnication: where two or more componens needs to interact
2. Lifecycle will end the component is destroyed

⭐``ngOnInit``
_A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated._
_dummy form: ngOnInit is used in Angular to perform component initialization, particularly to run logic when the component is created. It's a lifecycle hook called by Angular immediately after constructing a component._
_In simple terms, the initial state in React serves a similar purpose as ngOnInit in Angular. Both are used to perform initial setup work when a component is created. The initial state in React is an object that represents the initial values of the component's state, which can be set in the constructor or when the component is created. In Angular, ngOnInit is a lifecycle hook that is called after a component is constructed, and it can be used to perform any necessary setup work for the component._
```
class _________ implement OnInit {

  ngOnInit() {
    /*
    inital data
    */
  }

}
```
⭐``@Input`` Component Comunication (parent to child)
_allows giving 'attribute(s)' to a component when using it through component.html_
```
@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})

export class RoomsListComponent implements OnInit {
  /* 'rooms' will become an attribute of hinv-rooms-list */
  @Input() rooms: RoomList[] = [];

<hinv-rooms-list [rooms]="roomList"></hinv-rooms-list>
```
_``@Input`` in Angular is a decorator used to bind a property of a child component to a value passed from a parent component. It allows the parent component to pass data and values to the child component, making the child component more reusable and flexible._

⭐``@Output`` Component Comunication (child to parent)
_ A decorator that lets the child component communicates with the parent component_ <br>
_@Output in Angular is a decorator that allows a component to share data with its parent component. It enables a child component to emit an event that can be listened for by its parent component, effectively sending data from the child to the parent. This allows for communication between components and is used for passing data from a child component to its parent component. The @Output decorator is applied to a property in the child component class and is associated with an event that can be listened for in the parent component._ <br>
CHILD.COMPONENT.HTML
```
<button class="btn btn-primary" (click)="selectRoom(room)">Select</button>
```
CHILD CLASS
```
 /* What kind of data we need to send to the parent - event */
@Output() selectedRoom = new EventEmitter<RoomList>();
   
selectRoom(room: RoomList) {
//gives data back to parent
    this.selectedRoom.emit(room);
}
```
PARENT.COMPONENT.HTML
```
<hinv-rooms-list [rooms]="roomList" (selectedRoom)="selectRoom($event)"></hinv-rooms-list>
```
PARENT CLASS
```
selectedRoom!: RoomList;

selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
```
⭐``ChangeDetectionStrategy.OnPush``
_In simple terms, ChangeDetectionStrategy.OnPush in Angular is used to optimize component performance by limiting the amount of component re-rendering. By default, Angular performs change detection on all components every time there is a change in any component, causing it to re-render all affected components. ChangeDetectionStrategy.OnPush optimizes this process by only triggering change detection in a component when its input properties change, rather than every time there is a change in any component. This can lead to improved performance in complex applications with many components, as it reduces the number of unnecessary component re-renders._
_keep in mind of immunability! Do not modify! Create another instance (via spread)_
_You can achieve not modifying any data internally in the component by using ``@Input`` && ``@Output``_
<br>
⭐``ngOnChange``
_needed imports_
```
export class RoomsListComponent implements OnInit, OnChanges {
//an @Input and the values recieve a new instance or value of it

*use cases => modify properties

ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
```
⭐``DoCheck`` && ``ngDoCheck``
``export class RoomsComponent implements OnInit, DoCheck {``
``ngDoCheck() {}``
- ``ngDoCheck`` will listen throughout the application every time an event occurs
- Using these lifecycles are costly!!
- Do not implement ``ngDoCheck`` && ``DoCheck`` on the same component!
- Use ``DoCheck`` for the entire application
- Use ``ngDoCheck`` for input values of a component <br>

⭐``@ViewChild`` && ``ngAfterViewInit()`` && ``ngAfterViewChecked()``
```
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked

@ViewChild(HeaderComponent, { static: true })
headerComponent!: HeaderComponent;

ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
  }

ngAfterViewChecked(): void {}
```
_``@ViewChild`` in Angular is a decorator that allows a component to access a child component, directive, or DOM element. It is used to obtain a reference to a child component or DOM element within the template of a component. By using the ``@ViewChild`` decorator, a component can access the properties and methods of the child component or DOM element, enabling communication between the parent and child components. It can be used to implement parent-child communication, such as passing data from parent to child or calling methods on the child component. The ``@ViewChild`` decorator can be applied to a property in the component's class and is initialized in the component's ngAfterViewInit lifecycle hook._ <br>
_ngAfterViewInit in Angular is a lifecycle hook that is called after Angular has finished initializing a component's view and child views. It is called once the component's view and child views have been fully created and initialized, and any child components have been initialized. The ngAfterViewInit method is a good place to perform any additional setup work that is required for the component, such as accessing child components using the ``@ViewChild`` decorator, or making API calls based on the component's state or input properties. The ngAfterViewInit hook is called after the component's constructor, ngOnInit and the component's view and child views have been fully created and initialized._ <br>
- Depending of the component is async => you may want to use the ``static`` property to see the view. <br>

⭐``@ViewChild`` to render a component

1. Create a template reference: ``<ng-template #refName></ng-template>`` to ``COMPONENT_NAME.component.html``
2. At component.ts => create a view child targeting the refName: ``@ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;``
3. Use class implements ``AfterViewInit`` & make ``ngAfterViewInit(){}`` method

```
ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    //componentRef.instance.numberOfRooms = 50;
  }
```

⭐``@ViewChild`` to render a HTML Element

1. Create a template reference: ``<div #name></div>`` to ``COMPONENT_NAME.component.html``
2. Insure class implements OnInit
3. At component.ts => create a view child targeting the refName: ``@ViewChild('name', { static: true }) name!: ElementRef;``
```
/* static: true => this div is not async */
@ViewChild('name', { static: true }) name!: ElementRef;

ngOnInit() {
    this.name.nativeElement.innerText = 'Seven Seasons';
  }
```

⭐``@ViewChildren`` 
- Everytime you have multiple  custom "angular html elements" it will only render just one when using ``@ViewChild``
```
@ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    /*this.headerChildrenComponent  use cases displaying records of multiple children=> */
  }
```

⭐``ng-content`` && ``@ContentChild`` && ``ngAfterContentInit``
```
``@Component.html``
<!-- defines sequence of components should render -->
<ng-content select="hinv-employee"></ng-content>
<ng-content></ng-content> <!-- content should be provided by Parent -->
<ng-content select="hinv-rooms"></ng-content>

``@Component.ts``
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

ngAfterContentInit(): void {
    this.employee.empName = 'Ric Thicc';
  }

}
```
_Yes, in most cases you would use ``@ContentChild`` in Angular when you want to access or interact with content that is projected into a component using the ng-content directive. The ``@ContentChild`` decorator provides a way for the component to access the projected content and access its properties, methods, and state. Without the ``@ContentChild`` decorator, a component would not be able to access the projected content. However, it is important to note that ``@ContentChild`` is not required for every use case that involves projected content. There may be scenarios where you don't need to access the projected content from the component, in which case you wouldn't need to use ``@ContentChild``._ <br>
- prefer to use input/output but view is ok as well
- ngAfterContentInit is a rare use
- When you put the component.html in another component.html, it will always render in that order.

⭐``OnDestroy`` && ``ngOnDestroy()``

- useCases: destroying data after consuming (subscpritions), localstorage <br>

## Dependency Injection
