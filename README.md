# ColumnComparator
Did you want to compare one column in a CSV file for matches in the rest of the columns?
Ex: Compare Column1 with Column2 , Column3 and Column4 and tell us if Values in Column1 are present in the rest



# How to Install?

1. git clone https://github.com/anirudhs2005/ColumnComparator
2. Change the directory to the folder with the package.json
3. npm install


# How to run the program?
  1. Change directory in the command prompt to the folder where index.js is present
  2. Place your csv file in the inputFolder.
  3. If the name of your file is "Sample" AND it has two columns called "Actual" and "Production" AND you wish to find if the values present in "Actual" are present in "Production" then run
  4. node index --file "Sample" --h1 "Actual" --rest "Production"
  5. Here  file = Name of the CSV file without .csv extension inside the inputFolder
                              h1 = Name of the column whose values are to be validated.
                              h2 = Name of the column against which h1 values are to be validated.
  6. Multiple Columns:
  7. node index --file "Sample" --h1 "Actual" --rest "Production" --rest "Sandbox".
     >If the Actual column in the Sample file needs to be compared with "Production" and "Sandbox" column then use this format



 # Output
    **You know you have the output when you read "Done creating....."**

    1. A CSV file(created inside the outputFolder)  whose name is  csvFileName + h1 +  differencessuffix variable name in the  index.js file
    2. Check the Sample_Actual_differences.csv for more information on the output
