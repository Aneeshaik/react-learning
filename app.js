//const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
//creating sub div elements
// to create sibling elements - use array brackets
const divEles = [React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {}, "I am h1"), 
    React.createElement("h2", {}, "Iam h2")]), 
    React.createElement("div", {id:"child2"}, 
    [React.createElement("h1", {}, "I am h1"), 
    React.createElement("h2", {}, "Iam h2")])]), 
    React.createElement("div2", {id:"parent"}, 
    [React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {}, "I am h1"), 
    React.createElement("h2", {}, "Iam h2")]), 
    React.createElement("div", {id:"child2"}, 
    [React.createElement("h1", {}, "I am h1"), 
    React.createElement("h2", {}, "Iam h2")])])] // will use JSX to replace is tediousness
console.log(divEles); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divEles);

//react is a library which can be used in any portion of website independently and can use as framework and create large applications 