import React from "react";
import LoaderIcon from "react-loader-icon";
import './Loader.css'
 
class Loader extends React.Component {
  render() {
    return (
      <div className="Loader">
        <LoaderIcon
            color={'#7fcaf5'}
            size={400}
            type={"spin"}
        />
        
      </div>
    );
  }
}
 
export default Loader;