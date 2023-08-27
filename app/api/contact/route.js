
import * as fs from 'fs'

export async function POST(req , res){
    // console.log(req.body)
    const data = await req.json()
    // console.log(data)
    let dirData = await fs.promises.readdir('contactdata')
    // console.log(dirData.length)
    fs.promises.writeFile(`contactdata/${dirData.length + 1}.json` , JSON.stringify(data))
    try{
        return new Response(data);
    }
    catch(err){
        return new Response(JSON.stringify({message: 'An error occured'}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        });
    }
}
