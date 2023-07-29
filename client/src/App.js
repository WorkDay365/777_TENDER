// import logo from './logo.svg';
// import './App.css';
import {Layout} from './components/Layout.jsx'
import {Routes, Route} from 'react-router-dom'

import {MainPage} from './pages/MainPage.jsx'
import {PostsPage} from './pages/PostsPage.jsx'
import {PostPage} from './pages/PostPage.jsx'

import {AddPostPage} from './pages/AddPostPage.jsx'
import {RegisterPage} from './pages/RegisterPage.jsx'
import {LoginPage} from './pages/LoginPage.jsx'
import {EditPostPage} from './pages/EditPostPage.jsx'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path ='/' element={<MainPage />} />
        <Route path ='posts' element={<PostsPage />} />
        <Route path =':id' element={<PostPage />} />

        <Route path ='new' element={<AddPostPage />} />
        <Route path ='register' element={<RegisterPage />} />
        <Route path ='login' element={<LoginPage />} />
        <Route path =':id/edit' element={<EditPostPage />} />
      </Routes>
    </Layout>


    // <div className="text-2xl text-red-600">
    //   TEXT
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
