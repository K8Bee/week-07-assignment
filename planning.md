<!-- Git flow:
 starting from terminal, when in git:(main), type:
 git checkout -b newBranchName
 git add .
 git commit -m "commit message"
 git push --set-upstream origin newBranchName
 Then go to the GitHub repo and click: "compare & pull request", then "create pull request", then "merge pull request", then "confirm merge", then "delete branch"
 back in terminal, type:
 git checkout main
 git pull
 Note: can start a new branch straight away, or make changes and then create the branch as above just before adding, pushing, pulling, deleting the branch
 -->

<!-- Tips for a successful planning stage:
##Draw your wireframe
- Tools: Figma, Ok so, Excalidraw...
- Purpose: to see our app from the user's point of view.

##Plan your database schema
Tools: drawsql
Purpose: to organise our data and to have a clearer idea of the data you need to manipulate.
Questions: how many tables do I need? What is the relationship between the tables?

##Set up your database tables using your schema
Tools: SQL editor on Supabase.
Purpose: to create our tables and seed dummy data.

##Set up your server
Tools: Express and other packages.
Purpose: to have a working "engine" with CR(UD) tasks and routes for our app and a connection to our database.

##Set up your client
Tools: React and other packages.
Purpose: to have an interface to interact with the user.

##Upload the project to GitHub
- Deploy your client and server to Render
Remember to replace your server local host urls in the client with the Render server url.

##(optional, but highly recommended) Organise your tasks in Trello.

##Version control: use each assignment as an opportunity to get better at branches, and pushing code to GitHub.

##Environments: set up .env files in your client to store environment variables and API urls
- Not compulosry - but if do it won't have to worry about swapping urls in client:
e.g. have a .env file where can set up a development env with it's variables, e.g.:
API_ROUTE=http://localhost:8080/addData
then have a .env.production where can set up a production env file with it's variables, e.g.:
API_ROUTE=http://localhost:8080/addData -->
