import React, { useState } from 'react';
import { UilAnchor, UilPizzaSlice, UilSun, UilUtensils, UilAngleDown } from '@iconscout/react-unicons';
import Collapse from '@mui/material/Collapse';

function Skills() {
      //------------------------------------ START -> SKILLS SHOW & HIDE -------------------------
      const [skillsArray, setSkillArray] = useState({
      skill_1: false,
      skill_2: false,
      skill_3: false,
      skill_4: false
  });

  /*===== SKILLS SATE CONTROL ======*/
  const handleClickSkills = (name) => {
      let oldName = skillsArray[name]
    setSkillArray({
        // Full Array call, open only selected.
        ...skillsArray,
        [name] : !oldName
  })
};
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Where I'm great</span>

            <div className="skills__container container grid">
                <div>
                    {/* <!--=========================== SKILL 1 ===========================--> */}
                    <div className="skills__content">
                        <div className="skills__header" onClick={() => handleClickSkills("skills_1")} >
                            <UilAnchor className="skills__icon" />
                            
                            <div>
                                <h1 className="skills__titles">Española</h1>
                                <span className="skills__subtitle">More than 10 years</span>
                            </div>

                            {skillsArray.skills_1
                            ?<UilAngleDown className="skills__arrow" style={{transform: "rotate(-180deg"}} />
                            :<UilAngleDown className="skills__arrow" />}
                        </div>

                        <Collapse in={skillsArray.skills_1} >
                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Mariscos</h3>
                                        {/* <span className="skills__number">95%</span> */}
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__entoes"></span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Paella</h3>
                                        {/* <span className="skills__number">100%</span> */}
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__transc"></span>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    {/* <!--=========================== SKILL 2 ===========================--> */}
                    <div className="skills__content">
                        <div className="skills__header" onClick={() => handleClickSkills("skills_2")}>
                            <UilPizzaSlice className="skills__icon" />
                            
                            <div>
                                <h1 className="skills__titles">Italiana</h1>
                                <span className="skills__subtitle">More than 15 years</span>
                            </div>

                            {skillsArray.skills_2
                            ?<UilAngleDown className="skills__arrow" style={{transform: "rotate(-180deg"}} />
                            :<UilAngleDown className="skills__arrow" />}
                        </div>

                        <Collapse in={skillsArray.skills_2} >
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Pasta</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__editing"></span>
                                </div>
                            </div>
                            
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Pizza</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__proof"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Risotto</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>
                        </div>
                        </Collapse>
                    </div>
                </div>

                <div>
                    {/* <!--=========================== SKILL 3 ===========================--> */}
                    <div className="skills__content">
                        <div className="skills__header" onClick={() => handleClickSkills("skills_3")}>
                            <UilSun className="skills__icon" />
                            
                            <div>
                                <h1 className="skills__titles">Argentina</h1>
                                <span className="skills__subtitle">More than 15 years</span>
                            </div>

                            {skillsArray.skills_3
                            ?<UilAngleDown className="skills__arrow" style={{transform: "rotate(-180deg"}} />
                            :<UilAngleDown className="skills__arrow" />}
                        </div>

                        <Collapse in={skillsArray.skills_3} >
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Empanadas</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__editing"></span>
                                </div>
                            </div>
                            
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Milanesas</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__proof"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Asado</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Locro</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>
                        </div>
                        </Collapse>
                    </div>
                    {/* <!--=========================== SKILL 4 ===========================--> */}
                    <div className="skills__content">
                        <div className="skills__header" onClick={() => handleClickSkills("skills_4")}>
                            <UilUtensils className="skills__icon" />
                            
                            <div>
                                <h1 className="skills__titles">Mexicana</h1>
                                <span className="skills__subtitle">More than 15 years</span>
                            </div>

                            {skillsArray.skills_4
                            ?<UilAngleDown className="skills__arrow" style={{transform: "rotate(-180deg"}} />
                            :<UilAngleDown className="skills__arrow" />}
                        </div>

                        <Collapse in={skillsArray.skills_4} >
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Tacos</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__editing"></span>
                                </div>
                            </div>
                            
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Burritos</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__proof"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Chiles</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Locro</h3>
                                    {/* <span className="skills__number">100%</span> */}
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__adapt"></span>
                                </div>
                            </div>
                        </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;
