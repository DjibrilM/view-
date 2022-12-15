import React, { useEffect } from 'react';
import './App.css';
import {
  useRecoilState,
} from 'recoil';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import LoginPage from './scenes/loginPage';
import HomePage from './scenes/homePage';
import ProfilePage from './scenes/profilePage';
import userState from "./recoil/user"
import Register from './scenes/register/Register';
import ErrorPage from './scenes/404/404';
import { verify } from './services/auth';
import Loading from './components/UI/lodingSpinner';

function App() {
  const [user, setUserState] = useRecoilState<any>(userState);
  const [loading, setLoading] = useState<boolean>(true);



  useEffect(() => {
    const loginTheUser = () => {
      const getToken = localStorage.getItem("token");
      const getTheme: any = localStorage.getItem("theme");

      if (getToken) {
        verify(getToken).then((result: any) => {
          setLoading(false)
          setUserState({
            ...user,
            isLoggedIn: true,
            user: result.user,
            toke: getToken,
            mode: getTheme,
          });
        }).catch(error => {
          setLoading(false)
          setUserState({ ...user, isLoggedIn: false, token: getToken, mode: getTheme });
          localStorage.removeItem("token")
        })
      } else {
        setLoading(false)
      }

    }
    loginTheUser();

    const setThemeMode = () => {
      const getTheme: any = localStorage.getItem("theme");
      const body = document.body;
      setUserState({ ...user, mode: getTheme });
      body.style.background = getTheme === "dark" ? "#0A0A0A" : "#F6F6F6";
    }
    setThemeMode();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", user.mode);
    const body = document.body;
    body.style.background = user.mode === "dark" ? "#0A0A0A" : "#F6F6F6";
  }, [user.mode])


  return !loading ? (
    <div className={`w-full h-[100%] ${user.mode}`} >
      <Routes >
        {!user.isLoggedIn ?
          <>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
          </>
          :
          <>
            <Route path='profile/:userId' element={<ProfilePage />} />
            <Route path='/' element={<HomePage />} />
          </>
        }
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  ) : (<div className='flex justify-center items-center h-[100vh]'>
    <Loading />
  </div>);
}

export default App;
