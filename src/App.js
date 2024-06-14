// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const quotes = [
  {quote:"Be yourself; everyone else is already taken.",
    name:"― Oscar Wilde "
  },
  {quote:"I'm selfish, I have not failed. I've just found 10,000 ways that won't work.",
    name:" ― Thomas A. Edison "
  },
  {quote:"So many books, so little time.",
    name:" ― Frank Zappa "
  },
  {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name:"― Albert Einstein"
  },
  {quote:"A room without books is like a body without a soul.",
    name:"― Marcus Tullius Cicero "
  },
  {quote:"Be the change that you wish to see in the world.",
    name:"― Mahatma Gandhi "
  },
  {quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    name:" ― Mahatma Gandhi "
  },
  {quote:"Everything you can imagine is real.",
    name:" ― Pablo Picasso "
  },
  {quote:"Do what you can, with what you have, where you are.",
    name:" ― Theodore Roosevelt "
  },
  

]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num: Math.floor(Math.random() * (quotes.length -1) )
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      num: +Math.floor(Math.random() * (quotes.length - 1))
    })
  }
  render() {
    let x = this.state.num;
    console.log(typeof(x))
    console.log(this.state.num)
    return (
      <div id="quote-box" className="flex flex-col justify-between 
       bg-indigo-300 rounded-md p-5 w-5/6 md:w-1/3 h-80">
        
        <div id="text" className='flex justify-center h-40 p-2 text-2xl font-serif'>{quotes[x].quote}</div>
        
        <div id="author" className='flex justify-end h-10 p-2 text-xl'>{quotes[x].name}</div>
        <div className='flex flex-row justify-between'>
          <a id='tweet-quote' className='flex items-center text-2xl' href="https://twitter.com/intent/tweet" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} /></a>
          <button id="new-quote" onClick={this.handleClick} className='font-bold p-2 bg-indigo-200 rounded m-1.5 
          flex justify-center'>New Quote</button>
        </div>
      </div>
    );
  }
  
}

export default App;
