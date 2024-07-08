
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import './styles.css'; // Assuming your CSS is in a file named styles.css
import { useNavigate } from 'react-router-dom';






export default function Home() {
    const [searchWord, setSearchWord] = useState("");
    const [result, setResult] = useState([])
    const [error, setError] = useState("")
    const [hasClicked, setHasClicked] = useState(false)
    const hello = "hello"
    const navigate = useNavigate();

    function clearAll() {
        setHasClicked(false)
        setResult([])
        setSearchWord("")
        setError("")
    }

    async function callAPI() {
        setError("")
        setResult([])
        setHasClicked(true)
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchWord.toLowerCase()}`)

            if (response.status == 200) {
                const data = await response.json()
                setResult(data)
                console.log(data)
            } else if (response.status == 300) {
                setError("this is a 300 error")

            } else if (response.status == 100) {
                setError("this is a 100 error")

            } else if (response.status >= 400 && response.status < 600) {
                setError("this is either a 400 or a 500 error")

            }

            else {
                setError(" Pokemon not found")
            }

            navigate('/Results', { state: { searchWord, result } });

        } catch (error) {
            console.log(error)

        }




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

                    <button onClick={() => callAPI()}>
                        <FaSearch fontSize={60} color='white' />
                    </button>

                </div>
            }

            {error &&

                <div className='text-red-700'>
                    {error}
                </div>

            }





            {hasClicked === true &&
                <button onClick={() => clearAll()}
                    className='text-white border border-white rounded-full px-4 my-4'>
                    <div >
                        Clear
                    </div>

                </button>
            }



        </div >


    )
}

