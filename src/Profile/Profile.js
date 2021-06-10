
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
export default class Profile extends Component {
  state={seconds: 1}
   
       componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
     
    render() {
        return (
              <div>
                        <Card style={{ width: '22rem',marginTop:"2rem" }}>
              <Card.Img variant="top" src={this.props.Person.imgSrc} alt="ProfilePhoto" />
              <Card.Body>
                <Card.Title>{this.props.Person.fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.Person.profession}</Card.Subtitle>
                <Card.Text>
                {this.props.Person.bio}
                </Card.Text>
                <Card.Footer className="text-muted">{this.state.seconds} Secondes since the last component was mounted</Card.Footer>
               
              </Card.Body>
            </Card>
                      
                    </div>
        )
    }
}

