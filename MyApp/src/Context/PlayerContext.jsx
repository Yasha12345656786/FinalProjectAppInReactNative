import { createContext, useState, useEffect } from "react";
import { base_api } from "../../utils/api";
import * as Crypto from "expo-crypto";

export const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  const [player, setPlayer] = useState({});

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
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  const Register = async (
    first_name,
    last_name,
    email,
    password,
    username,

  ) => {
    try {
      let response = await fetch(`http://localhost:5500/api/player/AddUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          username,
     
        }),
      });
      console.log(response)
      console.log(response.status)
      console.log(response.statusText)
      if (response.ok) {
        console.log("sdsss");
        let data = await response.json();
        console.log(data);
        setPlayer(data);
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
      console.log("jkjkjk", error);
    }
  };
  const GetUserById = async (id) => {
    try {
      let response = await fetch(`${base_api}/api/player/getPlayerById/${id}`, {
        method: "GET",
        body: JSON.stringify({ player }),
      });
      if (response.ok) {
        let data = await response.json();
        setPlayer(data);
      }
    } catch (error) {}
  };
  const GetAll = async (id) => {
    try {
      let response = await fetch(`${base_api}/api/player/`, {
        method: "GET",
        body: JSON.stringify({ player }),
      });
      if (response.ok) {
        let data = await response.json();
        setPlayer(data);
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

  const value = {
    player,
    Login,
    Register,
    UpdateUsername,
    UpdatePassword,
    GetUserById,
    GetAll,
    GetByEmail,
    SendNewPassword,
    SendNewUsername
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}
