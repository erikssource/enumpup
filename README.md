# enumpup
An easy way to create simple string enums in Javascript.

## Install
```javascript
npm install --save enumpup
```

## The Problem
Javascript doesn't really have an enum type and enums can come in handy. When you have a finite set of set values for something, the normal solution is to just make some constants.
```javascript
  export const APPLE = "APPLE",
  export const ORANGE = "ORANGE",
  export const MANGO = "MANGO",
  export const PEAR = "PEAR"
```
That's okay. But when you are used to something like the enum type in Java, it seems pretty crude.

## What Enumpup Does
Enumpup makes it easy to create an object that acts like an enum type.

```javascript
import createEnum from enumpup;

const FruitType = createEnum('APPLE', 'ORANGE', 'MANGO', 'PEAR')

let myFruit = FruitType.APPLE;

let otherFruit = FruitType.MANGO;

```
That's it. The value of each property of FruitType is same as the name. You can't change the value of any property of FruitType, you can't add more properties, and you can't delete any properties. You can pass in as many strings as you like into createEnum as long as that number isn't zero. If you pass in duplicate values, then the duplicates will be discarded. Passing in anything but strings will result in an error.

enumpup isn't a very exciting packge, but it makes for some nice syntax for those finite sets of string constants that come up so often.
