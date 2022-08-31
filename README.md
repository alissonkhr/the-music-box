## The Music Box
App created using Node.js, Mongoose, Express, Bulma CSS Framework, and EJS.
<br />
A place for anyone to share music, either an album or just a song, where hopefully an entire collection of music to browse through will be stored!<br />

## Project Description
Music Post Model/Schema will include: <br />

Song/Album Title: String <br />
Artist: String <br />
Song/Album Image: URL <br />
Album Checkbox: Boolean <br />
Note: String <br />

A list of routes: <br />

GET(index) /music/ allows users to see collection of music<br />
GET(show) /music/:id/ allows users to see the selected music post in more detail<br />
GET(new) /music/new/ allows users to add a new music post to collection<br />
POST(create) /music/ allows users to have music post stored in index route<br />
GET(edit) /music/:id/edit/ allows users to edit selected music post<br />
PUT(update) /music/ allows users to store edited music post with the new info<br />
DELETE(destroy) /music/ allows users to delete a music post<br />

General flow of project completion was creating the server and establishing the connection, then creating the model, applying all the routes with an established connection, seeding the online database collection into project and then styling it all for deployment.

## Wireframes
> Wireframes with basic page layouts<br />
> ![P2ShowPage](https://user-images.githubusercontent.com/104875707/185763245-a5cafc9f-50ea-4e60-abe8-b5af48bebada.jpg)
> ![P2IndexPage](https://user-images.githubusercontent.com/104875707/185763248-0692a515-197a-41d2-a33e-0d2ae1acc66c.jpg)
> ![P2NewPage](https://user-images.githubusercontent.com/104875707/185763252-d5d39fc2-6073-4cea-bcab-eb66d84682aa.jpg)




## User Stories
> User should be able to view collection of songs to browse through (added by previous users of the site)<br />
> User should be able to select each one to see more info and any comment from the person that posted it originally<br />
> User should be able to edit/delete any of the posts (Hope to make this a stretch goal where only the original creator of the data can do that)<br />
> User should be able to add a new post to the collection<br />

### MVP Goals
> Adhere to the MVC file structure: Models, Views, Controllers using Node.js, Mongoose, Express and EJS<br />
> One model with all 7 RESTful routes and full CRUD<br />
> Use new CSS Framework<br />
> At least one Github commit per day of working on the project<br />

### Unsolved Problems
> None as of yet, but want to create a way to disable the submit button for a new post until data is entered to avoid potential bugs.<br />
> Make the show page cleaner for mobile view.


### Stretch Goals
> Be able to add log in functionality so someone's post is their own to edit, delete, view, etc and they could just organize their own music box library for themselves instead of it being one to share with the world<br />
> Add a way to include lyric/music videos in the show page of the posts<br />
> Add a way for users to comment and interact with each other's posts<br />
