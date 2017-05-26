# ColumnComparator
Did you want to compare two columns in a CSV file for matches that are case sensitive?
I understand that Vlookup spoils it for you, when you want to compare two columns s the search is case insensitive



# How to Install?

1. git clone https://github.com/anirudhs2005/ColumnComparator
2. Change the directory to the folder with the package.json
3. npm install


# How to run the program?
  1. Change directory in the command prompt to the folder where index.js is present
  2. Place your csv file in the inputFolder.
  3. If the name of your file is "Sample" AND it has two columns called "Actual" and "Production" AND you wish to find if the values present in "Actual" are present in "Production" then run
  4. node index --file "Sample" --h1 "Actual" --h2 "Production"
                   where file = Name of the CSV file without .csv extension inside the inputFolder
                              h1 = Name of the column whose values are to be validated.
                              h2 = Name of the column against which h1 values are to be validated.


 # Output
    **You know you have the output when you read "Done creating....."**
    
    1. A CSV file(created inside the outputFolder)  whose name is  csvFileName + h1 +  differencessuffix variable name in the  index.js file
