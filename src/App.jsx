import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    console.log("Clicked");
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="bg-purple-200 pt-[260px] h-full w-full">
        <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
              src="https://avatars.githubusercontent.com/u/25281055?v=4"
              alt=""
            />
            <div className="text-center sm:text-left sm:flex-grow">
              <div className="mb-4">
                <p className="text-xl leading-tight">Krupesh Anadkat</p>
                <p className="text-sm leading-tight text-grey-dark">
                  Developer & Data Analyst
                </p>
              </div>
              <div>
                <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple-700 hover:text-white">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
