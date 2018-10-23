import React from "react";
import AdminPage from '../pages/AdminPage.js';

const AdminLayout = (props) => {
  return (
    <div>
      <main id="content">
      	<p>AdminLayout</p>
        {props.children}
      </main>
    </div>
  );
}

export default AdminLayout;