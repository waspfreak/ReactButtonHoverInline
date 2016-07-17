var React = require('react');



class Btn extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          isHovering: false,
        };
    }
    handleMouseOver = () => {
      this.setState({ isHovering: true });
      console.log('true');
    };
    handleMouseOut = () =>{
       this.setState({ isHovering: false });
       console.log('false');
    };

    render() {
      let eventBtnLabel = "show more";
      let eventBtnLink = 'www.tesco.com';
      let eventBtnColor = {
          backgroundColor: 'rgba(27, 82, 14, 1)',
          color: 'black'
      }
      let EventBtnHover = {
          backgroundColor: 'rgba(67, 2, 14, .5)',
      }
      var inner;
      if(this.state.isHovering) {
          inner = EventBtnHover;
      }

        return (
            <header>
              <div>
                  <div className="event-button-shadow" style={inner}
                       onMouseEnter={this.handleMouseOver.bind(this)}
                       onMouseLeave={this.handleMouseOut.bind(this)}>
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



module.exports = Btn;
