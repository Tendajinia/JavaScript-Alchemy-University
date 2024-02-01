const { faker } = require("@faker-js/faker");
const name = faker.person.fullName();
const message = `Hello, ${name}!`;
console.log(message);

/*
Terminal Commands
PS C:\Users\netwk\Desktop\alchemy\Networks\NPM>
PS C:\Users\netwk\Desktop\alchemy\Networks\NPM> mkdir newProject


    Directory: C:\Users\netwk\Desktop\alchemy\Networks\NPM


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         29/1/2024     23:40                newProject


PS C:\Users\netwk\Desktop\alchemy\Networks\NPM> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (npm) npm i @faker-js/faker@8.3.1
Sorry, name can only contain URL-friendly characters.
package name: (npm)
version: (1.0.0)                                                                     
description:                                                                         
entry point: (npm.js)                                                                
test command:                                                                        
git repository:                                                                      
keywords:                                                                            
author:                                                                              
license: (ISC)                                                                       
About to write to C:\Users\netwk\Desktop\alchemy\Networks\NPM\package.json:

{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "npm.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
PS C:\Users\netwk\Desktop\alchemy\Networks\NPM> npm i @faker-js/faker@8.3.1

added 1 package, and audited 2 packages in 25s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\netwk\Desktop\alchemy\Networks\NPM>
PS C:\Users\netwk\Desktop\alchemy\Networks\NPM> npm fund
npm@1.0.0
└── https://opencollective.com/fakerjs
    └── @faker-js/faker@8.3.1

PS C:\Users\netwk\Desktop\alchemy\Networks\NPM> node index
Hello, Dr. Colin Shields!
PS C:\Users\netwk\Desktop\alchemy\Networks\NPM> node index
Hello, Terry Sipes!
PS C:\Users\netwk\Desktop\alchemy\Networks\NPM>

Semantic Versioning
The versioning system NPM uses is called semantic versioning.

Each number separated by the . signifies a different part of the version. For example, 1.1.5 can be broken down into the following:

1       .        1       .         5
^ Major Version  ^ Minor Version   ^ Patch Version
Major Version upgrades traditionally can include breaking changes, meaning they may not function in a backwards compatible way. After upgrading a package's major version, you should always test to see that it's working properly!

If you don't care about the major version of the package you can simply write * or x in your package.json dependencies version section.

 This is not recommended for any production-grade application! Allowing major changes to the library in a production environment without testing first is recipe for disaster. 

Minor Version upgrades are generally backwards compatible. They may include some new features but will usually not include any breaking changes.

If you want to allow minor version upgrades in your package you can write 1.x or ^1.0.0 in your package.json.

Patch Version upgrades are generally reserved for bug fixes. They should not break any existing functionality unless you were relying on unexpected behavior!

If you want to allow patch version upgrades you can write 1.0.x or ~1.0.0 in your package.json.
*/