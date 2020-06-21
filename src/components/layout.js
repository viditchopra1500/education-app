import React,{useState,useEffect} from 'react';
import './layout.css';
import { Route ,Switch} from 'react-router-dom';
import _ from 'lodash';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'
import Navbar from './navbar/navBar'
import Footer from './footer/footer'
import Home from './Home/home'
import GetStarted from './getStarted/getStarted'
import AboutUs from './AboutUs/aboutUs'
import ScrollToTop from './../ScrollToTop'
function Edu() {
  const [isLight,setTheme]=useState(0);        
  const [topics,setTopics]=useState([[{title:'System Calls',url:'https://www.youtube.com/embed/7cfOMkcwX64?enablejsapi=1'}]]);
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      "https://raw.githubusercontent.com/shridhar-t/Json-edu-app/master/data.json",
    );
    setTopics(result.data);
  };

  fetchData();
}, []);
  const oneDimensional=[].concat(...topics);
  const titles=oneDimensional.map((obj)=>{
    return obj.title;
  })
  const [titlename,setTitlename]=useState(1);
  const [active,setActive]=useState(0);
  const [url,setUrl]=useState(topics[titlename-1][0].url);
  const [searchQuery,setSearch]=useState('');
  const [suggestions,showSuggest]=useState(0);
  function handleClickVidList(e){
    setUrl(topics[titlename-1][Number(e.target.id)].url);
    setActive(e.target.id);
}
function removeSpaces(string){
  return string.replace(/\s/g, "")
}
function handleSearch(sug){
  showSuggest(0);
  for(let z=0;z<topics.length;z++){
      if(topics[z].map((val)=>{ return _.capitalize(removeSpaces(val.title)); }).indexOf(_.capitalize(removeSpaces(String(sug)))) !== -1){
          setTitlename(z+1);
          setUrl(topics[z][topics[z].map((val)=>{ return _.capitalize(removeSpaces(val.title)); }).indexOf(_.capitalize(removeSpaces(String(sug))))].url);
          setActive(topics[z].map((val)=>{ return _.capitalize(removeSpaces(val.title)); }).indexOf(_.capitalize(removeSpaces(String(sug)))));
          setSearch("")
          return;
      }
  }
  setSearch("")
}
function handleCardRoute(letter){
  setTitlename(letter);
  setUrl(topics[letter-1][0].url);
  setActive(0)
}
const filteredSuggestions = titles.filter(
  suggestion =>
    _.capitalize(removeSpaces(suggestion)).indexOf(_.capitalize(removeSpaces(searchQuery))) > -1
);
function handleChangeSearchBox(e){
  if(e.target.value.length===0){
    showSuggest(0);
  }else{
    showSuggest(1);
  }
  setSearch(e.target.value);
}
function collapse(event){
  if (!event.currentTarget.contains(event.relatedTarget)) {
    showSuggest(0);
  }
}
  document.body.classList.add('body-dark');//applying dark-mode by default
      if(Number(isLight)){
      document.body.classList.add('transition-dark');
      document.body.classList.add('body-light');
      document.body.classList.remove('body-dark');
    }else{
      document.body.classList.add('body-dark');
      document.body.classList.remove('body-light');
    }
  return (
      <div className="scrolling">
        <div className="top">
        <Navbar sug={suggestions} collapse={collapse} sugArray={filteredSuggestions} theme={isLight} handleFunc={setTheme} handleChangeSearchBox={handleChangeSearchBox} handleSearch={handleSearch} searchQuery={searchQuery} ></Navbar>
        <hr className="line" />
        </div>
      <div className="content">
      <ScrollToTop />
      <Switch>
      <Route
        path='/'
        exact
        render={(props) => <Home {...props} handleCardRoute={handleCardRoute} theme={isLight}  />}
      />
      <Route
        path='/get-started'
        exact
        render={(props) => <GetStarted {...props} theme={isLight} active={active} titlename={titlename} url={url} topics={topics} handleClickVidList={handleClickVidList} />}
      />
      <Route
        path='/about-us'
        exact
        render={(props) => <AboutUs {...props} theme={isLight} />}
      />
      </Switch>
      </div>
      <div className="footer">
      <hr className="line" />
      <Footer theme={isLight} ></Footer>
      </div>
      </div>
  )
}
// const topics=[[{title:'System Calls',url:'https://www.youtube.com/embed/7cfOMkcwX64?enablejsapi=1'},{title:'Virtual Memory',url:'https://www.youtube.com/embed/_1tnoez75ws?enablejsapi=1'},{title:'Cache Replacement Policy',url:'https://www.youtube.com/embed/u1xHbfhq0KQ?enablejsapi=1'},{title:'hpc4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc5',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc6',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc7',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc8',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc9',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc10',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc11',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc12',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc13',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc14',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc15',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc16',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc17',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc18',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc19',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'hpc20',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}],
// [{title:'Parallel Programming1',url:'https://www.youtube.com/embed/6kycPB7RMnY?enablejsapi=1'},{title:'Parallel Programming2',url:'https://www.youtube.com/embed/_HHdCehuI9Q?enablejsapi=1'},{title:'Parallel Programming3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'Parallel Programming4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}],
// [{title:'Open Multi-Processing1',url:'https://www.youtube.com/embed/6kycPB7RMnY?enablejsapi=1'},{title:'Open Multi-Processing2',url:'https://www.youtube.com/embed/_HHdCehuI9Q?enablejsapi=1'},{title:'Open Multi-Processing3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'Open Multi-Processing4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}],
// [{title:'Graphics Processing Unit1',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'Graphics Processing Unit2',url:'https://www.youtube.com/embed/_HHdCehuI9Q?enablejsapi=1'},{title:'Graphics Processing Unit3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'Graphics Processing Unit4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}],
// [{title:'Message Passing Interface1',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'Message Passing Interface2',url:'https://www.youtube.com/embed/_HHdCehuI9Q?enablejsapi=1'},{title:'Message Passing Interface3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{title:'Message Passing Interface4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}]
// ]
export default Edu ;