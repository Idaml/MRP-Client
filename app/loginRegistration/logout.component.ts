import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'mrp-logout',
    template: require('./logout.component.html')
})
export class LogoutComponent{
    mssg:string;

    constructor(private _route:ActivatedRoute){
        let userId = +this._route.snapshot.params['id'];
        if(userId === 0)
            this.mssg = "you have logged out successfully";
        else
            this.mssg = "we're sorry, for some reason we've lost your login credentials, please renew them by logging in."
    }
}