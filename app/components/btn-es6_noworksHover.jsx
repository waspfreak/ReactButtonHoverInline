var React = require('react');

export default class Btn extends React.Component {
    constructor(props) {    /* Note props is passed into the constructor in order to be used */
      super(props);
        this.state = {
          hover: false
        };
        console.log('no hover');
    }
    onMouseEnterHandler = () => {
      this.state = {
        hover: true
      };
      console.log('true');
    };
    onMouseLeaveHandler = () =>{
      this.state = {
        hover: false
      };
      console.log('false');
    };

    render() {
        var EventBtnHover;
        if(this.state.hover) {
            EventBtnHover = EventBtnHover;
        }
        return (
            <header>
              <div>
                  <div className="event-button-shadow" style={EventBtnHover}
                       onMouseEnter={this.onMouseEnterHandler}
                       onMouseLeave={this.onMouseLeaveHandler}>
                      <a className="button-primary event-button"
                         style={eventBtnColor}
                         href={eventBtnLink} >{eventBtnLabel}
                      </a>
                  </div>
              </div>
            </header>
        );
    }
}

var eventBtnLabel = "show more";
var eventBtnLink = 'www.tesco.com';

var eventBtnColor = {
    backgroundColor: 'rgba(27, 82, 14, 1)',
    color: 'black'
}

var EventBtnHover = {
    backgroundColor: 'rgba(27, 82, 14, .5)',
}

module.exports = Btn;
