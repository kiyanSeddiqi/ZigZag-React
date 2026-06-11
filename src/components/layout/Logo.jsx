import { Link } from "react-router-dom";
import { imgSource } from "../../data/imgSource";

function Logo({ bgDark = false }) {
  return (
    <>
      <Link to="/">
        {bgDark ? (
          <img
            src={imgSource.logo_dark}
            alt="لوگو زیگزاگ"
            className="w-24 aspect-auto"
          />
        ) : (
          <>
            <img
              src={imgSource.logo_dark}
              alt="لوگو زیگزاگ"
              className="hidden dark:block w-24 aspect-auto"
            />
            <img
              src={imgSource.logo_light}
              alt="لوگو زیگزاگ"
              className="dark:hidden block w-24 aspect-auto"
            />
          </>
        )}
      </Link>
    </>
  );
}

export default Logo;
