import React from "react";
import Unsplash from "../api/Unsplash";
import InputText from "./InputText";
import Gallery from "./gallery";

class ImageFinder extends React.Component {
  state = { images: [] };
  async handleData(term) {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="bg-slate-200">
        <InputText
          onSmash={(term) => {
            this.handleData(term);
          }}
        />
        <Gallery image={this.state.images} />
      </div>
    );
  }
}

export default ImageFinder;
