import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="paragraph">
                Hello, my name is Md. Symoon. I’m a web developer. I always use modern technology to develop websites. For the front-end I use React Js, Material UI, React-Bootstrap and for the back-end I use Node Js, Express Js, MongoDB. Currently, I will learn React Native to build Mobile Applications.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Service</p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Md. Symoon</p>
                        <p>: 20</p>
                        <p>: Bangladeshi </p>
                        <p>: English , Bangla </p>
                        <p>: Website Developer</p>
                        <p>:  Chattagram , Bangladesh</p>
                    </div>
                </div>
                <div className='resume'>
               
                <PrimaryButton  title={'Resume Download' }></PrimaryButton>
                </div>
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
    .resume{
       
        svg{
            font-size: 40px;
            transform: translateX(30px);
        }
    }
`;
export default ImageSection;
