export const createNewEvent=(user,photoURL,event)=>{
    return{
        ...event,
        hostUid : user.uid,
        hostedBy : user.displayName,
        hostPhotoURL : photoURL || "/assets/user.png",
        created : new Date(),
        attendees : {
            [user.uid] : {
                going : true,
                joinDate : new Date(),
                hostPhotoURL : photoURL || "/assets/user.png",
                displayName : user.displayName,
                host : true
            }
        }
    }
}