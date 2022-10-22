import { Helmet } from "react-helmet";
import Favicon from "react-favicon";

const Instagram = () => {
  return (
    <>
      <Helmet>
        <title>Instagram</title>
        <meta name="description" content="instagram page" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <Favicon url="https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png"></Favicon>
      <h1>Instagram</h1>;
    </>
  );
};

export default Instagram;
