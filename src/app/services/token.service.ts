import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  setToken(token: string): void {
    try {
      localStorage.removeItem('token');
    }catch (e) {
      console.log(e);
    }

    localStorage.setItem('token',token);
  }

}
