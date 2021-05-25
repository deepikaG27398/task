import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import data from './2020-12-02.json';


class App extends Component {
 
  render() {
    return (
      <Table celled className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>instrument_token</Table.HeaderCell>
            <Table.HeaderCell>exchange_token</Table.HeaderCell>
            <Table.HeaderCell>tradingsymbol</Table.HeaderCell>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>last_price</Table.HeaderCell>
            <Table.HeaderCell>expiry</Table.HeaderCell>
            <Table.HeaderCell>strike</Table.HeaderCell>         
            <Table.HeaderCell>tick_size</Table.HeaderCell>
            <Table.HeaderCell>lot_size</Table.HeaderCell>
            <Table.HeaderCell>instrument_type</Table.HeaderCell>
            <Table.HeaderCell>segment</Table.HeaderCell>
            <Table.HeaderCell>exchange</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(el => {
            return (
              <Table.Row key={el.field1}>
                <Table.Cell>{el.field1}</Table.Cell>
                <Table.Cell>{el.instrument_token}</Table.Cell>
                <Table.Cell>{el.exchange_token}</Table.Cell>
                <Table.Cell>{el.tradingsymbol}</Table.Cell>
                <Table.Cell>{el.name}</Table.Cell>
                <Table.Cell>{el.last_price}</Table.Cell>
                <Table.Cell>{el.expiry}</Table.Cell>
                <Table.Cell>{el.strike}</Table.Cell>
                <Table.Cell>{el.tick_size}</Table.Cell>
                <Table.Cell>{el.lot_size}</Table.Cell>
                <Table.Cell>{el.instrument_type}</Table.Cell>
                <Table.Cell>{el.segment}</Table.Cell>
                <Table.Cell>{el.exchange}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default App;
