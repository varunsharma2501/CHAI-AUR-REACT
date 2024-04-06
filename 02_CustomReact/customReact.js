/*
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement);
}
 this code isnt general it will work only for creating a tags and rendering them
*/

// a generalized function to facilitate rendering of an element defined in js to a html file in react
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement);
}


// specific for a tag rendering 
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'This is the link for google'
}

const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer);