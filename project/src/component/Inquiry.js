import "./main.css"

export default function Inquiry() {
    return (
        <div className="col-md-6">
        <form id="contact" action="" method="post">
          <div className="row">
            <div className="col-md-12">
              <fieldset>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name..."
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email..."
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <input
                  name="subject"
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject..."
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <textarea
                  name="message"
                  rows="6"
                  className="form-control"
                  id="message"
                  placeholder="Your message..."
                  required=""
                ></textarea>
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <button type="submit" id="form-submit" className="btn">
                  Send Now
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    )
}