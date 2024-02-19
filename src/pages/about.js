import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import {about} from '../global.module.css'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
  <>
    <Layout pageTitle={"About"}>
    
    <div className={about}>
        <h2>
            I am  Mashhoor Ahdal
        </h2>
        <p>
  I am a dedicated <span>BTech Computer Science</span> student with a strong passion for <span>software engineering</span>. My academic journey has provided a solid foundation in <span>computer science principles</span>, and I excel as a <span>full-stack developer</span> with proficiency in <span>React</span>, <span>Python</span> (including <span>Django</span> and <span>Flask</span>), and <span>MySQL</span>. My focus is on crafting dynamic and responsive web applications, seamlessly integrating data into software systems. Committed to staying abreast of <span>technological advancements</span>, I am eager to contribute my skills to innovative projects and advance the field of <span>software development</span>.
</p>


    </div>
    
    </Layout>
    <Footer/>
  </>
  )
}

export const Head = () => <Seo title="About"/>

export default AboutPage