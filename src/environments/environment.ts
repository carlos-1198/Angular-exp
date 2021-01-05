// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyBvDfBMjY59ntAubM4eSu59qfe21CbxJGo',
    authDomain: 'pear-store-9f505.firebaseapp.com',
    projectId: 'pear-store-9f505',
    storageBucket: 'pear-store-9f505.appspot.com',
    messagingSenderId: '833260201068',
    appId: '1:833260201068:web:7f42bebf2c86467f862449'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
