import { Component, Inject } from '@angular/core'
import { APP_STORE } from "./constants/constants";
import { Store, Unsubscribe } from "redux";
import { StoreShape } from "./reducers/store";
import { setCurrentFilter } from "./actions/store";
import { Filter } from "./models/filter";

@Component({
  selector: 'filter-list',
  template:
  `<p>Show: 
      <a *ngFor="let filter of filters" href="#"
         (click)="applyFilter(filter)"
         [ngClass]="{'active': filter.active, 'inactive': !filter.active}">
         {{filter.display}}
      </a>
    </p>`
  ,
  styles: [`
    .active { text-decoration: default; }
    .inactive {  text-decoration: none; }
  `]
})
export class FilterListComponent { 
  unsubscribe: Unsubscribe;

  filters: Filter[] = [{display: 'All', value: 'SHOW_ALL', active: false}, {display: 'Active', value: 'SHOW_ACTIVE', active: false}, {display: 'Completed', value: 'SHOW_COMPLETED', active: false}];

  constructor( @Inject(APP_STORE) private store: Store<StoreShape>) { 
    //subscribe
    this.unsubscribe = this.store.subscribe(() => 
      this.activateFilter(this.store.getState().currentFilter));
  }
  
  private ngOnInit(){
    //set initial state
    this.activateFilter('SHOW_ALL');
    
  }
  
  private ngOnDestroy(){
    //remove change listener
    this.unsubscribe();
  }
  
  // Helper methods
  private applyFilter(filter: Filter) {
    this.store.dispatch(setCurrentFilter(filter.value));
  }
  
  private activateFilter(selectedFilter: string){
    this.filters.forEach(filter => filter.active = filter.value === selectedFilter);
  }
}