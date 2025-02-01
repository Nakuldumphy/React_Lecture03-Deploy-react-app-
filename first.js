import React from "react";  //node-modules me hai bss yaha import krva lo
import ReactDOM from "react-dom/client";  // naya vala react-dom, client ke andrr rakha hua hai
// abhi ye work nhi krega , kyoki import keyword is part of latest JS // browser ko baatana hoga ki ye normal JS nhi hai, ye 'module' hai
// hence, html file me jake batana hoga :: <script type="module" src="./first.js"></script>  :: prr abhi bhi work nhi kiya hoga
// abhi hmme html file ko parcel ko dena hoga optimise krne ke liye :: uske baad mei aapne server ko kholta hu, yaha se aapko link mille ga :: npx parcel index.html
// isse 2 file create hojaengi, parcel-cache and dist
// parcel-cache: ye store krega server ka cache data, isske baad website jaldi build hogi
// dist : it stores the optimized code // parcel ne jo bundle banaya (production ready code) usko dist me store hai
// npx parcel build index.html :: iss command se vo sammajh jaega ki abb mujhe production ready code chaiye, unki link mujhe dedega :: agr error aaye tho  "main": "first.js", isse remove kdena package.json me se
// dist ke andrr .js.map file ki jarurtt nhi hoti, isse aap delete bhi maarr skte ho // or .js file ke andrr vo ssara code aagya jo react , react-dom ka hmmne use kiya hua hai // react & react-dom ka pura code nhi aaya hoga // now this code is not in readable format
// .js.map file ek mapping file hai , jisse hmm aapni original readable js file ko generate krr skte hn // iss liye hmm isse production me nhi daalte // kyoki hm chate ki koi hmmra code read na kre

// difference between npx parcel index.html vs npx parcel build index.html
//##npx parcel index.html:   // local server ki link dedega
//  1) used during development
//  2) It compiles your JavaScript, CSS, and other assets and serves them on a local server
//  3) It automatically reloads the browser when you make changes, making it convenient for rapid development and testing.
// 4) It does not produce optimized production-ready output but is great for quick iteration during development.

//##npx parcel build index.html:  // optimised code dedega jisse aapko production me daalna hai
// used to create a production build of your project.
// It typically outputs optimized files into a dist or build directory, ready for deployment to a web server or a hosting service.
// The build command focuses on creating a smaller, more efficient version of your application suitable for deployment in a production environment.

// ## COMMANDS\
// npm init 
// npm install parcel
// npm install react
// npm install react-dom   // abb teeno install krne ke baad , dependencies me show kre ga parcel, react, react-dom ko
// npx parcel index.html   // temperary server banaega // jissko aap ussi time use krr pao ge bss
// npx parcel build index.html // production ready code banayega // optimised hoga // ye file aapko production me daalni hai

// production me code daalne ki 2 choice hn:
// 1) index.html + app.js + react + react-dom + other Dependencies(node_modules) --> code optimised bhi nhi hai + size bhi bhot jyaada hai
// 2) bundler bola ki mai aapke sare code ko optimised krrduga + jitne react & react-dom ke code ki jarurtt hai utne ko hi lena hai, sirff doo files me kaam chal gya ---> isse size bhi kammm hogya, abb sirff 2 file daalni hai // direct dist folder ko upload kro

// DEPLOY THE PROJECT ON NETIFY

//******** creating Element in react *********
const h1 = React.createElement("h1",{id:"first", className:"heading1",style:{color:"white",backgroundColor:"black"}},'hello world');  
const h2 = React.createElement("h2",{id:"second", className:"heading2",style:{color:"white",backgroundColor:"black"}},'maaja aaya mujhe');  

const div = React.createElement("div",{},[h1,h2]); // multiple element kko div ke andrr daalna hai tho  array ki form me daaldo
// react.createElement => it will return react element(or JS Object) => render krrte time vo HTML ke element me convert hota tha
// react.createElement , ye object hi return krega :: you can prove it by console.log(h1);

// ********* rendering element in react *********
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));  

// Reactroot.render(div);


// JavaScript xml // not part of react
// ***** JSX ***** //html jaisa code direct JS me likh skte ho 
const newElement = <h1>hello coder army</h1> //ye JSX ka part hai, react nhi hai  // abb hmm react.createElement ko use nhi krenge
Reactroot.render(newElement); // agrr show na kre tho previous cache ko delete krr dena(dist , parcel-cache)

// JSX : it HTML like syntax hai, exactly HTML nhi hai
// JSX ko Javascript nhi samajti, therefore isse react(since ye bhi tho JS hi hai) me convert krna hoga

//**** babel *****: JSX ke code ko convert kre ga react ke code me
// parcel me already present hota hai // you can see it from node_module
// working:
// JSX code => react.createElement(by babel) => it will return react element(or JS Object) => render krrte time vo HTML ke element me convert hojae ga
// therefore, babel ek transpiler hai // same typescript me jo hmmne dhekha tha
