import React from 'react'
import styled from 'styled-components'




function Detail() {
    return (
        <Container>
            <Background>
                <img src= "/images/Avengers2012.jpg"  alt=""/>
            </Background>
            <ImageTitle>
                    <h4>The Avengers</h4>
            </ImageTitle>
            <Controls>
            <PlayButton>
                <img src = "/images/play-icon-black.png"  alt="" />
                <span>Play</span>
                
            </PlayButton>
            <TrailerButton>
            <img src = "/images/play-icon-white.png"  alt=""/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
             <span>+</span>
            </AddButton>
            <GroupWatchButton>
            <img src= "/images/group-icon.png"  alt=""/>
            </GroupWatchButton>

            </Controls>

            <Subtitle>
                2012 * 2 hr 17 min * Superhero * U/A 13+ * English
            </Subtitle>
            <Description>
            Nick Fury finds himself in need of a team to pull the world back from the brink of disaster by launching the Avengers initiative.

            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
   
       
        position: fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        z-index:-1;
        opacity:0.8;

    img {
        width:100%;
        height:100%;
        object-fit:cover;

    }


`

const ImageTitle = styled.div`
        font-size: 32px;
        letter-spacing : 1.5px;
        position:relative;
        


`

const Controls = styled.div`

        display : flex;
        align-items: center;
`
const PlayButton = styled.button`
        border-radius: 4px;
        font-size:15px;
        display: flex;
        align-items: center;
        height:56px;
        background : rgb(249,249,249);
        border:none;
        padding: 0 24px;
        margin-right: 22px;
        letter-spacing : 1.8px;
        cursor:pointer;
        text-transform: uppercase;

        &:hover{
            background : rgb(198,198,198);
           

        }

`
const TrailerButton = styled(PlayButton)`

        background : rgba(0,0,0,0.3);
        border : 1px solid rgb(249,249,249);
        color : rgb(249,249,249);
        
`
const AddButton = styled.button`
        height:44px;
        width:44px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius: 50%;
        border : 2px solid white;
        background : rgba(0,0,0,0.6);
        cursor:pointer;
        margin-right:16px;

       

        span{
            font-size:30px;
            color : white;
        }
`
const GroupWatchButton = styled(AddButton)`
    background : rgba(0,0,0);     
`

const Subtitle = styled.div`

        color : rgb(249,249,249);
        font-size:15px;
        margin-top:26px;
        min-height:20px;

     
`

const Description = styled.div`
        line-height: 1.4;
        font-size:20px;
        margin-top:16px;
        color : rgb(249,249,249);


     
`