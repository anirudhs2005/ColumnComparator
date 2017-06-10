const fs = require('fs'),
          fastcsv = require('fast-csv'),
           argv = require('yargs').argv;
const YES = 'Yes',
      NO = 'No';
/**
 *Usage :
 *
 *
 *Assume the following to understand how to execute a command: >File Name : Sample.csv >Headers in the CSV file : Actual, Production, Sandbox
1.Change directory in the command prompt to the folder where index.js is present
2. Validate against a Single Column:
   Suppose you wish to compare the Column "Actual" with the column "Production". Run the following command: 
     node index --file "Sample" --h1 "Actual" --rest "Production"
3.Validate a column against Multiple Columns:
4. Suppose you wish to compare the Column "Actual" with the column "Production" and the column "Sandbox". Run the following command:
       node index --file "Sample" --h1 "Actual" --rest "Production" --rest "Sandbox".
 *
 */

/**
 * TO DO : Code Commenting and documentation
 */
let csvFileName = argv.file,
     header1arg  = argv.h1,
     header2arg  = argv.rest,
     inputFolder = 'inputFolder',
     outputFolder  = 'outputFolder',
     csvFile2ReadPath = `./${inputFolder}/${csvFileName}.csv`,
     differencesSuffix = 'differences',
     header1=header1arg, rest = [].concat(header2arg), differencesFile2Create = `./${outputFolder}/${csvFileName}_${header1}_${differencesSuffix}.csv`;

let csvdata = [],header1values = [], header2values=[], restOfTheHeaderValues = [] ,differences = [];


fastcsv.fromPath(csvFile2ReadPath, {headers:true})
          .on("data", data=> {
          	  csvdata.push(data);
          })
          .on("end", ()=>{
          	  console.log(`Finished Parsing ${csvFile2ReadPath}`);
          	  csvdata.forEach( (val,index) =>{

          	  	header1values.push(val[header1]);
                rest.forEach((h,i)=>{
                         if(restOfTheHeaderValues.hasOwnProperty(h)){
                             restOfTheHeaderValues[h].push(val[h]);
                         }else{
                            restOfTheHeaderValues[h] = [];
                            restOfTheHeaderValues[h].push(val[h]);
                         }
                });

          	  });


             let empty_filter = function(val){
                return val!=='';
             }
             let header1values_sansempty = header1values.filter(empty_filter);

             console.log('Finding Differences....');
             header1values_sansempty.forEach((val,index)=>{
               //Iterate over the rest of the headers
               let headers_status = {};
               rest.forEach((h)=>{
                  let headerToBeComparedWith = h;
                  let headerToBeComparedWithValues = restOfTheHeaderValues[headerToBeComparedWith];
                  let headerToBeComparedWithValues_sansempty = headerToBeComparedWithValues.filter(empty_filter);
                  let headerToBeComparedWithValues_Set = new Set(headerToBeComparedWithValues_sansempty);
                  if(headerToBeComparedWithValues_Set.has(val)){
                    headers_status[headerToBeComparedWith] = YES;

                  }else{
                      headers_status[headerToBeComparedWith] = NO;
                  }

               });
               let difference_row = Object.assign({},{[header1]:val},headers_status);
               differences.push(difference_row);

             });


             console.log(`Creating file ${differencesFile2Create}`);
             fastcsv.writeToPath(differencesFile2Create,differences, {headers:true}).on("finish", function(){
             	console.log(`Done creating ${differencesFile2Create}...`);
             })


          });
