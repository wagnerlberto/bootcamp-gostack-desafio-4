import React from 'react';
import './App.css';
import profile from './assets/pessoa1.png';
import Header from './components/Header';
import PostList from './components/PostList';

function App(){
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
