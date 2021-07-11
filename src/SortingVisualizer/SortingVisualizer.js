import React from "react";
import { getMergeSortAnimations } from "../SortingAlgorithms/sortingAlgorithms";
import "./SortingVisualizer.css";
// Speed of the animations
const ANIMATION_SPEED = 1;

// Number of bars in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// Color of array bars
const PRIMARY_COLOR = "turquoise";

// Color of array bars that are being compared during each iteration of the algorithm
const SECONDARY_COLOR = "yellow";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    //when component initially loads, the array gets reset
    this.resetArray();
  }
  randomNumFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(this.randomNumFromInterval(5, 750));
    }

    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
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
                backgroundColor: "turquoise",
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
