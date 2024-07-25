import Filter from "./Filter.type"
import FilterFunction from "./FilterFunction.type"

type FiltersType = {
    // possono esserci dentro n proprietà, l'importante è che abbia una chiave che corrisponde all'elenco dei filtri e come valore corrisponda a una funzione FilterF.
    [key in Filter]: FilterFunction
}

export default FiltersType