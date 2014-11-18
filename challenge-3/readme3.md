Challenge Three: Express and Request Routing

Create an Express application which responds to an HTTP GET request, and renders an HTML page using the EJS template engine. This HTML page should contain a form, which issues a POST action to log in a user, then redirect back to the same page.

The POST action should store the user's username somehow - either in memory (store in an object) or in a cookie. On every GET request to the form, the app should check for a logged-in user using connect middleware. If the username has been stored, it should be displayed in the HTML page using a context variable for the EJS template engine.