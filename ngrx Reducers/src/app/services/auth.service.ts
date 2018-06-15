import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private CLIENT_ID = '8aa495d9c8c24042b11fa8a561330200';
  private token: string | null = null;
  private expirationDate: Date;

  isAuthenticated(): boolean {
    this.getAccessToken();
    return !!this.token && this.expirationDate > new Date();
  }

  getAccessToken(): string {
    if (this.token) {
      return this.token;
    } 

    //get from hash
    let arr = /access_token=([^&]*).*expires_in=([^&]*)/.exec(window.location.hash)
    if (arr) {
      this.token = arr[1];

      let expirationDate = new Date();
      expirationDate.setSeconds(expirationDate.getSeconds() + parseInt(arr[2]));
      this.expirationDate = expirationDate;

      return this.token;
    } 
    
    //go to login screen
    else {
      this.redirectToLogin();
      return null;
    }
  }

  invalidateAccessToken() {
    this.token = null;
  }

  redirectToLogin() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${this.CLIENT_ID}&redirect_uri=${window.location.protocol}%2F%2F${window.location.host}&response_type=token`;
  }

}