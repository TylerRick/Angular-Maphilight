# ng-maphilight

An Angular 8 component that adds highlights to image maps.

[![alt text](https://cdn-images-1.medium.com/max/800/1*NyFdxMXz9E2iDdinzMh-LQ.png "Example 2 in the docs")](https://tylerrick.github.io/ng-maphilight/)

## Usage

Install the package via npm or yarn:
```
npm i ng-maphilight --save
yarn add ng-maphilight
```

Import jQuery and maphilight plugin into the `<head></head>` of the index.html file:

```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://unpkg.com/jquery@3.4.1/dist/jquery.js"></script>
  <!-- or however you want to include -->

  <script src="https://rawcdn.githack.com/kemayo/maphilight/7932449fbc49c7767fbd72a807110c632c11ee95/jquery.maphilight.js"></script>
```

In your module:
```js
import { MaphilightModule } from 'ng-maphilight'
```
and add `MaphilightModule` to the `imports` array.

In your component class, define a `config` property:
```js
  config = {
    fade: true,
    alwaysOn: false,
    neverOn: false,

    // fill
    fill: true,
    fillColor: '#ffffff',
    fillOpacity: 0.4,

    // stroke
    stroke: true,
    strokeColor: '#4d0ec0',
    strokeOpacity: 1,
    strokeWidth: 1,

    // shadow:
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10
  }
```

In your template, wrap an `<img>` and `<map>` element with a `<maphilight>` element:
```html
      <maphilight
        id="statesMap"
        [config]="config"
      >
        <img src="assets/states_imgmap.gif">
        <map>
          <area shape="poly" ...>
        </map>
      </maphilight>
```


## Examples and Documentation:
- [Website and Docs](http://tylerrick.github.io/ng-maphilight/)
- [Example: Map of United States](http://tylerrick.github.io/ng-maphilight/#/Example2)

## Dependencies
- jQuery (only tested with 3 so far)
- [David Lynch](https://github.com/kemayo)'s [Maphilight](https://github.com/kemayo/maphilight) jQuery plugin

Both are currently assumed/required to be available in the global namespace (`window.jQuery`) but a
pull request that makes it use `import` and npm packages would be gladly accepted if you can get
that to work.

## Development

Uses the [Angular CLI](https://github.com/angular/angular-cli). See [README.ng.md](README.ng.md) for more information.

