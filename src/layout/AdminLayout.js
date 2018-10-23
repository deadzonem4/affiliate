import React from "react";


const AdminLayout = (props) => {
  return (
    <div>
      <main id="content">
        {props.children}
      </main>
    </div>
  );
}

export default AdminLayout;