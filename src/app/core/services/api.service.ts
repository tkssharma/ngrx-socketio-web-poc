import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { AuthService } from '../../auth/auth.service'
import { throwError as ObservableThrowError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { ENV } from '../env.config'

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  private get _authHeader(): string {
    return `Bearer ${this.auth.accessToken}`
  }

  testAPIs$(): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}testAuth0`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader),
      })
      .pipe(catchError((error) => this._handleError(error)))
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.'
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login()
    }
    return ObservableThrowError(errorMsg)
  }
}
