import "./main.css"

export default function Inquiry() {
  const inInput = {
    color: "pink",
  }
    return (
      <div className = "inDiv">
        <div className="col-md-6">
        <form id="contact" action="" method="post">
          <div className="row">
            <div className="col-md-12" id = "test">
              <h1>문의</h1>
              <fieldset className = "inField">
                <input style={inInput} type="text" placeholder="Your name..." required=""/>
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <input style = {inInput} name="email" type="email" placeholder="Your email..." required=""></input>
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <input style = {inInput} name="subject" type="text" placeholder="Subject..." required=""/>
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <textarea style = {inInput} name="message" rows="6" placeholder="Your message..." required=""></textarea>
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <button type="submit">
                  수정하기
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
      </div>
    )
}