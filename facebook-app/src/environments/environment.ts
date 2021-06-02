// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment :{firebaseConfig: any, production:boolean} = {
  production: false, 
  firebaseConfig : {
    apiKey: "AIzaSyCZsZvfamxc-LJesCaQeLiMn4-d5tSlgm0",
    authDomain: "fb-clone-19920.firebaseapp.com",
    projectId: "fb-clone-19920",
    storageBucket: "fb-clone-19920.appspot.com",
    messagingSenderId: "111514051959",
    appId: "1:111514051959:web:cf2d8004d56efa387dad72"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
