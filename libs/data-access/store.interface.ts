import { Observable } from 'rxjs';

export interface StoreInterface<T>{

  init(): void;

  getItems(): Observable<T[]>;

  getLoading(): Observable<boolean>;
}
