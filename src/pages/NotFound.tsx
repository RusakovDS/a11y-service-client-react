import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <FontAwesomeIcon icon={faTriangleExclamation} size="10x" />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        404 - Not Found!
      </h1>
      <Link
        to="/"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
