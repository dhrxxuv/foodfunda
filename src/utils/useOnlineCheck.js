import { useEffect, useState } from "react";

const useOnlineCheck = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => setOnline(true);
    const updateOfflineStatus = () => setOnline(false);

    // Add event listeners
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOfflineStatus);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOfflineStatus);
    };
  }, []);

  return online;
};

export default useOnlineCheck;
