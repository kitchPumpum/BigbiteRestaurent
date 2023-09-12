# bigbiterestaurant

GainAm Project for a restaurant website

## HOW TO SETUP THIS PROJECT ON YOUR LOCAL MACHINE
Steps:
1. Download and install git if you haven't done so. Follow this Link [here](https://git-scm.com/downloads)
2. Setup your git profile on your local git installation by following the command
   - git config --global user.email 'your-email-address-here'
   - git config --global user.name 'your-name-here'
3. Navigate to your where you want the project to be in your machine. the run below commands.
  - git clone https://github.com/jagajastic/bigbiterestaurant.git
If you have done the above correctly, you should have a folder called 'bigbiterestaurant' in the location you ran the step 3 command.
4. Open the folder 'bigbiterestaurant' in your code editor to complete the setup.
5. Now open the terminal in your code editor and run `cd Frontend`. That will move you into the frontend folder if you are to work on the frontend task.
6. In the Future we might have a `Backend` folder too, so if you are to work in the backend then you should do `cd Backend` to move into the backend folder and work.


## TO RUN THE FRONTEND ANGULAR 
Steps:
1. Run `npm install` this will install all needed dependencies 
2. Run  `ng serve` this will start the application for you
3. You should locate the http://localhost:4200. should in case your port is not 4200, replace it with your port.
  That is it. good to go
### ISSUES
Windows; 
If you try committing and pushing your work and face a Set-ExecutionPolicy Error like the below image;
![windows-error](https://github.com/jagajastic/bigbiterestaurant/assets/28712864/b1bc8971-e7c3-4f75-884c-9f7dd43110ac)


### FIX
Run the following command

<be />

`Set-ExecutionPolicy RemoteSigned`

That should fix the issue, Now try committing and pushing your work, You are welcome.

<br />

Note: The above command should be run in your PowerShell. 

### GIT BASIC COMMANDS
- `git init` This initializes git on your current folder. do this if and only if you are starting a new project that is not cloned from github.com
- `git checkout -b 'name-of-your-branch'` This creates a git branch and moves you into the branch.
- `git checkout 'name-of-branch'` This helps you to change from one branch(current branch) to another branch(the branch you want to move to)
- `git pull origin 'name-of-your-origin'` This helps you pull changes from github to your local machine.
- `git fetch --all` This helps you to fetch new and updated branches.
- `git fetch ` This does the same as the above.
- `git add .` Add all your changes to the staging area.
- `git add 'name-of-file'` Add the 'name-of-file' to your staging area. You do this if you want to add a single file to your staging area.
- `git commit -m 'write-your-commit-message-here'` It helps you add a commit to your staging
- `git push origin 'name-of-your-branch'` This helps you to push the changes you have made on your machine to the online github repository.

<br />
This is not the only git command that exists, they are more! you can learn more [here](https://git-scm.com/book/en/v2) 

## HOW THE BACKEND WAS SETUP AND CONNECTED TO DATABASE (IDE USED FOR BACKEND - VISUAL STUDIO COMMUNITY VERSION, DATABASE USED - MICROSOFT SQL SERVER MANAGEMENT STUDIO)
-   created the Project named "Backend" with ".net core web api" with version 7 of .net in Microsoft Visual Studio
-   created the "Model" Folder in solution explorer and created the "User.cs" class for the user model.
-   created the "Data" folder and class named "BackendDbContext"
-   injected the dependency of dB Context inside Program.cs file
-   and setup the connection string by the name of "BackendConnectionString" for database connection with your own "SQL Server Name" inside "appsettings.json" file
-   from the Tools added migration and updated database to create the "BigBiteRestaurantdb" database and "Users" table in the database in the `Microsoft SQL Server Management Studio`.


## HOW YOU CAN SETUP BACKEND ON YOUR MACHINE
-   go to your BigBiteResaurant Project that you cloned from Repository
-   open the Backend.sln in Visual Studio community 2022 (Download it if you dont have it from https://visualstudio.microsoft.com/free-developer-offers/).
-   also make sure you have set up  `MICROSOFT SQL SERVER MANAGEMENT STUDIO` on your machine
-   you can downlaod it from https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16#download-ssms
-   go to `appsettings.json` file and inside connection strings update the server name with your own `SQL Server Name`
-   delete the `migrations files` if you see any file inside your backend project's `migrations folder` in solution explorer
-   open package manager console from `tools - nuget package manager - package manager console`
-   inside package manager console run command `Add-Migration "Migration Name"` , for exmaple  `Add-Migration FirstMigration`
-   after that run command `Update-Database`
-   it will create the database named `BigBIteRestaurantDb`  and the table named `user` in SQL Server management studio.  
-   now your backend is connected with the datbase.  

   

