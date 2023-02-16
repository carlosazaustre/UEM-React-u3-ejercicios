import PropTypes from "prop-types";
import { useFetch } from "./hooks/useFetch";

export default function PokemonList({ apiURL }) {
  const { data, loading } = useFetch(apiURL);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <ul>
          {data.map((item, index) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

PokemonList.propTypes = {
  apiURL: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  config: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

// PokemonList.defaultProps = {
//   apiURL: "https://pokeapi.co/api/v2/pokemon",
// };
