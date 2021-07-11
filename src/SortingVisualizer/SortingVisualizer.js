import React from "react";
import "./SortingVisualizer.css";
import * as sortingAlgorithms from "../SortingAlgorithms/sortingAlgorithms";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    this.resetArray();
  }
  randomNumFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < 310; i++) {
      array.push(this.randomNumFromInterval(5, 750));
    }

    this.setState({ array });
  }

  mergeSort() {
    const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
    console.log(sortedArray);
  }
  quickSort() {}
  heapSort() {}
  bubbleSort() {}

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <div>
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: "pink",
                height: `${value}px`,
              }}
            />
          ))}
        </div>
        <div>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
      </div>
    );
  }
}
export default SortingVisualizer;
