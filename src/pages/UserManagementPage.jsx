import React from "react";

const UserManagementPage = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-2">
        <h4>User Management</h4>
        <a href="#" className="btn btn-success">
          <i class="fa-solid fa-user-plus mr-2"></i>Add New User
        </a>
      </div>
      <div className="d-flex justify-content-between align-items-center py-3">
        <form class="ml-auto form-inline">
          <div class="form-group">
            <input
              type="text"
              id="user_search"
              placeholder="Search User Here..."
              class="form-control mx-sm-3"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
      <div className="table-responsive">
        <table class="table table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
              <td>
                <a href="#" className="text-success">
                  <i class="fa-solid fa-pen-to-square mr-2"></i>Edit
                </a>
              </td>
              <td>
                <a href="#" className="text-danger">
                  <i class="fa-solid fa-trash mr-2"></i>Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
              <td>
                <a href="#" className="text-success">
                  <i class="fa-solid fa-pen-to-square mr-2"></i>Edit
                </a>
              </td>
              <td>
                <a href="#" className="text-danger">
                  <i class="fa-solid fa-trash mr-2"></i>Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
              <td>
                <a href="#" className="text-success">
                  <i class="fa-solid fa-pen-to-square mr-2"></i>Edit
                </a>
              </td>
              <td>
                <a href="#" className="text-danger">
                  <i class="fa-solid fa-trash mr-2"></i>Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
              <td>
                <a href="#" className="text-success">
                  <i class="fa-solid fa-pen-to-square mr-2"></i>Edit
                </a>
              </td>
              <td>
                <a href="#" className="text-danger">
                  <i class="fa-solid fa-trash mr-2"></i>Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
              <td>
                <a href="#" className="text-success">
                  <i class="fa-solid fa-pen-to-square mr-2"></i>Edit
                </a>
              </td>
              <td>
                <a href="#" className="text-danger">
                  <i class="fa-solid fa-trash mr-2"></i>Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
              <td>
                <a href="#" className="text-success">
                  <i class="fa-solid fa-pen-to-square mr-2"></i>Edit
                </a>
              </td>
              <td>
                <a href="#" className="text-danger">
                  <i class="fa-solid fa-trash mr-2"></i>Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
              <td>
                <a href="#" className="text-success">
                  <i class="fa-solid fa-pen-to-square mr-2"></i>Edit
                </a>
              </td>
              <td>
                <a href="#" className="text-danger">
                  <i class="fa-solid fa-trash mr-2"></i>Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserManagementPage;
