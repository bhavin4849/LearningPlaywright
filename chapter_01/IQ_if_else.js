if ("hello") console.log("This will always print because strings are truthy in JavaScript.");
if (42) console.log("This will also always print because non-zero numbers are truthy.");
if ({}) console.log("This will always print because objects are truthy.");
if ([]) console.log("This will always print because arrays are also objects and thus truthy.");
if (0) console.log("This will never print because 0 is falsy.");
if (null) console.log("This will never print because null is falsy.");
if (undefined) console.log("This will never print because undefined is falsy.");
if (false) console.log("This will never print because false is falsy.");
