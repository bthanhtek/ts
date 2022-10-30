/*
1. Design a way to handle errors for the following API, using one of the patterns
from this chapter. In this API, every operation might fail—feel free to update the
API’s method signatures to allow for failures (or don’t, if you prefer). Think
about how you might perform a sequence of actions while handling errors that
come up (e.g., getting the logged-in user’s ID, then getting their list of friends,
then getting each friend’s name):
class API {
getLoggedInUserID(): UserID
getFriendIDs(userID: UserID): UserID[]
getUserName(userID: UserID): string
}

type UserID = string

class API {
  getLoggedInUserID(): UserID | Error{
    let id : string = "do something"
    if(!id){
      return  new Error('Something bad happened');
    }
    return id
  }
  getFriendIDs(userID: UserID): UserID[] | Error {
      if(!userID){
        return new Error('Something bad happened');
      }
    return []
  }
  getUserName(userID: UserID): string | Error {
     if(!userID){
        return new Error('Something bad happened');
      }
    return "name"    
  }
}

*/