# Movies
This project is created with React and built with WebPack along with some other dependencies such as redux and react router.

This project contains with five pages: 
Home page to select category page, 
Category page with list of movies of certain category, 
Search page with list of movies that matched the keywords
Movie detail page with the detail of certain movie and able to add item to cart from this page
Shoping cart page show the items in the cart

All pages share the same fixed header, which contains : 1 search input and 2 buttons, one to homepage, the others is to shopping cart page. 

Both Category and Search pages are with infinite scroll. Searching action is fired once typing at the searching input. 
Whenever the search action is fired, we will be brought to Search page automatically.  

At Movie detail page, once add item to cart, this page will load the cart under the movie detail page. 
We are able to remove, empty the cart as well as update purchase quantity both at the shopping cart page and movie detail page once the cart is loaded below the detail.




## Instruction

First clone this repo, add this line in the terminal: `git clone https://github.com/UXDESIGNERLIN/Movies.git` to your local folder.
After cloning, you shall see all of the files. 

Second, go to `/Movies` do `npm i` at the terminal to install node_modules.

Lastly, to run in your local host, in the same folder '/Movies' run `npm start`. This will automatically generate a window in your browser at the link `http://localhost:8080/`
