import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Hollywood from "./Hollywood";
import Trending from './Trending'
import Viewers from './Viewers'
import Originals from './Original'
import KidsTv from './KidsTv'
import { useEffect } from 'react'
import db from '../firebase'
import { onSnapshot, collection, query } from "firebase/firestore";
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/Movies/movieSlice'



function Home() {
    const dispatch = useDispatch();
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let hollywood = [];
    let kidsTv = [];
    let trending = [];

    useEffect(() => {
        const q = query(collection(db, "Movies"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.map((doc) => {

                switch (doc.data().type) {
                    case "popular":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;

                    case "newTo":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;

                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case "hollywood":
                        hollywood = [...hollywood, { id: doc.id, ...doc.data() }];
                        break;

                    case "kidsTv":
                        kidsTv = [...kidsTv, { id: doc.id, ...doc.data() }];
                        break;

                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            })

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                hollywood: hollywood,
                kidstv: kidsTv,
                trending: trending,
            }));
        });

    }, []);


    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <Trending />
            <KidsTv />
            <NewDisney />
            <Originals />
            <Hollywood />
        </Container>
    )
}

export default Home

const Container = styled.main`
position: relative;
min-height: calc(100vh - 210px);
overflow-x: hidden;
display: block;
top: 70px;
padding: 10px calc(2.7vw + 5px);
&:after {
    background:url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;