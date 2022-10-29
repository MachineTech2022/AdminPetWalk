import MenuMajor from "../pages/MenuMajor";
import Login from "../pages/Login";
import MenuDashboard from "../pages/MenuDashboard";
import ListRequest from "../pages/ListRequest";
import ListConsumers from "../pages/ListConsumers";
import ListWorkers from "../pages/ListWorkers";
import ModifyDeactivatePlans from "../pages/ModifyDeactivatePlans";
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
        path:"/ListRequest",
        component:ListRequest,
        exact:true
    },
    {
        path:"/ListConsumers",
        component:ListConsumers,
        exact:true
    },
    {
        path:"/ListWorkers",
        component:ListWorkers,
        exact:true
    },
    {
        path:"/ModifyDeactivatePlans",
        component:ModifyDeactivatePlans,
        exact:true,
    },
    {
        component:Error404,
    }
    ]
export default routes;