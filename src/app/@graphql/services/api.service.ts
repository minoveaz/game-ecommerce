import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LOGIN_QUERY } from '../operations/query/user';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  // añadir los metos para consumir la info de la API //
  login(email: string, password: string){
    return this.apollo.watchQuery({
      query: LOGIN_QUERY,
      variables: {
        email,
        password
      }
    }).valueChanges.pipe(map ((result) => {
      return result.data;
    }));
  }
  getUsers(){}
  getMe(){}
  register(){}
}

