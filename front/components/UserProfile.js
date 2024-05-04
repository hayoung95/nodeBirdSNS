import React, {useCallback, useState} from 'react';
import {Avatar, Button, Card} from 'antd';

const UserProfile = ({setIsLoggedIn}) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return(
        <Card actions={[
            <div key="twit">하영하영<br />0</div>,
            <div key="followings">팔로잉 수<br />0</div>,
            <div key="followers">팔로워 수<br />0</div>
        ]}>
            <Card.Meta avatar={<Avatar>HY</Avatar>} title="hayoung" />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>

    );

}

export default UserProfile;