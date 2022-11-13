import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useEffect } from 'react'
import db from '../firebase'
import { onSnapshot, collection, query } from "firebase/firestore";


function Home() {
    useEffect(() => {
        const q = query(collection(db, "movies"));
        const unsub = onSnapshot(q, (snapshot) => {
            console.log(snapshot.docs);
        })
    }, []);

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
overflow-x:hidden;

&:before{
    background:url("/images/home-background.png") center center / cover no-repeat fixed;
    content:"";
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:-1;

}
`;