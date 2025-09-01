import React from "react";

function DashboardTime(){

    return(
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6 text-green-400">
            Classificação - Brasileirão 2025
        </h1>

        <table className="w-full border-collapse border border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-800">
            <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Posição</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-700 px-4 py-2 text-center">Pontos</th>
            </tr>
            </thead>
            <tbody>
            <tr className="hover:bg-gray-800">
                <td className="border border-gray-700 px-4 py-2">1</td>
                <td className="border border-gray-700 px-4 py-2">Flamengo</td>
                <td className="border border-gray-700 px-4 py-2 text-center">47</td>
            </tr>
            <tr className="hover:bg-gray-800">
                <td className="border border-gray-700 px-4 py-2">2</td>
                <td className="border border-gray-700 px-4 py-2">Cruzeiro</td>
                <td className="border border-gray-700 px-4 py-2 text-center">44</td>
            </tr>
            <tr className="hover:bg-gray-800">
                <td className="border border-gray-700 px-4 py-2">3</td>
                <td className="border border-gray-700 px-4 py-2">Palmeiras</td>
                <td className="border border-gray-700 px-4 py-2 text-center">43</td>
            </tr>
            </tbody>
        </table>
       </div>
    );
}
export default DashboardTime;
