import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting, selectAllMsg } from "../redux/reducers/messageSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector(selectAllMsg);

  console.log(greetings);
  React.useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div className="w-1/3 py-10 bg-gray-200 rounded-lg shadow shadow-black text-center">
      {greetings.greetings ? (
        <span className="text-center">{greetings.greetings}</span>
      ) : (
        <span>Waiting ...</span>
      )}
    </div>
  );
};

export default Greeting;
