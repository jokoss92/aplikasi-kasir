import React from 'react';
import { Table, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';

export default class Example extends React.Component {
  state ={
    data : [
      {
      nama : "Shampo",
      harga : 500,
      qty : 8
    },
    {
      nama : "Pasta gigi",
      harga : 500,
      qty : 10
    },
    {
      nama : "Sabun",
      harga : 2500,
      qty : 5
    }
  ]
  };
  render() {
    return (
        <Row>
            <Col md="6">
              <Row>
                <Col style={{height : 600}}>
                <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Barang</th>
            <th>Harga Barang</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((datas, key)=>{
            return (
              <tr>
              <th scope="row">{key +1}</th>
              <td>{datas.nama}</td>
              <td>{datas.harga}</td>
              <td>{datas.qty}</td>
            </tr>)
          } )
          }
         
          
        </tbody>
      </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                <Table>

        <tbody>
          <tr>
            <th scope="row">Jumlah</th>
            <td>2400</td>

          </tr>
                 </tbody>
      </Table>
                </Col>
              </Row>


           </Col>
            <Col md="6"> 
            <Card style={{width : 300, padding : 10 }}>
            <Form>
        <FormGroup>
          <Label for="Nama Barang">Nama Barang</Label>
          <Input type="text" name="nama" placeholder="Nama Barang" />
        </FormGroup>
        <FormGroup>
          <Label for="Harga Barang">Harga Barang</Label>
          <Input type="number" name="harga" placeholder="Harga Barang" />
        </FormGroup>
        <FormGroup>
          <Label for="Qty">Qty</Label>
          <Input type="number" name="qty" placeholder="Qty" />
        </FormGroup>
        <Button>Simpan</Button>
        </Form>
            </Card>
           </Col>
        </Row>
     
    );
  }
}