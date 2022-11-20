import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore";

function Detail() {
    const { id } = useParams();
    const [Movie, setDetailData] = useState({});


    const fetchMovie = async (ID) => {
        try {
            const querySnapshot = await getDocs(collection(db, "movies"));
            querySnapshot.forEach(doc => {
                if (doc.id === ID) {
                    return setDetailData((doc.data()));
                }
            });
        } catch (error) {
            alert(error.message)
        }
    };

    useEffect(() => {
        fetchMovie(id);

        return () => {
            setDetailData({});
        };
    }, [id])

    return (
        <Conatiner>

            {
                Movie && (

                    <>

                        <BackGround >
                            <img src={Movie.BackgroundImg} alt={Movie.Title} />
                        </BackGround>

                        <ImageTittle>
                            <img src={Movie.TitleImg} alt={Movie.Title} />
                        </ImageTittle>

                        <Controls>
                            <PlayButton>
                                <img src='/images/play-icon-black.png' alt='play' />
                                <span>PLAY</span>

                            </PlayButton>
                            <TrailerButton>
                                <img src='/images/play-icon-white.png' alt='play' />
                                <span>TRAILER</span>
                            </TrailerButton>
                            <AddButton>
                                <span>+</span>
                            </AddButton>
                            <GroupWatchButton>
                                <img src="/images/group-icon.png" alt='group' />
                            </GroupWatchButton>
                        </Controls>

                        <SubTittle>
                            {Movie.Genres}
                        </SubTittle>

                        <Description>
                            {Movie.Description}
                        </Description>
                    </>
                )
            }
        </Conatiner>
    )
}

export default Detail

const Conatiner = styled.div`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
`;

const BackGround = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`;

const ImageTittle = styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;

img{
    width:100%;
    height:100;
    object-fit:contain;
}
`;

const Controls = styled.div`
display:flex;
align-items:center;

`;

const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
border:none;
background:rgb(249 249 249);
padding:0 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
    background:rgb(198 198 198);
}
`;
const TrailerButton = styled(PlayButton)`
background:rgba(0, 0, 0, 0.3);
border:1px solid rgb(249 249 249);
color: rgb(249 249 249);
`;
const AddButton = styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor:pointer;

span{
    font-size:30px;
    color:white;
}
`;
const GroupWatchButton = styled(AddButton)`
backgroud:rgb(0, 0, 0);
`;

const SubTittle = styled.div`
color: rgb(249 249 249);
font-sze:15px;
min-height:20px;
margin-top:26px;
`;

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249, 249, 249);
`;