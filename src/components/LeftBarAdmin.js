import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

function LeftBarAdmin() {
  return (
    <ListGroup>
        <Link to="/admin">
    <ListGroupItem active tag="button" action>Home</ListGroupItem>
    </Link>
    <Link to="/admin/barang"></Link>
    <ListGroupItem tag="button" action>Barang</ListGroupItem>
    <ListGroupItem tag="button" action>User</ListGroupItem>
    <ListGroupItem tag="button" action>Transaksi</ListGroupItem>
  </ListGroup>
  )
}

export default LeftBarAdmin
