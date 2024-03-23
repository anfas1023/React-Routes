import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
export default function Userdetails() {
  let params = useParams();
  let userId = params.userid;

  const [searchParam, setParams] = useSearchParams();

  let someValue = searchParam.get("filiter");

  return (
    <div>
      {" "}
      <h5>User details...{userId}</h5>
      <button onClick={() => setParams({ filiter: "active" })}>
        All users
      </button>
      <button onClick={() => setParams({})}>All activeuser</button>
      {someValue ? <h5>Show active users</h5> : <h5>Show All users</h5>}
    </div>
  );
}
