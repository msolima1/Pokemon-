
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";



export default function Home() {
    const [searchWord, setSearchWord] = useState("");
    const [result, setResult] = useState([])
    const [error, setError] = useState("")
    const [hasClicked, setHasClicked] = useState(false)
    const hello = "hello"

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


        } catch (error) {
            console.log(error)

        }




    }



    return (
        <div className='h-screen bg-slate-900 overflow-auto flex flex-col justify-center items-center'>

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


            {result && result.name && result.height && result.weight &&

                < div >
                    <div className='text-white'> name: {result.name}</div>
                    <div className='text-white'> height: {result.height}</div>
                    <div className='text-white'> weight: {result.weight}</div>
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

            <div class="bg-red-700 max-w-sm overflow-hidden shadow-lg mt-4 rounded-2xl">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>





        </div >





    )
}

