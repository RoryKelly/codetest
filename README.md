# Tasks 1
- Using the sql database/query library of your choice to add an extra field to the "todo" column that represents the creation time and the
update time.

# Tasks 1.5 (requires some graphQl knowledge)
- using a HTTP header set a userId and retrieve that user from the database
- return it from the `me` API.

# Task 2:
- the application will allow users to make posts of many types.
  - `ImagePost`
  - `TextPost`
- Each post should have a single ID that is Globally unique. I.E No `ImagePost.id == TextPost.id`.
- Design a database schema that will support multiple post types (hint: table inheritance if possible) .


# Task 3: (requires some graphQl knowledge)
- I want a single query `posts()` that return all posts.

# Task 4: 
- Dockerise the application
   - Run the seed script
   - add database to the dockerfile
   - run the application



