import * as React from "react"
import { graphql} from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import Section from '../components/section'

export const data = graphql`
  query MyQuery {
    contentfulPage(slug: {eq: "home"}) {
      slug
      subtitle
      title
      sections {
        subtitle
        title
        content {
          title
          image {
            gatsbyImageData
          }
          cardBody {
            cardBody
          }
        }
      }
    }
  }
  `;

const IndexPage = (props) => {
  const pageData = props.data.contentfulPage;

  const sections =  pageData.sections

  return (
    <>
    <Layout>
      {sections.map((section) => <Section sectionData= {section}/> )}
    </Layout>
    </>
    
  )
}

export default IndexPage
