import { Component, useState } from "react";

export default class MiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((d) => (
          <div>{d}</div>
        ))}
      </div>
    );
  }
}

export function MiCOmponent2(props) {
  const [data, setData] = useState([]);

  return (
    <div>
      {data.map((d) => (
        <div>{d}</div>
      ))}
    </div>
  );
}
