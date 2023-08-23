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

    const Register = async ()=>{

    }

    const UpdateDetails = async ()=>{

    }

    const value = {
        player,
        Login, 
        Register,
        UpdateDetails
    }

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )

}