import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LOGIN_QUERY, ME_DATA_QUERY, USER_LIST_QUERY } from '../operations/query/user';
import { map } from 'rxjs/internal/operators/map';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }
  protected get(query: DocumentNode, variables: object = {}, context: object = {}){
    return this.apollo.watchQuery({
      query,
      variables,
      context,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map ((result) => {
      return result.data;
    }));
  }

  register(){}
}

