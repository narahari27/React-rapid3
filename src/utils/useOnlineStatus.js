import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
  //booleanOnline
};
export default useOnlineStatus;
