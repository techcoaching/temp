let routes: any = getRoute();
export default routes;
function getRoute() {
    let route: any = {
        report: {
            saleReport: {
                name: "dashboard.sale.saleReport",
                path: "report/saleReport"
            }
        }
    };
    return route;
}