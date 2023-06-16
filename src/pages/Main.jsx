import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
   
    return ( 
            <>
             <main>
                <Outlet/>
             </main>
            </>
     );
}
 
export default Main;