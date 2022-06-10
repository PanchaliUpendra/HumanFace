import React,{useEffect,useState} from 'react';
import './Apifolder.css'
import Makecard from '../Makecard/Makecard';
function Apifolder(){
    const [data,setdata]=useState(null);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            throw res;
        })
        .then(data=>{
            setdata(data);

        })
        .catch(error =>{
            console.error("errorfetching data:",error);
            seterror(error);
        })
        .finally(()=>{
            setloading(false);
        })
    },[])

    if(loading) return "Loading.....";
    if(error) return "Error....";
    return(
        <div>
            <h1>data of different persond</h1>
        
        <div className='cards'>
            
            {
                data.map(items=>{
                    return(
                        <Makecard item={items}/>
                    )
    })
            }
        </div>
        </div>
    );
}
export default Apifolder;