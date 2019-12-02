import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./spinner.css";

interface IProps {
  loading: boolean;
  className?: string;
}

const Spinner = ({ loading }: IProps) => {
  return loading ? (
    <div className="ibm__spinner_container">
      <CircularProgress size={50} thickness={2} />
    </div>
  ) : null;
};

export default Spinner;
