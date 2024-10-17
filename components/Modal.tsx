"use client";

import Image from "next/image";

import { useState } from "react";

type PokemonType = {
    id: number;
    name: string;
    weight: string;
    height: string;
    types: { type: { name: string } }[];
    stats: { stat: { name: string }, base_stat: string }[];
  };

export default function Modal({ pokemon }: {pokemon: PokemonType}) {
    console.log('abacate', pokemon);
    
  const [openModal, setOpenModal] = useState("hidden");

  function openModalF() {
    setOpenModal("block");
  }

  function closeModal() {
    setOpenModal("hidden");
  }

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        onClick={openModalF}
      ></div>

      <div
        className={`fixed top-0 left-0 w-full h-full z-10 flex justify-center items-center p-5 ${openModal}`}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-modalBg z-10"
          onClick={closeModal}
        ></div>
        <div
          className="relative px-4 sm:px-8 py-8 bg-gray-950 rounded w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] z-20 grid grid-cols-1 
        sm:grid-cols-[200px_minmax(336px,_1fr)_0px] md:grid-cols-[200px_minmax(536px,_1fr)_0px] lg:grid-cols-[200px_minmax(736px,_1fr)_0px] shadow-lg"
        >
          <div
            className="absolute w-[40px] h-[40px] top-[-20px] right-[-20px] rounded bg-gray-950 shadow-lg flex items-center justify-center cursor-pointer"
            onClick={closeModal}
          >
            X
          </div>
          <div className="mr-8">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width={200}
              height={200}
              alt={pokemon.name}
              className="p-2 bg-gray-900 rounded"
            />
          </div>
          <div>
            <h2 className="font-black text-4xl first-letter:uppercase mb-4">
              {pokemon.name.replaceAll('-', ' ')}
            </h2>

            <div className="mb-4">
              {pokemon.types.map((item, index) => (
                <span
                  key={index}
                  className={`pokemon-type ${item.type.name} first-letter:uppercase rounded inline-block mr-2 text-md`}
                >
                  {item.type.name}
                </span>
              ))}
            </div>

            <div className="p-4 bg-gray-900 rounded mb-4">
              <h3 className="text-lg font-bold mb-2">Informações</h3>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <span className="mb-2">
                  Peso: <br />
                  {pokemon.weight}g
                </span>
                <span className="mb-2">
                  Altura: <br />
                  {pokemon.height}cm
                </span>
              </div>
            </div>

            <div className="p-4 bg-gray-900 rounded">
              <h3 className="text-lg font-bold mb-2">Status Base</h3>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {pokemon.stats.map((item, index) => (
                  <span
                    key={index} className="mb-2"
                  >

                    <span className="font-bold uppercase">{item.stat.name.replaceAll('-', ' ')}:</span> {item.base_stat}
                    
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
