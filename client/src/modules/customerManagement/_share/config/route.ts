let routes: any = getRoute();
export default routes;
function getRoute() {
    let route: any = {
        customer: {
            customers: {
                name: "customerManagement.customer.customers",
                path: "customers"
            },
            addCustomer:{
                name: "customerManagement.customer.addCustomer",
                path: "customers/addCustomer"
            }
        }
    };
    return route;
}