var React = require('react');


const EventButton = React.createClass({
    getInitialState: function() {
        return {
            hover: false
        }
    },
    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        //console.log('enter');
    },
    onMouseLeaveHandler: function() {
        this.setState({
            hover: false
        });
        //console.log('leave');
    },
    render: function() {
      var eventBtnLabel = "show more";
      var eventBtnLink = 'www.tesco.com';

      var eventBtnColor = {
          backgroundColor: 'rgba(27, 82, 14, 1)',
          color: 'black'
      }

      var EventBtnHover = {
          backgroundColor: 'rgba(27, 82, 14, .5)',
      }
        var inner ;
        if(this.state.hover) {
            inner = EventBtnHover;
        }

        return (
            <div>
                <div className="event-button-shadow" style={inner}
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}>
                    <a className="button-primary event-button"
                       style={eventBtnColor}
                       href={eventBtnLink} >{eventBtnLabel}
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = EventButton;
