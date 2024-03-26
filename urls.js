const fs = require("node:fs")
const axios = require('axios')

function readURL(path){

    console.log(path[2])
    // Assuming file can be read:
    fs.readFile(path[2], 'utf8', async function(err, data){ 
        if(err){
            console.error(err)
            return
        }
        let output = data.split('\n').filter( (e) => e != "")

        for(let i = 0; i<output.length; i++){
            try{

                let domain = output[i].split('://')
                domain = domain[1].split('/')
                // console.log(domain[0])

                let req = await axios.get(output[i])
                fs.writeFile(`${domain[0]}.txt`, req.data, function (err){
                    if(err){
                        console.error(err)
                        return 
                    }
                    console.log("Wrote data to " + `${domain[0]}.txt`)
                })
            } catch(e){
                console.log("Invalid URL: " + output[i])
            }
            

        }
    })

    
}


readURL(process.argv)