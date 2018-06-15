import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime, filter, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'sp-search-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="w3-margin-top w3-margin-bottom">
    <label>Search tracks</label>
    <input [formControl]="searchControl" class="w3-input" type="search"/>
  </div>
  `
})
export class SearchBoxComponent implements OnInit, OnChanges, OnDestroy {
  @Input() query: string;
  @Output() onSearch = new EventEmitter<string>();
  searchControl = new FormControl();
  sub: Subscription;

  ngOnInit() {
    this.sub = this.searchControl.valueChanges.pipe(
      filter(value => value && value.length > 2),
      debounceTime(300),
      distinctUntilChanged()
    )
      .subscribe(value => this.onSearch.emit(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchControl.setValue(this.query, { emitEvent: false });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}