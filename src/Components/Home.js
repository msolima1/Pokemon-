
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import './styles.css'; // Assuming your CSS is in a file named styles.css
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const [searchWord, setSearchWord] = useState("");
     
    const [error, setError] = useState("")
    const [hasClicked, setHasClicked] = useState(false)
    const hello = "hello"
    const navigate = useNavigate();

    function clearAll() {
        setHasClicked(false)
        
        setSearchWord("")
        setError("")
    }

    const callAPI = async () => {
        setError("");
        setHasClicked(true);

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchWord.toLowerCase()}`);

            if (response.status === 200) {
                const result = await response.json();
                navigate('/Results', { state: { searchWord, result } });
            } else if (response.status === 300) {
                setError("This is a 300 error");
            } else if (response.status === 100) {
                setError("This is a 100 error");
            } else if (response.status >= 400 && response.status < 600) {
                setError("This is either a 400 or a 500 error");
            } else {
                setError("Pokemon not found");
            }
        } catch (error) {
            console.log(error);
            setError("An unexpected error occurred");
        }
    };

    function handleSearch(){
        callAPI()
        
    }



    return (
        <div className="background-style">

            {hasClicked === false &&
                <div id='inner-box' className='flex items-center justify-between bg-slate-500 border border-white rounded-full py-3 px-40'>

                    <input
                        className='bg-slate-500 focus:outline-none focus:ring-0 text-white placeholder:text-white placeholder:text-4xl w-full text-4xl'
                        placeholder='Search any Pokemon....'
                        type='text'
                        value={searchWord}
                        onChange={(e) => setSearchWord(e.target.value)}
                    />

                    <button onClick={() => handleSearch()}>
                        <FaSearch fontSize={60} color='white' />
                    </button>

                </div>
            }

            {error &&

                <div className='text-red-700'>
                    {error}
                </div>

            }





            


        </div >


    )
}

