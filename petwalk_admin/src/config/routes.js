import MenuMajor from "../pages/MenuMajor";
import Login from "../pages/Login";
import MenuDashboard from "../pages/MenuDashboard";
import ListRequest from "../pages/ListRequest";
import ListConsumers from "../pages/ListConsumers";
import ListWorkers from "../pages/ListWorkers";
import ModifyDeactivatePlans from "../pages/ModifyDeactivatePlans";
import DiscountPlans from "../pages/DiscountPlans";
import DashboardGeneral from "../pages/DashboardGeneral";
import ReportUser from "../pages/ReportUser";
import Prueba from "../pages/Prueba";
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
        path:"/DiscountPlans",
        component:DiscountPlans,
        exact:true,
    },
    {
        path:"/DashboardGeneral",
        component:DashboardGeneral,
        exact:true,
    },
    {
        path:"/ReportUser",
        component:ReportUser,
        exact:true,
    },
    {
        path:"/Prueba",
        component:Prueba,
        exact:true,
    },
    {
        component:Error404,
    }
    ]
export default routes;