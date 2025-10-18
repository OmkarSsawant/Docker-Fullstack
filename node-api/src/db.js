
import  {Pool} from  'pg';

import 'dotenv/config' ;


const DB_URI = process.env.DB_URI || ""

console.log(DB_URI);

const pool=  new Pool({
 connectionString:DB_URI
})





export const getDBTime = async  ()=> {
   await pool.connect()
    
    const res = await pool.query("SELECT NOW() as time")
    // console.log(res.rows[0].time);
    return res.rows[0].time;     
}