## Setting Up MongoDB

<!--

🔴 While Querying from DB :
From database when object get returns technically it is not just an javascript object infact it is the mongoose object.

So we can do optimisation  - we can tried to avoid the creation of mongoose object all together. We can use -
✅ .lean()  : this will not return the mongoose object infact now the mongoose object will act as a javascript object. Changes won't get reflected but not the returned response will be javascript object.


PAGINATION -
     skip(offset) - skipped the first two tweet
     limit(limit) - put the limit

📓 console.log(tweet[0].id); So here "id" property doesn't exists but still we are able to fetch due to VIRTUAL PROPERTIES.

You can make Virtual properties using getters and setters.
 -->
