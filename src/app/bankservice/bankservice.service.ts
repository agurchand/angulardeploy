import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BankService {

    constructor(private http: HttpClient) {}

    getUserbalance(user_id) {
        return this.http.get('https://shrouded-everglades-67304.herokuapp.com/user/balance/'+user_id);
    }

    getUserTransactions(user_id) {        
        return this.http.get('https://shrouded-everglades-67304.herokuapp.com/transaction/user/'+user_id);
    }

    addUserTransaction(transData) {
        return this.http.post('https://shrouded-everglades-67304.herokuapp.com/transaction/add', transData);
    }
    
    updateUserPassword(user_id, data){
        return this.http.patch('https://shrouded-everglades-67304.herokuapp.com/user/updatepass/'+user_id, data);
    }

}