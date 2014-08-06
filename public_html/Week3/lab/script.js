/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */
//Creating an array that has 5 objects called "ADS"
var ads = [];
             
                         
ads.push({ 
    "title": 'One', 
    "desc" : 'this is 1 because I can use it' 
});
ads.push({ 
    "title": 'TWO', 
    "desc" : 'this is 2 because I can use it' 
});
ads.push({ 
    "title": 'THREE', 
    "desc" : 'this is 3 because I can use it' 
});
ads.push({ 
    "title": 'FOUR', 
    "desc" : 'this is 4 because I can use it' 
});

ads.push({ 
    "title": 'FIVE', 
    "desc" : 'this is 5 because I can use it' 
});

                //Using math function random to get a random title everytime
               //Using ads.length so if ads are added it uses the whole index
             var rand = Math.floor( Math.random()*ads.length);
             
             
             // Displaying the ad using inner html calling the description
             var div = document.getElementById("ad");
             div.innerHTML = ads[rand].desc;
            
            //Adding three dots to whatver title is selected
            document.title = ads[rand].title + '...';
          
            
           