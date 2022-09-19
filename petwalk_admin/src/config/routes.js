//Layout
import LayoutMajor from "../pages/LayoutMajor";
//Login
import Login from "../pages/Login";

//Error
import Error404 from "../pages/Error404";

const routes = [
    {
        path:"/",
        component:Login,
        exact: true,
    },
    {
        path:"/LayoutMajor",
        component:LayoutMajor,
        exact:false,
        routes:[
            {

            }
        ]
    },
    {
        component:Error404,
    }

    ]

export default routes;