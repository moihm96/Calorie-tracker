import { Dispatch, useMemo } from "react";

import { ActivityActions, ActivityState } from "../reducers/activityReducer";

type HeaderProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};
export default function Header({ state, dispatch }: HeaderProps) {
  const canRestartApp = useMemo(
    () => state.activities.length,
    [state.activities]
  );
  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Calorie tracker
          </h1>

          <button
            className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp}
            onClick={() =>
              dispatch({
                type: "restart-app",
              })
            }
          >
            Reiniciar App
          </button>
        </div>
      </header>
    </>
  );
}
