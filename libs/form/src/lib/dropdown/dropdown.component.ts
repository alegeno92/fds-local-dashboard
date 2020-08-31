import { Component, forwardRef, InjectionToken, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { StoreInterface } from '@fds/core';

@Component({
  selector: 'fds-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ],
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  _store: StoreInterface<any>;
  item$: Observable<any[]>;
  loading$: Observable<boolean>;
  selectedItem: any;
  disabled: boolean;

  @Input() title = '';
  @Input() key = 'id';
  @Input() text = '';
  @Input() valuePrimitive = false;

  @Input() storeService: InjectionToken<StoreInterface<any>>;


  constructor(private injector: Injector) {
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  ngOnInit(): void {
    this.loadStore();
    this.item$ = this._store.getItems();
    this.loading$ = this._store.getLoading();
  }

  loadStore(){
    this._store = this.injector.get(this.storeService);
    this._store.init();
  }

  registerOnChange(fn: (provider: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.selectedItem = obj;
  }

  selectChange(obj: any){
    this.selectedItem = obj;
    this.onChange(obj);
  }

  setValue(item){
    return this.valuePrimitive ? item[this.key] : item;
  }

}
