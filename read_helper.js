
        const csv=require('csvtojson')
        csv({
            noheader:true,
            output: "csv"
        })
            .fromString(csvStr)
            .then((csvRow)=>{
                console.log(csvRow)
            })