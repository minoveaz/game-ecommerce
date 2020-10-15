import { Injectable } from '@angular/core';
import { ApiService } from '../../@graphql/services/api.service';
import { LOGIN_QUERY, ME_DATA_QUERY } from '../../@graphql/operations/query/user';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/internal/operators/map';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{

  constructor( apollo: Apollo) {
    super(apollo);
   }
    // añadir los metodos para consumir la info de la API //
    login(email: string, password: string){
      return this.get(LOGIN_QUERY, {email, password}).pipe(
        map((result: any) => {
          return result.login;
        })
      );
    }

    getMe(){
      return this.get(ME_DATA_QUERY, {
        include: true
      },
      {
        headers: new HttpHeaders ({
          Autorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmNzM3ZjE2MTQ3YTY2MTgwYzhjYmEwYiIsIm5hbWUiOiJTYXJhIiwibGFzdE5hbWUiOiJWZWdhIERpYXoiLCJlbWFpbCI6InNhcmFAaG90bWFpbC5jb20iLCJyb2xlIjoiQ0xJRU5UIiwiaWQiOjF9LCJpYXQiOjE2MDI3NjQwNDQsImV4cCI6MTYwMjg1MDQ0NH0.cQ1Vie_fO3nKcOmnMSqrc7VkIiLBifhFRwT89dO6PBk'
        })
      }).pipe(map((result: any) => {
        return result.me;
      }));
    }
}
