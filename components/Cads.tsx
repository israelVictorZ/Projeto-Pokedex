import Image from "next/image";

import Modal from "./Modal";

type PokemonType = {
  id: number;
  name: string;
  weight: string;
  height: string;
  types: { type: { name: string } }[];
  stats: { stat: { name: string }; base_stat: string }[];
};

export async function getPokemon(url: string): Promise<PokemonType> {
  const response = await fetch(url);
  const data = await response.json();

  //   console.log(data);
  return data;
}

export default async function Card({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  const pokemon = await getPokemon(url);

  return (
    <>
      <div className="card-pokemon flex p-4 bg-gray-950 rounded items-center relative">
        <div className="p-2 bg-gray-900 rounded mr-8 ">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width={120}
            height={120}
            alt={name}
          />
        </div>
        <div>
          <span className="mb-2 inline-block py-1 px-6 bg-slate-700 rounded-full text-sm">
            #{pokemon.id}
          </span>
          <h3 className="first-letter:uppercase text-lg font-bold">
            {name.replaceAll("-", " ")}
          </h3>

          <div className="mt-8">
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className={`pokemon-type ${item.type.name} first-letter:uppercase rounded inline-block mr-2 text-sm`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>

        <Modal pokemon={pokemon} />
      </div>
    </>
  );
}
