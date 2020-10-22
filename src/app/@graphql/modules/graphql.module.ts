import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';
import { onError} from 'apollo-link-error';
import { InMemoryCache} from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 imports: [
   HttpClientModule,
   ApolloModule,
   HttpLinkModule
  ]
})
export class GraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink){
    // Capturar los errores de consulta y o de Red //

    const errorLink = onError(({graphQLErrors, networkError}) => {
      if (graphQLErrors){
        console.log('GraphQL Errors', graphQLErrors );
      }
      if (networkError){
        console.log('GraphQL Errors', networkError);
      }
    });
    const uri = 'http://localhost:2004/graphql';
    const link = ApolloLink.from(
      [
        errorLink,
        httpLink.create({uri})
      ]
    );
    apollo.create({
      link,
      cache: new InMemoryCache()
    });
  }
 }

