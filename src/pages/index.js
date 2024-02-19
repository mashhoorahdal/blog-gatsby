import * as React from "react";
import Layout from "../components/layout";
import {hero,heroWrapper} from "../global.module.css";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import Footer from "../components/Footer";
const IndexPage = () => {
  return (<>
    <Layout pageTitle={"Home"}>
      <div className="heroWrapper">
      <div className={hero}>
        
      <h1 cl>Stay curious.</h1>
      <p>Embarking on the Code Odyssey: Thoughtfully Documenting My Learning Journey in Programming</p>
      <Link to="/blog">Read</Link>
      </div>
      </div>
    </Layout>
    <Footer/>
    </>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;

