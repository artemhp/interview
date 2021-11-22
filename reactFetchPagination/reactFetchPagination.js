// TODO:
// The solution must be close to real life applications
//
// 1) loading users + state management (use Redux-way by creating reducer and actions)
//    - load users
//    - implement pagination (populate existing user list with a list of the next page)
//    - control "loading" status
//    - handle failed request, save error (if any error occured during loading process)
//    - handle successful response

// 2) Load users on init

// 3) Show error message if request failed

// 4) "Next page" button
//    - disable button (use "disabled" class) during users loading and show "Loading..." text
//    - on click, load next part of users

// 5) Implement reusable "Table" and table "Column" components
//    - check the expected result in the App component
//    - the "title" prop of "Column" represents the title of Table column
//    - if no data and loading is in progress - show "Loading..." text
//    - if loading is completed but there is no data - show "No Data.” message

import React, { useEffect, useState } from "react";

import "./styles.css";

const API_URL = "https://randomuser.me/api/?results=5&page=";

const apiGetUsers = (page) => () => {
  return fetch(API_URL + page).then((response) => response.json());
};

function useFetch(apiCall, page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(await apiCall());
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [page]);
  return {
    loading,
    error,
    data
  };
}

function Table({source, children}) {
  children.forEach((el) => {
    console.log(el.props.children);
  });
  if (!source) return null;
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          {children.map((el, index) => {
            return <td key={index}>{el.props.title}</td>;
          })}
        </tr>
      </thead>
      <tbody>
          {source.map(data => <tr>
            {children.map(title => <td>{
              title.props.children(data)
            }</td>)}
          </tr>)}
      </tbody>
    </table>
  );
}

export default function App() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(apiGetUsers(page), page);
  const users = data.results;

  console.log({ users, loading, error, page });
  return (
    <div className="container-lg p-4">
      {loading && <p>loading</p>}
      <h1>Users</h1>
      <Table source={users}>
        <Table.Column title="Email">{({ email }) => email}</Table.Column>
        <Table.Column title="Age">{(user) => user.dob.age}</Table.Column>
      </Table>
      <div className="d-grid col-4 mx-auto">
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => {
            console.log(page);
            setPage(page + 1);
          }}
        >
          Next page
        </button>
      </div>
    </div>
  );
}
