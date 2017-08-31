import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.json';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const element2 = document.createElement('button');
    
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  
  element2.innerHTML = "Click Me hahaha";
  element2.onclick = printMe;
  element.appendChild(element2);
  element.appendChild(myIcon);

  console.log(Data);
    
  return element;
}

document.body.appendChild(component());

if(module.hot) {
  module.hot.accept('./print.js',function(){
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.element.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}