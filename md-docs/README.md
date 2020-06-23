<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents
-   [Objects][1]
    -   [objects][2]
-   [flatten][3]
    -   [Parameters][4]
-   [cleanArray][5]
    -   [Parameters][6]
-   [getFirstFromSingleElementArray][7]
    -   [Parameters][8]
    -   [Examples][9]
-   [getFirstFromSingleElementArrayNotNull][10]
    -   [Parameters][11]
    -   [Examples][12]
-   [getAnyFromArray][13]
    -   [Parameters][14]
-   [getLastFromArrayOrObject][15]
    -   [Parameters][16]
-   [isEmptyOrNull][17]
    -   [Parameters][18]
-   [isNotEmptyOrNull][19]
    -   [Parameters][20]
-   [verifyIfString][21]
    -   [Parameters][22]
-   [isStringNotBlank][23]
    -   [Parameters][24]
-   [truncateString][25]
    -   [Parameters][26]
-   [omitDeepArrayWalk][27]
    -   [Parameters][28]
    -   [Examples][29]
-   [omitDeep][30]
    -   [Parameters][31]
-   [removeDuplicates][32]
    -   [Parameters][33]
-   [resolveObj][34]
    -   [Parameters][35]
-   [concat][36]
    -   [Parameters][37]
-   [flatMap][38]
    -   [Parameters][39]
-   [getFirstElementOfArray][40]
    -   [Parameters][41]
    -   [Examples][42]
-   [getFirstElementOfArray][43]
    -   [Parameters][44]
-   [isNotUndefOrNull][45]
    -   [Parameters][46]

## Objects

Here are some helper functions for objects and arays


### objects

[src/object/index.js:3-3][47]

## flatten

[src/object/index.js:12-13][48]

### Parameters

-   `arrayOfArrays` **[Array][49]** To flat

Returns **[Array][49]** Flatted

## cleanArray

[src/object/index.js:22-22][50]

### Parameters

-   `a` **[Array][49]** Array to remove elements

Returns **[Array][49]** Flatted

## getFirstFromSingleElementArray

[src/object/index.js:34-35][51]

### Parameters

-   `array` **[Array][49]** Array of items (optional, default `[]`)

### Examples

```javascript
// returns 1
const a = [1]
getFirstFromSingleElementArray(a);
```

Returns **[object][52]** Fist element if

## getFirstFromSingleElementArrayNotNull

[src/object/index.js:69-70][53]

### Parameters

-   `array` **[Array][49]** Array of items (optional, default `[]`)

### Examples

```javascript
// returns 1
const a = [1]
getFirstFromSingleElementArray(a);

// returns {}
const b = []
getFirstFromSingleElementArray(b);
```

Returns **[object][52]** Fist element if exists, or an empty object

## getAnyFromArray

[src/object/index.js:43-44][54]

getAnyFromArray returns the first element of array or null

### Parameters

-   `array` **[Array][49]** Input Array (optional, default `[]`)

Returns **[object][52]** the first item or null

## getLastFromArrayOrObject

[src/object/index.js:52-53][55]

Returns the last element of array (or object) or null

### Parameters

-   `array` **([Array][49] \| [object][52])** Input Array or object (optional, default `[]`)

Returns **[object][52]** the first item or null

## isEmptyOrNull

[src/object/index.js:78-78][56]

Verify if an value is empty or null

### Parameters

-   `value` **any** Input

Returns **[boolean][57]** true if value is empty or null, otherwise false

## isNotEmptyOrNull

[src/object/index.js:86-86][58]

Logic negation of [isEmptyOrNull][17]

### Parameters

-   `value` **any** Input value

Returns **[boolean][57]** true if value is not empty or null, otherwise false

## verifyIfString

[src/object/index.js:94-94][59]

Checks if string is type of {String}

### Parameters

-   `value` **[string][60]** Input String

Returns **(any | [boolean][57])** true if it's string type

## isStringNotBlank

[src/object/index.js:102-103][61]

Verify if string is not ''.

### Parameters

-   `value` **[string][60]** input string

Returns **[boolean][57]** true if is String Not Blank

## truncateString

[src/object/index.js:112-113][62]

Truncate an string after max characters and add ... characters at string's end.

### Parameters

-   `string` **[string][60]** The input string.
-   `max` **[number][63]** Max number o characters to truncate. (optional, default `30`)

Returns **[string][60]** truncated String

## omitDeepArrayWalk

[src/object/index.js:132-141][64]

This function removes the field with name key of arr itens.

### Parameters

-   `arr` **([object][52] \| [Array][49])** The input object.
-   `key` **[string][60]** The field key that will be removed.

### Examples

```javascript
import { omitDeepArrayWalk } from '@tecsinapse/es-utils/core/object'
const omitDeepArrayWalkTest = [
     {id:1, vector: 1},
     {id:2, vector: 2},
     {id:3, vector: 3},
];

console.log("omitDeepArrayWalk: " + omitDeepArrayWalk(omitDeepArrayWalkTest, 'vector').map(c=>c.id));
```

