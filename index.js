const fs = require('fs'),
          fastcsv = require('fast-csv'), 
           argv = require('yargs').argv;

/**
 *Usage : 
 *1. Change directory in the command prompt to the folder where index.js is present
 *2.  Place your csv file in the inputFolder
 *3. node index --file "Sample" --h1 "Actual" --h2 "Production",
 *   where file = Name of the CSV file without .csv extension inside the inputFolder
 *   h1 = Name of the column whose values are to be validated.
 *   h2 = Name of the column against which h1 values are to be validated.
 *4.  Output: ##You know you have the outout when you read "Done creating....."
 *       A CSV file(created inside the outputFolder)  whose name is  csvFileName + Header Label passed in  +  differencessuffix . 
 *       
 *      
 * 
 */

/**
 * TO DO : Code Commenting and documentation
 */
let csvFileName = argv.file,
     header1arg  = argv.h1,
     header2arg  = argv.h2,
     inputFolder = 'inputFolder',
     outputFolder  = 'outputFolder',
     csvFile2ReadPath = `./${inputFolder}/${csvFileName}.csv`,
     differencesSuffix = 'differences',
     header1=header1arg, header2 = header2arg, differencesFile2Create = `./${outputFolder}/${csvFileName}_${header1}_${differencesSuffix}.csv`;

let csvdata = [],header1values = [], header2values=[], differences = [];

fastcsv.fromPath(csvFile2ReadPath, {headers:true})
          .on("data", data=> {
          	  csvdata.push(data);
          })
          .on("end", ()=>{
          	  console.log(`Finished Parsing ${csvFile2ReadPath}`);
          	  csvdata.forEach( (val,index) =>{
          	  	
          	  	header1values.push(val[header1]);
          	  	header2values.push(val[header2]);
          	  });
            
             let header1values_sansempty = header1values.filter(val => val!=='' );
             let header2values_sansempty = header2values.filter(val => val!=='' );
             let header2values_set  = new Set(header2values_sansempty);
      
             console.log('Finding Differences....');
             header1values_sansempty.forEach((val,index)=>{
             	if(header2values_set.has(val)){
             	
             		differences.push({Value : val, status:` Present in ${header2}`, rowNum: index+1});
             	}else{
             		
             		differences.push({Value : val, status:`Not present in ${header2}`, rowNum: index+1});
             	}
             });

             console.log(`Creating file ${differencesFile2Create}`);
             fastcsv.writeToPath(differencesFile2Create,differences, {headers:true}).on("finish", function(){
             	console.log(`Done creating ${differencesFile2Create}...`);
             })


          });


