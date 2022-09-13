import React from 'react'
import styled from 'styled-components';
import resume from '../img/about-me-page_myPhoto.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4 style={{marginBottom:"20px"}}> <span>Md. Symoon</span></h4>
                
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
                    <a href="/resume/Md-Symoon-Resume.pdf" download><PrimaryButton href='https://github.com/mdsymoon'  title={'Resume Download' }></PrimaryButton></a>
               
                
                </div>
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
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

