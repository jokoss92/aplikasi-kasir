import React, { Component } from 'react'
import LeftBarAdmin from '../../components/LeftBarAdmin';
import {Row, Col} from 'reactstrap';
import Barang from './Barang/Barang';
import {Route} from 'react-router-dom';

export default class HomeAdmin extends Component {
  render() {
    return (
      <Row>
        <Col md={3}>
       <LeftBarAdmin />
       </Col>
       <Col md={9}>
       <Route path="/admin/barang" component={Barang}/>
       </Col>
      </Row>
    )
  }
}
