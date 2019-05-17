import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {}

  public initUser(): void {
    if (!this.isPresentUser()) {
      const id = this.generateUserId();
      LocalStorageService.setUserId(id);
    }
  }

  private isPresentUser(): boolean {
    return !!LocalStorageService.getUserId();
  }

  private generateUserId(): number {
    return Math.floor(0);
  }

  public getUserId(): number {
    return LocalStorageService.getUserId();
  }

  registerUser(login: string, password: string) {
    const formData = new FormData();
    formData.append('Login', login);
    formData.append('Password', password);
    formData.append('ban_status', String(false));
    this.http.post('http://localhost:8082/user/createUser', formData)
      .subscribe();
  }
}
