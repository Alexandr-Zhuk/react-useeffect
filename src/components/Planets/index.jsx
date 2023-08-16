import axios from 'axios';
import {useState, useEffect} from 'react';
import { InfinitySpin } from 'react-loader-spinner'

function Planets(){

    const [infoPlanet, setInfoPlanet] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getPlanet = async() => {
        const result = await axios.get('https://swapi.dev/api/planets/3/');
        setInfoPlanet(result.data)
        setIsLoading(false);
    };
    
    useEffect(() => {
      getPlanet();
    }, []);
   
    return(
        <div>
            {isLoading 
                ? 
                <InfinitySpin 
                    width='200'
                    color="#4fa94d"
                />
                :
                <div className="planet">
                    <h1>
                        {infoPlanet.name}
                    </h1>
                    <p>
                        {infoPlanet.climate}
                    </p>
                </div>
            }
        </div>
    );
}

export default Planets;