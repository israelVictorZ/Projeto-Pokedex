import Card from "@/components/Cads";

async function getPokemons() {
  const maxPokemons = 50;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  return data.results;
}

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold text-center mb-20">
          <span className="text-red-700">Poke</span>dex
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {pokemons.map((pokemon: { name: string, url: string }) => (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      </div>
    </>
  );
}