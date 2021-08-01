# Academic Calendar (From Notion)
Notion is a productivity app I use regularly. It has so many kinds of data storage options - to-do lists, calendars, Kanban boards, etc. They recently released an API that allows you to fetch data from your Notion app using a secret token (just like one you would connect to a database like MongoDB). This is a website that uses the notion API to retrieve data from my notion calendar where I update all the important college activities and displays it. The possibilities are endless and you can almost use it as a CMS :P

I've used React to make the UI, and Node and Express to set up the backend server that fetches data from my Notion app.

## Using the Notion API 
https://developers.notion.com/docs/getting-started

Login to your Notion account and create a new page with a database of your choice (I've used a calendar). Create an integration and link it to the database you have created. Add the secret token of the integration and the database id of the database as environment variables

You can use the Notion SDK for Javascript as a dependency, it's a client that makes using the Notion API a lot easier (https://github.com/makenotion/notion-sdk-js)

In the function you use to make the POST request to the required endpoint, you can collect all the properties you want by digging into the page objects that are returned in the result. For instance, I had to get to page.properties.Name.title[0].text.content to get the titles of the events in my Academic Calendar database

## To check it out
'npm install' and 'npm run dev' after adding your environment variables. It runs the backend server on port 5000 and the frontend react app on 3000
