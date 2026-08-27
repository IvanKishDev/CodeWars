// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:


const whosOnline = (friends) => {
    
const onlineFriends = {}

for (let i = 0; i < friends.length; i++){

if (friends[i].status === "online" && friends[i].lastActivity <= 10){
if (!onlineFriends.online)
onlineFriends.online = []
onlineFriends.online.push(friends[i].username)
} else if (friends[i].status === "online" && friends[i].lastActivity > 10){
if (!onlineFriends.away)
onlineFriends.away = []
onlineFriends.away.push(friends[i].username)
} else if (friends[i].status === "offline"){
if (!onlineFriends.offline)
onlineFriends.offline = []
onlineFriends.offline.push(friends[i].username)
}

}
return onlineFriends
}

