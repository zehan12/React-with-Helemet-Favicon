import { Helmet } from "react-helmet";
import Favicon from "react-favicon";

const Youtube = () => {
  return (
    <>
      <Helmet>
        <title>Youtube</title>
        <meta name="description" content="Youtube page" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <Favicon url="https://www.youtube.com/s/desktop/41dc17d1/img/favicon_144x144.png"></Favicon>
      <h1>Youtube</h1>
    </>
  );
};

export default Youtube;
