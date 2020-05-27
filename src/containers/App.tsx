import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "store/types";
import { getItems } from "../actions/items";
import Spinner from "components/spinner";
import HomePage from "containers/Homepage";

export const App = () => {
  const loading = useSelector((state: IState) => state.loading);
  const submittingChanges = useSelector((state: IState) => state.submittingChanges);
  const items = useSelector((state: IState) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      {submittingChanges && (
        <div className={submittingChanges ? "changes-in-progess-overlay" : ""}>
          <div className="loader" />
        </div>
      )}

      <HomePage />
      <Spinner loading={loading} />
      {!loading && items.map((e, i) => <p key={i}>{e.name}</p>)}
    </div>
  );
};
