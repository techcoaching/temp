using App.Common;
using App.Common.DI;
using App.Common.MVC.Attributes;
using App.Service.CustomerManagement;
using System.Collections.Generic;
using System.Web.Http;

namespace App.Api.Features.CustomerManagement
{
    [RoutePrefix("api/customers")]
    public class CustomersController : BaseApiController
    {
        [HttpGet()]
        [Route("")]
        [ResponseWrapper()]
        public IList<CustomerListItem> GetCustomers()
        {
            ICustomerService service = IoC.Container.Resolve<ICustomerService>();
            return service.GetCustomers();
        }
    }
}