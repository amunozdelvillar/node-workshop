Challenge Two: CommonJS Modules

Create two new CommonJS modules in a project directory. One module should expose an instantiable object called "Person". Your constructor should accept a JavaScript object literal, which will have properties to assign to the Person. Every person should have a property knowsKungFu set to false. The constructor should be able to override this. To accomplish this, install underscore from npm and use it's _.extend function in your constructor.

Your second custom module will be a custom logger, which will have an info logging function. This function should print out the current date and time, as well as the given log message.