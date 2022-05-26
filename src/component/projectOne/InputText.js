import React from "react";

class InputText extends React.Component {
  state = { value: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
    this.props.onSmash(this.state.value);
  };

  handleChange(e) {
    console.log("typing", e.target.value);
  }
  render() {
    return (
      <div className="mx-20 rounded-md pt-10">
        <form
          className="  bg-gray-200 rounded-md shadow-lg py-6 text-center"
          onSubmit={this.handleSubmit}
        >
          <label className="text-2xl font-semibold mr-5 " htmlFor="name">
            Search Image
          </label>

          <input
            className="h-12 w-60 border border-black rounded-md pl-2 "
            type="text"
            placeholder="Search any Image"
            value={this.state.value}
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default InputText;
