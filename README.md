# ColumnComparator
Did you want to compare one column in a CSV file for matches in the rest of the columns?
Ex: Compare Column1 with Column2 , Column3 and Column4 and tell us if Values in Column1 are present in the rest



# How to Install?

1. git clone https://github.com/anirudhs2005/ColumnComparator
2. Change the directory to the folder with the package.json
3. npm install


# How to run the program?
  >Assume the following to understand how to execute a command:
  >File Name : Sample.csv
  >Headers : Actual, Production, Sandbox
  1. Change directory in the command prompt to the folder where index.js is present
  2. Place your csv file in the inputFolder.
  3. Validate against a Single Column:
    1. Suppose you wish to compare the Column "Actual" with the column "Production". Run the following command:
        - node index --file "Sample" --h1 "Actual" --rest "Production"
4. Validate a column against Multiple Columns:
    1. Suppose you wish to compare the Column "Actual" with the column "Production" and the column "Sandbox". Run the following command:
       -  node index --file "Sample" --h1 "Actual" --rest "Production" --rest "Sandbox".



 # Output

    1. A CSV file(created inside the outputFolder)  whose name is  csvFileName + h1 +  differencessuffix variable name in the  index.js file
    2. Check the Sample_Actual_differences.csv for more information on the output
