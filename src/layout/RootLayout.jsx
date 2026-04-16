import React from "react";

const RootLayout = () => {
    return(
        <div>
            <h2>Nabbar</h2>
              <Outlet/>
            <h2>Footer</h2>
        </div>
    )
}