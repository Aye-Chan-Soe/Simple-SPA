import { Link } from "react-router-dom";

function ErrorPg() {
  return (
    <section className="flex grow items-center bg-gray-100">
      <div className="container mx-auto p-8 text-center md:text-left">
        <h2 className="mb-4 text-3xl font-bold">404</h2>
        <p className="text-gray mb-8 text-lg">
          Oops! The page you're looking for doesn't exit.
        </p>
        <Link
          to="/"
          className="rounded-md bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700"
        >
          Go back Home
        </Link>
      </div>
    </section>
  );
}

export default ErrorPg;
