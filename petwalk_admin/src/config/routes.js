import MenuMajor from "../pages/MenuMajor";
import Login from "../pages/Login";
import MenuDashboard from "../pages/MenuDashboard";
import ListWorkers from "../pages/ListWorkers";
import Error404 from "../pages/Error404";

const routes = [
    {
        path:"/",
        component:Login,
        exact: true,
    },
    {
        path:"/MenuMajor",
        component:MenuMajor,
        exact:false,
        routes:[
            {

            }
        ]
    },
    {
        path:"/MenuDashboard",
        component:MenuDashboard,
        exact:true
    },
    {
        path:"/ListWorkers",
        component:ListWorkers,
        exact:true
    },
    {
        component:Error404,
    }
    ]
export default routes;