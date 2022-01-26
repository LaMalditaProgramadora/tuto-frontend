import "../../App.css";
import logo from "../../_assets/loading.gif";
import "./Loading.css";

const Loading = (props: any) => {
  console.log(props.hidden);
  return (
    <>
      <div className="modal upper" hidden={props.hidden}></div>
      <div className="loading-image-div upper" hidden={props.hidden}>
        <img className="loading-image" alt="" src={logo}></img>
      </div>
    </>
  );
};

export default Loading;
