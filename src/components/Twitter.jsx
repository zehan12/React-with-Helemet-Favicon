import { Helmet } from "react-helmet";
import Favicon from "react-favicon";

const Twitter = () => {
  return (
    <>
      <Helmet>
        <title>Twitter</title>
        <meta name="description" content="Twitter page" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <Favicon url="https://abs.twimg.com/favicons/twitter-pip.2.ico"></Favicon>
      <h1>Twitter</h1>
    </>
  );
};

export default Twitter;
