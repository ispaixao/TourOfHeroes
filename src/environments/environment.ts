// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* CAMINHO COMPLETO DO SERV FOI CONFIG NO ARQUIVO proxy.conf.json
  e adicionado a linha "proxyConfig": "src/proxy.conf.json" no arquivo
  angular.json, linha 77*/
  API: 'https://curso-tour-of-heroes-api.herokuapp.com/api/heroes'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
