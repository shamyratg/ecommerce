import React, { Component } from "react";
import {ListGroup,ListGroupItem,Badge} from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props)
  {
    super(props);
    state:{}
  }
  render() {

    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          <ListGroupItem className="justify-content-between">
            Cras justo odio <Badge pill>14</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Dapibus ac facilisis in <Badge pill>2</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Morbi leo risus <Badge pill>1</Badge>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
