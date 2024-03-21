import React from 'react';
import {
    View,
    Text
} from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import { useSelector } from 'react-redux';

const Profile = () => {

    const user = useSelector(state => state?.login?.userInfo);
    console.log("user", user)

    return (
        <View>
            <ProfileHeader></ProfileHeader>
            <Text style={{ color: 'black' }}>{user.name}</Text>
        </View>
    )
}

export default Profile;