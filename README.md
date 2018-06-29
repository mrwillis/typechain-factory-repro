## Reproduction
Using tsc version 2.9.2
Ganache CLI v6.1.3 (ganache-core: 2.1.2)
Node v10.5.0
npm 6.1.0

Run `npm install` and then `npm run test` and run ganache with `ganache-cli -p 9545`. You need typescript installed on your machine but everything else is local. 


To fix it, change the `dummy` member in `Dummy.sol` to private and there is no issue. 
Change it to public and there is an issue.
Change it to internal and there is no issue. 






