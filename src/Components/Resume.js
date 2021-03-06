import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        {/* <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Projects'} 
                        title= {<p className="title">12<sup>+</sup> Complete Projects</p>}
                        subTitle={''}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'Rewards'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div> */}
        <div className="resume-content ">
          <div className="small-title">
            <SmallTitle icon={school} title={"Education Qualifications"} />
          </div>
          <ResumeItem
            year={"2018 - 2020"}
            title={"Higher Secondary"}
            subTitle={"Chittagong Govt. City college"}
            text={
              "I took my Higher Secondary Certificate from Chittagong Govt. City college with 4.42 GPA out of 5.  "
            }
          />
          <ResumeItem
            year={"2016 - 2018"}
            title={"Secondary School"}
            subTitle={"Halishahar Cant. Public School"}
            text={
              "I took my Secondary School  Certificate from Halishahar Cant. Public School with 4.56 GPA out of 5 "
            }
          />
          <ResumeItem
            year={"2015 - 2016"}
            title={"Junior School"}
            subTitle={"Garib E Newaz School"}
            text={
              "I took my Secondary School  Certificate from Garib E Newaz School with 4.5 GPA out of 5 "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
