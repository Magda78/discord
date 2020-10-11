import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);

  useEffect (() => {
    auth.onAuthStateChanged((authUser) => )

  
  },[]);

  return (
      <div className="app">
        {user ? (
          <>
          <Sidebar />
          <Chat />
          </>
        ): (
          <Login />
        )}
    </div>
  );
}

export default App;
