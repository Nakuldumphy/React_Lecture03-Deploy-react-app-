// *********** Bundler ******** //not part of react 
// hmm first.js, index.html ko sever pe daal tho skte hai :: but abhi ye production ready code nhi hai
// due to various comments and spaces , it is not optimized code
// ek kaam kro react ka sara code, html file ke andrr daal do // but this will inc. size of our file
// jitna jaruri hai utna hi code daalu html me
// tho mei code ko production ready kaise kru (optimized code, comments and spaces ko hata do,kuch code aisa hoga jo mei use nhi krr raha , react and reactDOM me kuch portion use hi na hua ho)
// therefore hmme file ka size reduce krna hai :: for this we use BUNDLER
// Bundler : pure code(JS,CSS,HTML,etc) ko phadhta hai, orr ek Bundler tayarr krta hai :: which is ready for production 
// Webpack, vite , parcel, rollup etc.
// hmm parcel use krenge

// in terminal:
npm init  :: jo puche usse daalo ya skip kro
npm install parcel :: parcel ko install krna ho tho // isse parcel ke alava bhi bhot kuch aagya prr kyu??
// kyoki parcel itself bhi exsiting liberaries ka use krke hi banaya gya hoga , or vo liberaries bhi kisi or liberaries ka use krke hi banayi gayi hongi
// react vagera ko npm se leaao :: npm install react
// reactDOM ko npm se leaao :: npm install react-dom

// package.json me dependencies naam ka object hoga bataye ga ki npm ki kiss kiss chijj pe depend hai // jiss chijj prr depend hai, vo sari chijj store hnn node_modules me

version: 18.2.3   // isska kya mtlb hai??
Major.Minor.Patch
//minor or patch update ke baad bhi purana code sahi work kre ga
//major update ke baad purane code me dikktt aaskti hai


version: ^19.0.0  // ^ isska kya mtlbb hai ??
^ : carret :: mtlb, this version will accept Minor and Patches update in it
~ : tild :: mtlb, this version will accept Patches update in it

// package-lock.json :: jitne bhi packages aapka code use krne vala hai , unnsbke exact version ye notedown krke rakhta hai


//Ye bilkul recommanded nhi hai ki node_modules ko hmm github pe upload kre, hmme sirf code ko github pe daalna hai, since node_modules ko tho hmm khud bhi generate(or usska size bhi 309MB hai) krr skte hnn by :: npm install 
// prr ye krne se pata kaise chala ki konsa version use krr rahe hn // this information will be taken from package-lock.json

// agrr kisi ne package-lock.json bhi nahi diya tho?? 
// hmm check krenge package.json ke andrr dependencies ko, unka jonsa version hoga vo + koi minor or patch hua vo(kyoki ^ iss symbol ka use kiya hai) , ye dono download krr lega




// tho hmm code + package-lock.json + package.json ko github pe daalte hn

<!-- npm kya hai ???? -->
// node package manager
// parcel ka sara code yaha likha hua hai
// typescript ka compiler ke liye code yaha likha hua hai
// development se related sara code yaha likha hua hai
//webpack se related sara code yaha likha hoga
// react and reactdom ka oficially code yaha present hai
// react and reactdom ka code ek cdn link me tha
// hence, agrr javascript se related kuch bhi chaiye tho npm me hoga , even aapne kuch JS me likha hai tho aap apna contibution bhi de skte hn

<!-- Package.json -->
What your project needs (dependencies).
How to run your project (scripts).
Basic details about your project (name, version, description).

Why It’s Important:
For consistency: When other people or you work on the project in the future, package.json ensures you all use the same version of the tools.
For easy setup: Instead of installing each package manually, npm install looks at package.json and automatically installs everything your project needs.

<!-- First initialize your project with npm init -->
<!-- These are the updates -->
MAJOR.MINOR.PATCH

1. Patch Version
Purpose: Bug fixes and patches that do not affect functionality or introduce breaking changes.
Changes: Fixes a small issue without adding new features.
Incremented: When backward-compatible bug fixes are made.

2. Minor Version
Purpose: Adds new features or improvements in a backward-compatible way (no breaking changes).
Changes: Introduces new functionality, but existing code will still work as before.
Incremented: When new, backward-compatible features are added.

3. Major Version
Purpose: Introduces significant changes, often with breaking changes that may require users to modify their code.
Changes: Makes fundamental changes to the library, removing or changing functionality in a way that is not backward-compatible.
Incremented: When breaking changes are introduced.

caret: ^ (minor and patch)
tilde: ~(patch)

Bring Bundler to our app:
webpack
vite
parcel
<!-- npm install -D parcel -->

Role of bundler:
1: Combines Multiple Files:
Your code might be spread across many files (e.g., multiple JavaScript modules, CSS files, images). A bundler collects all of these files, combines them, and creates one (or more) output files that the browser can efficiently load.
2: Optimizes for Performance: Minification: Removing unnecessary spaces, comments, and shortening variable names.
Tree Shaking: Removing unused code from the final bundle, so only the parts of your code that are used are included.
Code Splitting: Breaking your code into smaller pieces (chunks) so that the browser only loads what is needed for the initial page load and can load other parts of the app on demand.
3: Handles Dependencies:
4: Transpiles Code:

<!-- npx parcel index.html -->
<!-- npx parcel build index.html -->



<!-- npm install react
npm install react-dom -->

import React from "react";
import ReactDOM from "react-dom/client";