import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h3>Um okkur</h3>
        <p>
          Við Ómar og Sóldís stofnuðum lítið krúttlegt fyrirtæki og erum líka
          algjörir ævintýrafantar. Fyrri verk
        </p>
        <table>
          <thead>
            <tr>
              <th>Verkefni</th>
              <th>Lýsing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hulduland 10</td>
              <td>Allt plejdað og græjað</td>
            </tr>
            <tr>
              <td>Dýrt einbýlishús</td>
              <td>Tengdi mjög dýr útiljós. Magnað stöff</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default About;
