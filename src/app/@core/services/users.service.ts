import { Injectable } from '@angular/core';
import { ApiService } from '../../@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { USER_LIST_QUERY } from 'src/app/@graphql/operations/query/user';
import { map } from 'rxjs/internal/operators/map';
import { IRegisterForm } from '@core/interfaces/register.interface';
import { REGISTER_USER } from '@graphql/operations/mutation/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
   }
  getUsers(){
    return this.get(USER_LIST_QUERY, {
          include: true
        }).pipe(map((result: any) => {
        return result.user;
      }));
  }
  register(user: IRegisterForm){
    return this.set(REGISTER_USER,
      {
        user,
        include: false
      }).pipe(
      map((result: any) => {
        return result.register;
      })
    );
  }
}
