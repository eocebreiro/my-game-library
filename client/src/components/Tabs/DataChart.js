import React, { Fragment } from "react";

// State
import { useUser } from "../../contexts/UserContext";

export const DataChart = () => {
  //State
  const { state } = useUser();
  if (state.profile) {
    const total = state.profile.gameLibrary.length;

    const unfinished = state.profile.gameLibrary.filter((item) => {
      return item.status === "Unfinished";
    });
    const ongoing = state.profile.gameLibrary.filter((item) => {
      return item.status === "Ongoing";
    });
    const completed = state.profile.gameLibrary.filter((item) => {
      return item.status === "Completed";
    });
    const beaten = state.profile.gameLibrary.filter((item) => {
      return item.status === "Beaten";
    });

    return (
      <Fragment>
        {unfinished.length > 0 ? (
          <Fragment>
            <div className="text-center pt-3">
              <small>Unfinished</small>
            </div>
            <div className="d-flex justify-content-center gap-2 align-items-center">
              <div>{unfinished.length}</div>
              <div className="col-md-8 col-10">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(unfinished.length / total) * 100}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    style={{
                      width: `${100 - (unfinished.length / total) * 100}%`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div>{`${Math.round((unfinished.length / total) * 100)}%`}</div>
            </div>
          </Fragment>
        ) : null}
        {ongoing.length > 0 ? (
          <Fragment>
            <div className="text-center pt-3">
              <small>Ongoing</small>
            </div>
            <div className="d-flex justify-content-center gap-2 align-items-center">
              <div>{ongoing.length}</div>
              <div className="col-md-8 col-10">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(ongoing.length / total) * 100}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    style={{
                      width: `${100 - (ongoing.length / total) * 100}%`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div>{`${Math.round((ongoing.length / total) * 100)}%`}</div>
            </div>
          </Fragment>
        ) : null}
        {beaten.length > 0 ? (
          <Fragment>
            <div className="text-center pt-3">
              <small>Beaten</small>
            </div>
            <div className="d-flex justify-content-center gap-2 align-items-center">
              <div>{beaten.length}</div>
              <div className="col-md-8 col-10">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(beaten.length / total) * 100}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    style={{
                      width: `${100 - (beaten.length / total) * 100}%`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div>{`${Math.round((beaten.length / total) * 100)}%`}</div>
            </div>
          </Fragment>
        ) : null}
        {completed.length > 0 ? (
          <Fragment>
            <div className="text-center pt-3">
              <small>Completed</small>
            </div>
            <div className="d-flex justify-content-center gap-2 align-items-center">
              <div>{completed.length}</div>
              <div className="col-md-8 col-10">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(completed.length / total) * 100}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    style={{
                      width: `${100 - (completed.length / total) * 100}%`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div>{`${Math.round((completed.length / total) * 100)}%`}</div>
            </div>
          </Fragment>
        ) : null}
      </Fragment>
    );
  }
};
