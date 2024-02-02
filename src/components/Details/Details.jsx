import { Tab, Tabs } from "react-bootstrap";
import copy from "../../assets/images/copy.svg";

function Details() {
  return (
    <>
      <div className="Details">
        <div className="Name-Section">
          <div className="card">
            <div className="card-body">
              <div className="title">
                <h3>123 Main St, Denver, CO 35343</h3>
                <p>2 Bedrooms • 3 Bathrooms • 3,345 Sq Ft • 2 Acres</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Description-card">
          <Tabs
            defaultActiveKey="descriptions"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="descriptions" title="Descriptions">
              <div className="card">
                <div className="card-header">
                  <h3>Description 1</h3>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h4>Spacious 2-Story Denver Home with Mountain Views</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        This Single Family home in Denver, CO boasts 3 bedrooms,
                        2 bathrooms, and a finished basement. Enjoy the beauty
                        of Mountain Views, wood, and laminate flooring. With a
                        2-car garage, it's perfect for families seeking great
                        schools and a walkable neighborhood.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">
                    <img src={copy} />
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Description 2</h3>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h4>Spacious 2-Story Denver Home with Mountain Views</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        This Single Family home in Denver, CO boasts 3 bedrooms,
                        2 bathrooms, and a finished basement. Enjoy the beauty
                        of Mountain Views, wood, and laminate flooring. With a
                        2-car garage, it's perfect for families seeking great
                        schools and a walkable neighborhood.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">
                    <img src={copy} />
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Description 3</h3>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h4>Spacious 2-Story Denver Home with Mountain Views</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        This Single Family home in Denver, CO boasts 3 bedrooms,
                        2 bathrooms, and a finished basement. Enjoy the beauty
                        of Mountain Views, wood, and laminate flooring. With a
                        2-car garage, it's perfect for families seeking great
                        schools and a walkable neighborhood.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">
                    <img src={copy} />
                  </button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="social" title="Social Posts">
              <div className="card">
                <div className="card-header">
                  <h3>Social Post 1</h3>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h4>Spacious 2-Story Denver Home with Mountain Views</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        This Single Family home in Denver, CO boasts 3 bedrooms,
                        2 bathrooms, and a finished basement. Enjoy the beauty
                        of Mountain Views, wood, and laminate flooring. With a
                        2-car garage, it's perfect for families seeking great
                        schools and a walkable neighborhood.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">
                    <img src={copy} />
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Social Post 2</h3>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h4>Spacious 2-Story Denver Home with Mountain Views</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        This Single Family home in Denver, CO boasts 3 bedrooms,
                        2 bathrooms, and a finished basement. Enjoy the beauty
                        of Mountain Views, wood, and laminate flooring. With a
                        2-car garage, it's perfect for families seeking great
                        schools and a walkable neighborhood.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">
                    <img src={copy} />
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Social Post 3</h3>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h4>Spacious 2-Story Denver Home with Mountain Views</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        This Single Family home in Denver, CO boasts 3 bedrooms,
                        2 bathrooms, and a finished basement. Enjoy the beauty
                        of Mountain Views, wood, and laminate flooring. With a
                        2-car garage, it's perfect for families seeking great
                        schools and a walkable neighborhood.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">
                    <img src={copy} />
                  </button>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default Details;
