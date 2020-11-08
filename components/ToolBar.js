import * as React from 'react';

import styled from 'styled-components/native'

import {Ionicons,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'

import Avatar from "./Avatar"

const Container = styled.View`
    width: 100%;
    height: 92px;
`
const Row = styled.View`
    flex-direction: row;
    background: #ffffff;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`

const Input = styled.TextInput`
    height: 50px;
    width: 100%;
    padding: 0 8px;
`

const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background: #f0f0f0;
`

const Menu = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 42px;
`

const MenuText = styled.Text`
    padding-left: 11px;
    font-weight: 500;
    font-size: 12px;
`

const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;
`

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #f0f2f5;
    
`

const ToolBar = () => {

    return(
        <>
        <Container>
            <Row>
                <Avatar
                    source = {require('../assets/user1.jpg')} />
                    <Input
                        placeholder = "Ne düşünüyorsun?"
                    />
            </Row>
            <Divider/>
            <Row>
                <Menu>
                    <Ionicons
                    name="ios-videocam"
                    size={22}
                    color = "#F44337"
                    />
                    <MenuText>Canlı</MenuText>
                </Menu>
                <Separator></Separator>
                <Menu>
                    <MaterialIcons
                    name="photo-size-select-actual"
                    size={20}
                    color="#4CAF50"
                    />
                    <MenuText>
                        Fotoğraf
                    </MenuText>
                </Menu>
                <Separator/>
                <Menu>
                    <MaterialCommunityIcons
                    name="video-plus"
                    size={22}
                    color="#E141FC"
                    />
                    <MenuText>
                        Oda
                    </MenuText>
                </Menu>
            </Row>
        </Container>
            <BottomDivider/>
            </>

    )

}

export default ToolBar