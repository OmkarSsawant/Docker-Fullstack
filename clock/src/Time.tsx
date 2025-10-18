import {  useQuery } from "@tanstack/react-query";
import axios from "axios";


type CurrentTimeProps = {
    api:string,
children?: React.ReactNode;
}


export function CurrentTime(props:CurrentTimeProps){




    const {isPending ,data ,error} = useQuery({
        queryKey:[props.api],
        queryFn:()=>
        {
            return axios.get(props.api).then(r=>{
                let d = r.data.time
            console.log(d);
            return d
            })
        }
    })
    if(isPending) return <center><h1>Loading</h1></center>
   if(error) return <center><h1>{error.message+""}</h1></center>
   return (<>
   <div style={{
    backgroundColor:"black",
    color:"white",
    padding:"2rem",
    borderRadius:"12px",
    fontWeight:"bold"
   }}>
    <span style={{color:"lightskyblue",fontSize:"1.5rem"}}>&gt;   </span>   {data}
    </div>
    </>)
}