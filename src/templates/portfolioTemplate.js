import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import Section from '../components/section'

const PortfolioTemplate = (props) => {

    const pageData = props.pageContext.pageData;

  const sections =  pageData.sections

  return (
    <>
    <Layout>
      {sections.map((section) => <Section sectionData= {section}/> )}
    </Layout>
    </>
    
  )
}

export default PortfolioTemplate;
