## Setting Up MongoDB

🔴 While Querying from DB :
From database when object get returns technically it is not just an javascript object infact it is the mongoose object.

So we can do optimisation - we can tried to avoid the creation of mongoose object all together. We can use -
✅ .lean() : this will not return the mongoose object infact now the mongoose object will act as a javascript object. Changes won't get reflected but not the returned response will be javascript object.

🟢 PAGINATION -
skip(offset) - skipped the first two tweet
limit(limit) - put the limit

🟢 VIRTUAL PROPERTY -
📓 console.log(tweet[0].id); So here "id" property doesn't exists but still we are able to fetch due to VIRTUAL PROPERTIES.
You can make Virtual properties using getters and setters.

🟢 MIDDLEWARES in MONGO -
This is Similar to sequelize hooks.

CONCEPT : both NoSQL and SQL support indexing
🟢 INDEXING  
 -> technique for improving database performance by reducing the number of disk accesses necessary when a query is run .
-> An index is form of data structure.
-> MongoDB without indexing will perform a collection scan (like will do linear searching ) i.e scan every document in collection to select those element which match the query statement. collection == tables , documents == rows . Ex tweet:collection , tweetEntries:document
-> But if an appropiate index exists for a query , MongoDB can use the index to limit the number of documents it must inspect.
-> Example: B+ trees,Tries,hashing are used to store indexes.
Refer : <https://mongoosejs.com/docs>
