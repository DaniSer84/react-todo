import Button from "./Button"
import Filter from "../types/Filter.type"
import FiltersType from "../types/FiltersType.type"

// definiamo le props: mettiamo dopo l'oggetto un altro oggetto, dicendo a cosa corrispondono. Qui non sanno cosa sono perché li ho dichiarati nell'altro file. çQuindi meglio fare come prasso una cartella per i tipi e le interfacce. Stilisticamente parlando possiamo definire le props fuori. 

type FiltersProps = {
    setFilter: (name: any) => void,
    filters: FiltersType,
    filter: Filter
}

export default function Filters({setFilter, filters, filter}: FiltersProps) {

    const filterButtons = Object.keys(filters).map(name => <Button 
        key={name}
        action={name} 
        isActive={name === filter} 
        handleClick={() => setFilter(name)} 
        type=""
        />)
    
    return (
        <div className='filter-container'>
            <span className='filtra'>Filtra: </span>
            {filterButtons}
        </div>
    )
}