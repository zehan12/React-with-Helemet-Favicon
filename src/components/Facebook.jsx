import { Helmet } from "react-helmet";
import Favicon from "react-favicon";

const Facebook = () => {
  return (
    <>
      <Helmet>
        <title>Facebook</title>
        <meta name="description" content="facebook page" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <Favicon url="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico"></Favicon>
      <h1>Facebook</h1>
    </>
  );
};

export default Facebook;
