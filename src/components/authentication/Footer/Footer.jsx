import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="Links">
            <Link to="/termscondition">Terms And Condition</Link>
            <Link to="/privacypolicy">Privacy Policy</Link>
            <a>CA Privacy Notice</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
