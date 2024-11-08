
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
      <div className="space-y-6 text-center p-6">
        <h3 className="text-4xl font-medium">404 - Page Not Found</h3>
        <p className="text-xl">Oops! It looks like the page you're looking for doesn't exist.</p>
        <Link to="/"><p className="text-blue-700 font-medium text-xl">Go back to Home</p></Link>
      </div>
    </div>
  );
};

export default ErrorPage;