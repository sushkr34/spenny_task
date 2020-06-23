const URL=`https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439`

export const userData= async () =>{
    const response = await fetch(URL);
    const res=await response.json()
    if(response.status >=400){
        throw new Error( res.errors);
    }
    return res
}

 