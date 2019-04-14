# HttpFileLoaderGLF

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Build a customer  file uploader based on Google Angular code: https://angular.io/guide/http#httpclient

# Check: Setup Material Framwork
##  Step 1: Install Angular Material, Angular CDK and Angular Animations 
* Run: npm install --save @angular/material @angular/cdk @angular/animations
## Step 2: Configure animations ( in feature module)
* Run: ``` ng g m FileLoad --nospec --routing --dry-run ```
``` 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```

## Step 3: Import the component modules
*Add:
```
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }
```
* Note: ```Whichever approach you use, be sure to import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.```

## Step 4 (required): Include a theme (styles.css)
* Add: ```@import "~@angular/material/prebuilt-themes/indigo-pink.css";```

##  Step 5: Gesture Support 
* Run: ```npm install --save hammerjs```
* After installing, import it on your app's entry point (e.g. src/main.ts). import 'hammerjs';

## Step 6 (Optional): Add Material Icons 
* Add (index.html)
```
link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
# Add FLex Layout
* Run: ```npm install @angular/flex-layout @angular/cdk --save``

# Check Add an in-memory service
* Run: ```ng g s InMemoryData --nospec --dry-run ```
* Run: ```npm install angular-in-memory-web-api --save ```

# Check: Add config service
* Run: ```ng g s config --nospec --dry-run```

# Check: Add config component

# Spread Syntax:
```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

* Example
```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```
* Same as:
```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```
* Example #2
```
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]
```

