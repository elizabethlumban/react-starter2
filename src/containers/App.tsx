import React from "react";
import { useSelector } from "react-redux";
import { IState } from "store/types";
import HomePage from "containers/HomePage";

export const App = () => {
  const submittingChanges = useSelector((state: IState) => state.submittingChanges);
  return (
    <div>
      {submittingChanges && (
        <div className={submittingChanges ? "changes-in-progess-overlay" : ""}>
          <div className="loader" />
        </div>
      )}

      <HomePage />

    </div>
  );
};
