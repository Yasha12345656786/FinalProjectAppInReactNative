import {createContext, useState, useEffect} from 'react';
import { base_api } from '../../utils/api';

export const PlayerContext = createContext();

export default function PlayerContextProvider({children}){

    const [player, setPlayer] = useState({});
    
    const Login = async (username, password) =>{
        try {
            let response = await fetch(`${base_api}/api/player/login`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({username, password})
            });
            if(response.ok){
                let data = await response.json();
                setPlayer(data);
            }
        } catch (error) {
            
        }
    } 



    const Register = async (first_name, last_name, email, password, username, triviaScore, memoryScore)=>{
        try {
            let response = await fetch(`${base_api}/api/player/AddUser`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({first_name, last_name, email, password, username, triviaScore, memoryScore})
            });
            if (response.ok) {
                let data = await response.json();
                setPlayer(data);

                
            }
        } catch (error) {
            
        }

    }

    const UpdateUsername = async (username)=>{
        try {
            let response = await fetch(`${base_api}/api/player/updateUsername`,{
                method:'PUT',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringfy({username})
            });
            if (response.ok) {
                let data = await response.json();
                setPlayer(data);
            }
        } catch (error) {
            
        }

    }
    const UpdatePassword = async (password)=>{
        try {
            let response = await fetch(`${base_api}/api/player/updatePassword`,{
                method:'PUT',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringfy({password})
            });
            if (response.ok) {
                let data = await response.json();
                setPlayer(data);
            }
        } catch (error) {
            
        }

    }
    const GetUserById = async (id)=>{
        try {
            let response = await fetch(`${base_api}/api/player/getPlayerById`,{
                method:'GET',
                body:JSON.stringify({player})
            });
            if (response.ok) {
                let data =await response.json();
                setPlayer(data);
            }
        } catch (error) {
            
        }
    }

    const value = {
        player,
        Login, 
        Register,
        UpdateUsername,
        UpdatePassword,
        GetUserById
    } 

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )

}