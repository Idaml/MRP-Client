import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models/user';
import { LoginInfo } from '../../loginRegistration/shared/loginInfo';
import { RegistrationInfo } from '../../loginRegistration/shared/registrationInfo';
import { RecoveryInfo } from '../../loginRegistration/shared/recoveryInfo';

@Injectable()
export class UsersService {
    private _url: string;
    private emitChangeSource = new BehaviorSubject<User>(null);
    changeEmitted$ = this.emitChangeSource.asObservable();

    constructor(private _http: Http) {
        this._url = SERVER_URL + "api/Accounts";
    }

    emitChange(change: User) {
        this.emitChangeSource.next(change);
    }

    loginSubmit(logInfo: LoginInfo): Observable<any> {
        console.log('login submit');
        let headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options: RequestOptions = new RequestOptions({ headers: headers });
        let body: string = "userName=" + logInfo.Username + "&password=" + logInfo.Password + "&grant_type=password";
        return this._http.post(this._url + "/Token", body, options)
            .map((response: Response) => {
                this.getLoggedUser(logInfo.Username, response.json().access_token).subscribe();
                return response;
            })
            .catch(this._handleError);
    }

    registrationSubmit(regInfo: RegistrationInfo) {
        console.log('registering : ');
        console.log(regInfo);
        return this._http.post(this._url + "/Register", regInfo)
            .map((response: Response) => response)
            .catch(this._handleError);
    }

    recoverySubmit(recInfo: RecoveryInfo) {
        return this._http.post(this._url + "/PasswordRecovery", recInfo)
            .map((response: Response) => response)
            .catch(this._handleError);
    }

    getLoggedUser(username: string = null, token: string = null) {
        let accessToken: string = token || JSON.parse(sessionStorage.getItem('token')).token;
        let un: string = username || JSON.parse(sessionStorage.getItem('token')).username;
        let headers: Headers = new Headers({ 'Authorization': 'Bearer ' + accessToken });
        let options: RequestOptions = new RequestOptions({ headers: headers, });
        return this._http.get(this._url + "/GetUser?username=" + un, options)
            .map((response: Response) => {
                this.emitChange(new User().fromJSON(response.json()));
                return response;
            })
            .catch(this._handleError);
    }

    logout(): void {
        sessionStorage.removeItem('token');
    }

    private _handleError(error: Response) {
        console.error(error);
        let jError = error.json();
        return Observable.throw(jError.message || jError.error_description || jError.error || 'server error');
    }
}