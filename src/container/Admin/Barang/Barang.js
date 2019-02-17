import React, { Component } from 'react'
import TabelBarang from '../../../components/TabelBarang';
import {Container} from 'reactstrap';

export default class Barang extends Component {
  render() {
    return (
      <Container>
        <TabelBarang />
      </Container>
    )
  }
}
