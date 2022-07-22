import { useSelector } from "react-redux";

const UserInfo = () => {
  const UserInfo = useSelector((state) => state.user);
  return (
    <div
      style={{
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "12px",
        margin: "6px",
      }}
    >
      <h2>User Info</h2>
      <div>
        {Object.keys(UserInfo).map((key) => {
          return (
            <p>
              {key}:{UserInfo[key]}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default UserInfo;
