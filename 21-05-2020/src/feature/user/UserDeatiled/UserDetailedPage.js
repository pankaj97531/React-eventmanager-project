import React,{ Component } from 'react';
import {  Grid } from 'semantic-ui-react';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedDescription from './UserDetailedDescription';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDeatiledSidebar from './UserDeatiledSidebar';
import UserDetailedEvents from './UserDetailedEvents';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const query = ({ auth })=>{
  return [{
    collection : "users",
    doc : auth.uid,
    subcollections : [{collection:"photo"}]
  }]
}
const mapState=(state)=>({
  profile : state.firebase.profile,
  auth : state.firebase.auth,
  photos : state.firestore.ordered.photo
})

class UserDetailedPage extends Component{
    render(){
      const { profile,photos } = this.props;
        return(
            <Grid>
            <UserDetailedHeader profile={profile} />
            <UserDetailedDescription profile={profile} />
            <UserDeatiledSidebar />
            {photos && photos.length > 0 && 
            <UserDetailedPhotos photos={photos} />
            }
            <UserDetailedEvents />
          </Grid>
        )
    }
}

export default compose(connect(mapState),firestoreConnect(auth=>query(auth)))(UserDetailedPage)