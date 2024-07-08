// Results.js
import React from 'react';
import './styles.css'; // Assuming your CSS is in a file named styles.css
import { useLocation } from 'react-router-dom';

function Results() {
    const location = useLocation();
    const { searchWord, result } = location.state || {};

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {result && result.name && result.height && result.weight ? (
                <div className="w-80 rounded-lg overflow-hidden shadow-xl bg-white border-8 border-red-600">
                    <div className="bg-red-600 p-4 text-white text-center font-bold text-2xl">
                        Pokédex Entry
                    </div>
                    <div className="px-6 py-8">
                        <div className="font-bold text-3xl mb-6 text-center capitalize text-red-600">{result.name}</div>
                        <div className="bg-gray-100 rounded-lg p-4 mb-4">
                            <p className="text-gray-800 text-xl mb-2">
                                <span className="font-semibold text-red-600">Height:</span> {result.height / 10} m
                            </p>
                            <p className="text-gray-800 text-xl">
                                <span className="font-semibold text-red-600">Weight:</span> {result.weight / 10} kg
                            </p>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-6 text-center">
                        <span className="inline-block bg-red-600 rounded-full px-4 py-2 text-lg font-semibold text-white">
                            #{result.id.toString().padStart(3, '0')}
                        </span>
                    </div>
                </div>
            ) : (
                <div className="text-center text-red-600">No Pokemon data available.</div>
            )}
        </div>
    );
}

export default Results;