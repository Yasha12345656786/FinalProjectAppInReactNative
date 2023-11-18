import { createContext, useState, useEffect } from "react";
import { base_api } from "../../utils/api";
import * as Crypto from "expo-crypto";

import AsyncStorage from "@react-native-async-storage/async-storage";
export const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  
  const [player, setPlayer] = useState({});
  const [allPlayer, setAllPlayer] = useState([]);

  const StoreData = async (value)=>{
    try {
      const jsonValue=JSON.stringify(value)
      await AsyncStorage.setItem('player',jsonValue)
    } catch (error) {
      console.error({error});
    }
  }

  const Login = async (username, password) => {
    try {
      let response = await fetch(`${base_api}/api/player/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        let data = await response.json();
        setPlayer(data);
        StoreData("player",data);
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  const Register = async (first_name, last_name, username, email, password) => {
    console.log('username',username);
    try {
      let response = await fetch(`${base_api}/api/player/AddUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          username,
          email,
          password,
        }),
      });

      if (response.ok) {

        let data = await response.json();
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateUsername = async (username) => {
    try {
      let response = await fetch(`${base_api}/api/player/updateUsername`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringfy({ username }),
      });
      if (response.ok) {
        let data = await response.json();
        setPlayer(data);
      }
    } catch (error) {}
  };
  const UpdatePassword = async (id, password) => {
    try {
      let response = await fetch(
        `${base_api}/api/player/updatePassword/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringfy({ password }),
        }
      );
      if (response.ok) {
        let data = await response.json();
        setPlayer(data);
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const GetUserByUsername = async (username) => {
    try {
      let response = await fetch(
        `${base_api}/api/player/GetByUsername/${username}`,
        {
          method: "GET",
          body: JSON.stringify({ player }),
        }
      );
      if (response.ok) {
        let data = await response.json();
        setPlayer(data);
      }
    } catch (error) {}
  };
  const GetAll = async () => {
    try {
      let response = await fetch(`${base_api}/api/player`, {
        method: "GET"
        
      });
      if (response.ok) {
        let data = await response.json();
  
        setAllPlayer(data);
      }
    } catch (error) {}
  };
  const GetByEmail = async (email) => {
    try {
      let response = await fetch(`${base_api}/api/player/GetByEmail/${email}`);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else return null;
    } catch (error) {}
  };

  const SendNewPassword = async (id, email) => {
    //create new password
    let pass = Crypto.randomUUID();

    //update the user doc in collection
    let resposne = await UpdatePassword(id, pass);
    console.log("resposne", resposne);
    if (resposne.ok) {
      console.log("first");
      //send email via email.js
      // code fragment
      let objToSend = {
        service_id: "service_u1qhosa",
        template_id: "template_f0lisp1",
        user_id: "yVLhGWDVAc-Nm6xSY",
        template_params: {
          user_email: email,
          message: `your new password: ${pass}`,
        },
      };
      let res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objToSend),
      });
      console.log("res", res);
      if (res.ok) return true;
      else return false;
    }
  };
  const SendNewUsername = async (id, email) => {
    //create new password
    let username = Crypto.randomUUID();

    //update the user doc in collection
    let resposne = await UpdateUsername(id, username);
    console.log("resposne", resposne);
    if (resposne.ok) {
      console.log("first");
      //send email via email.js
      // code fragment
      let objToSend = {
        service_id: "service_u1qhosa",
        template_id: "template_f0lisp1",
        user_id: "yVLhGWDVAc-Nm6xSY",
        template_params: {
          user_email: email,
          message: `your new password: ${username}`,
        },
      };
      let res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objToSend),
      });
      console.log("res", res);
      if (res.ok) return true;
      else return false;
    }
  };
  const GetPlayerById = async (id) => {
    try {
      let response = await fetch(`${base_api}/api/player/getPlayerById/${id}`, {
        method: "GET"
      });
      if (response.ok) {
        let data = await response.json();
        setPlayer(data);
      }
    } catch (error) {}
  };

  const value = {
    player,
    allPlayer,
    Login,
    Register,
    UpdateUsername,
    UpdatePassword,
    GetUserByUsername,
    GetAll,
    GetByEmail,
    SendNewPassword,
    SendNewUsername,
    GetPlayerById 
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}
