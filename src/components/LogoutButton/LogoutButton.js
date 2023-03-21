import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "../../context/appContext";

const LogoutButton = () => {
  const router = useRouter();
  const { logoutUser } = useAppContext();
  const handleLogoutButton = () => {
    setTimeout(() => {
      logoutUser();
      router.push("/login");
    }, 2000);
  };

  return (
    <button
      className="text-white underline flex flex-row shrink items-center gap-1 cursor-pointer text-xl font-normal py-1 px-3 w-fit self-end"
      onClick={handleLogoutButton}
    >
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.58334 21.5L12.5417 28.6667V23.2917H28.6667V19.7083H12.5417V14.3333L3.58334 21.5Z"
          fill="white"
        />
        <path
          d="M23.2935 5.3732C21.1749 5.36733 19.0762 5.7819 17.1189 6.5929C15.1617 7.4039 13.3848 8.59522 11.8913 10.0978L14.4247 12.6312C16.7933 10.2627 19.943 8.95653 23.2935 8.95653C26.6439 8.95653 29.7936 10.2627 32.1622 12.6312C34.5308 14.9998 35.8369 18.1496 35.8369 21.5C35.8369 24.8504 34.5308 28.0002 32.1622 30.3687C29.7936 32.7373 26.6439 34.0434 23.2935 34.0434C19.943 34.0434 16.7933 32.7373 14.4247 30.3687L11.8913 32.9022C14.9353 35.948 18.9845 37.6268 23.2935 37.6268C27.6024 37.6268 31.6516 35.948 34.6956 32.9022C37.7415 29.8581 39.4203 25.809 39.4203 21.5C39.4203 17.191 37.7415 13.1419 34.6956 10.0978C33.2021 8.59522 31.4252 7.4039 29.468 6.5929C27.5108 5.7819 25.4121 5.36733 23.2935 5.3732Z"
          fill="white"
        />
      </svg>
      logout
    </button>
  );
};

export default LogoutButton;
