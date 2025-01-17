import React from 'react'
import { useState } from 'react'
import {AsyncPaginate} from "react-select-async-paginate"

import { geoApiOptions  } from '../../api';
import { url } from '../../api';
function Search({onSearchChange}) {
  
  const [search,setSearch] = useState(null);

 

    const handleOnChange =(searchData)=>{

       setSearch(searchData);
       onSearchChange(searchData);

    }



      const loadOptions = (inputValue) =>{

        return fetch(`${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,geoApiOptions)
         .then(response => response.json())
         .then((response) =>{

             return {

                options :response.data.map((city)=>{

                 return{
                  value:  `${city.latitude} ${city.longitude}`,

                  label:`${city.name}  ,${city.countryCode}`
                 }

                })
             }




         })
         .catch(err => console.error(err));
      }

  return (
    <div>
     <AsyncPaginate
     
     placeholder="Search for city"
     
     debounceTimeout={600}
       value={search}
       onChange={handleOnChange}
       loadOptions={loadOptions}
     >
        
          
     </AsyncPaginate>
    </div>
  )
}

export default Search
