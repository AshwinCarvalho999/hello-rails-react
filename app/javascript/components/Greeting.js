import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/messages/messageSlice';

const Greeting = () => {
  const message = useSelector((state) => state.messageData.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, []);

  return (
    <div>
      <h2>Message: {message.greeting}</h2>
    </div>
  );
};

export default Greeting;
