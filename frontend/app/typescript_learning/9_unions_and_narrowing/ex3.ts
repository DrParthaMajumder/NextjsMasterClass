/*
  Example 3: Discriminated Unions
  A common field (status) is used to decide which type it is.
*/

type Success = {
  status: "success";
  data: string;
};

type Failure = {
  status: "error";
  message: string;
};

type test_Response = Success | Failure;

function handleResponse(res: test_Response) {
  if (res.status === "success") {
    console.log("Data:", res.data);
  } else {
    console.log("Error:", res.message);
  }
}

handleResponse({ status: "success", data: "User created" });
handleResponse({ status: "error", message: "Server failed" });
