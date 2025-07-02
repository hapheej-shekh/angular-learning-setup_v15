import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private storage: LocalStorageService) { }

  public isLoggedIn(): boolean {

    // Take cares bith localStorage & sessionStorage
    return this.storage.getUsername()!='' && this.storage.getUsername()!=undefined 
            && this.storage.getUsername()!=null;
  }
}
