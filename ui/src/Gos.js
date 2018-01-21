import React, {Component} from 'react';

export default class Gos extends Component {
  render() {
    return (
        <table>
          <tr>
            <th>Shortcut</th>
            <th>Href</th>
            <th>Description</th>
          </tr>

          {this.props.gos.map(function (go) {
            return <tr key={go.id}>
              <td>{go.shortcut}</td>
              <td>{go.href}</td>
              <td>{go.description}</td>
            </tr>
          })}
        </table>
    )
  }
}