Returns **[object][52]** object with key omitted

## omitDeep

[src/object/index.js:150-166][65]

This function removes the field with name key inside the obj object.

### Parameters

-   `obj` **[object][52]** The input object.
-   `key` **[string][60]** The field key that will be removed.

Returns **[object][52]** object

## removeDuplicates

[src/object/index.js:175-178][66]

This function removes the duplicate itens of the field prop inside myArr array.

### Parameters

-   `myArr` **[Array][49]** The input array.
-   `prop` **[string][60]** The field name wich functions will verify oneness, it's not allow to use deep fields.

Returns **[Array][49]** with duplicates removed.

## resolveObj

[src/object/index.js:187-197][67]

Get the item at the path path of the òbj

### Parameters

-   `path` **[string][60]** The field key that will be get.
-   `obj` **any** The input object (optional, default `null`)

Returns **(null | any)** resolved object

## concat

[src/object/index.js:206-206][68]

### Parameters

-   `x` **[Array][49]** first Array
-   `y` **[Array][49]** second Array

Returns **[Array][49]** concatenated

## flatMap

[src/object/index.js:215-215][69]

This functions flats a array using the 'f' function to determine final items of the array.

### Parameters

-   `f` **[Function][70]** The flat function
-   `xs` **[Array][49]** The input array

Returns **any** xs flatten using f function.

## getFirstElementOfArray

[src/object/index.js:232-233][71]

### Parameters

-   `array` **[Array][49]** Array of items (optional, default `[]`)

### Examples

```javascript
// returns 1
const a = [1]
getFirstFromSingleElementArray(a);
```

Returns **[object][52]** Fist element if

## getFirstElementOfArray

[src/object/index.js:232-233][71]

Return the first element of Array pr {}

### Parameters

-   `array` **[Array][49]** Input Array (optional, default `[]`)

Returns **{}** First element

## isNotUndefOrNull

[src/object/index.js:240-240][72]

Verify if undefined or null

### Parameters

-   `value` **any** object or any to validade

Returns **[boolean][57]** Logic Value

[1]: #objects

[2]: #objects-1

[3]: #flatten

[4]: #parameters

[5]: #cleanarray

[6]: #parameters-1

[7]: #getfirstfromsingleelementarray

[8]: #parameters-2

[9]: #examples

[10]: #getfirstfromsingleelementarraynotnull

[11]: #parameters-3

[12]: #examples-1

[13]: #getanyfromarray

[14]: #parameters-4

[15]: #getlastfromarrayorobject

[16]: #parameters-5

[17]: #isemptyornull

[18]: #parameters-6

[19]: #isnotemptyornull

[20]: #parameters-7

[21]: #verifyifstring

[22]: #parameters-8

[23]: #isstringnotblank

[24]: #parameters-9

[25]: #truncatestring

[26]: #parameters-10

[27]: #omitdeeparraywalk

[28]: #parameters-11

[29]: #examples-2

[30]: #omitdeep

[31]: #parameters-12

[32]: #removeduplicates

[33]: #parameters-13

[34]: #resolveobj

[35]: #parameters-14

[36]: #concat

[37]: #parameters-15

[38]: #flatmap

[39]: #parameters-16

[40]: #getfirstelementofarray

[41]: #parameters-17

[42]: #examples-3

[43]: #getfirstelementofarray-1

[44]: #parameters-18

[45]: #isnotundefornull

[46]: #parameters-19

[47]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L3-L3 "Source code on GitHub"

[48]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L12-L13 "Source code on GitHub"

[49]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[50]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L22-L22 "Source code on GitHub"

[51]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L34-L35 "Source code on GitHub"

[52]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[53]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L69-L70 "Source code on GitHub"

[54]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L43-L44 "Source code on GitHub"

[55]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L52-L53 "Source code on GitHub"

[56]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L78-L78 "Source code on GitHub"

[57]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[58]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L86-L86 "Source code on GitHub"

[59]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L94-L94 "Source code on GitHub"

[60]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[61]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L102-L103 "Source code on GitHub"

[62]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L112-L113 "Source code on GitHub"

[63]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[64]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L132-L141 "Source code on GitHub"

[65]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L150-L166 "Source code on GitHub"

[66]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L175-L178 "Source code on GitHub"

[67]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L187-L197 "Source code on GitHub"

[68]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L206-L206 "Source code on GitHub"

[69]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L215-L215 "Source code on GitHub"

[70]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[71]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L232-L233 "Source code on GitHub"

[72]: https://github.com/tecsinapse/es-utils/blob/28a882019127da532024a705fc1dc702adc38cdd/src/object/index.js#L240-L240 "Source code on GitHub"