import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/search_bar';


//create a componet
const App = () => {

  return (
<div>
    <SearchBox />
    </div>
  );
}

//take this componet's generated HTML and put it in DOM

ReactDOM.render(<App /> , document.querySelector('.container'));

//index file
//
// require('babel-core/register');
//
// module.exports = require('./src');
// >>>>>>> Stashed changes
