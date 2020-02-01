
const test_csv = 'test.csv';
const init = 800;
const csv=require('csvtojson')
csv({
    noheader:true,
    output: "csv"
})
    .fromString(test_csv)
    .then((csvRow)=>{
        console.log(csvRow)
    })