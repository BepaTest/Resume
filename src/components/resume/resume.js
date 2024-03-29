import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>EXPÉRIENCES</span></h1>
          </div>
          <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                      <div className="twelve columns">
                          <h3>{item.specialization}</h3>
                          <p className="info">
                          {item.CompanyName}
                          <span>&bull;</span> <em className="date">{item.MonthOfArriving}/{item.YearOfArriving} - {item.MonthOfLeaving}/{item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements.map((achivements) => {
                            return (<li>{achivements}</li>);
                          })}
                          </p>
                      </div>
                    </div>
                  )
                })
              }
          </div> 
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>FORMATIONS</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item)=>{
                return(
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.specialization}</h3>
                        <p className="info">
                          {item.UniversityName}
                        <span>&bull;</span> <em className="date">{item.YearOfStarting} - {item.YearOfPassing}</em></p>
                    </div>
                  </div>
                  )
                })
              }
            </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>COMPÉTENCES</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
            {resumeData.skillsDescription}
            </p>
            <div className="bars">
              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="nine columns main-col">
            <p>
            {resumeData.softSkillsDescription}
            </p>
            <div className="bars">
              <ul className="skills">
                {
                  resumeData.softSkills && resumeData.softSkills.map((item) => {
                    return(
                      <li>
                      <em>{item.softSkillname}</em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}