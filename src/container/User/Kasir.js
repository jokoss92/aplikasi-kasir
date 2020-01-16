import React from "react";
import {
  Table,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card
} from "reactstrap";

const liff = window.liff;

export default class Example extends React.Component {
  state = {
    data: [],
    nama: "",
    harga: 0,
    qty: 0,
    jumlahHarga: 0
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.initialize = this.initialize.bind(this);
    // this.closeApp = this.closeApp.bind(this);
  };
  

  handleSubmit = (event, fields) => {
    const { data, nama, harga, qty } = this.state;
    let newData = {
      nama: nama,
      harga: harga,
      qty: qty,
      total: harga * qty
    };

    data.push(newData);
    this.setState({
      data: data,
      nama: "",
      harga: 0,
      qty: 0
    });
    this.form && this.form.reset();
  };

  handleRemove = key => {
    const { data } = this.state;
    data.splice(key, 1);
    this.setState({
      data
    });
  };

  componentWillUpdate(nextProps, nextState) {
    this.sumTotal(nextState);
  }

  sumTotal = state => {
    const { data } = state;
    let totalHarga = 0;
    data.map((datas, key) => {
      totalHarga += datas.total;
    });
    state.jumlahHarga = totalHarga;
  };

  initialize() {
    liff.init(async (data) => {
      let profile = await liff.getProfile();
      this.setState({
        displayName : profile.displayName,
        userId : profile.userId,
        pictureUrl : profile.pictureUrl,
        statusMessage : profile.statusMessage
      });
    }); 
  }

  // closeApp(event) {
  //   event.preventDefault();
  //   liff.sendMessages([{
  //     type: 'text',
  //     text: "Thank you, Bye!"
  //   }]).then(() => {
  //     liff.closeWindow();
  //   });
  // }

  render() {
    const { harga } = this.state;
    console.log(harga);
    return (
      <Row>
        <Col md="6">
          <Row>
            <Col style={{ height: 600 }}>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Barang</th>
                    <th>Harga Barang</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((datas, key) => {
                    return (
                      <tr>
                        <th scope="row">{key + 1}</th>
                        <td>{datas.nama}</td>
                        <td>{datas.harga}</td>
                        <td>{datas.qty}</td>
                        <td>{datas.total}</td>
                        <td>
                          <Button onClick={() => this.handleRemove(key)}>
                            Hapus
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
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
                    <td>{this.state.jumlahHarga}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Card style={{ width: 300, padding: 10 }}>
            <p className="App-intro">
              Display Name : {this.state.displayName} <br />
              User ID : {this.state.userId} <br />
              Status Msg : {this.state.statusMessage}
            </p>
            {/* <Button color="primary" onClick={this.closeApp}>
              Close
            </Button> */}
            <Form>
              <FormGroup>
                <Label for="Nama Barang">Nama Barang</Label>
                <Input
                  type="text"
                  name="nama"
                  placeholder="Nama Barang"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Harga Barang">Harga Barang</Label>
                <Input
                  type="number"
                  name="harga"
                  placeholder="Harga Barang"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Qty">Qty</Label>
                <Input
                  type="number"
                  name="qty"
                  placeholder="Qty"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
                onClick={() => this.handleSubmit()}
                ref={c => (this.form = c)}
              >
                Simpan
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
