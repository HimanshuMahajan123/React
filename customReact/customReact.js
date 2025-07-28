function customRender(reactElement , mainContainer){
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.message;
    domElement.setAttribute("href" , reactElement.props.href);
    domElement.setAttribute("target" , reactElement.props.target);
    mainConatainer.appendChild(domElement);*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.message;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop , reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    message : "click me to visit google"
}

const mainContainer = document.querySelector('#root');

customRender(reactElement , mainContainer);