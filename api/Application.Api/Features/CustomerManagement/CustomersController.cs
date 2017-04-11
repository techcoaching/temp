namespace App.Api.Features.CustomerManagement
{
    using App.Common;
    using App.Common.DI;
    using App.Common.MVC.Attributes;
    using App.Service.CustomerManagement;
    using System;
    using System.Collections.Generic;
    using System.Web.Http;

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
        [HttpGet]
        [Route("{id}")]
        [ResponseWrapper()]
        public GetCustomerResponse GetCustomer([FromUri]Guid id)
        {
            ICustomerService customerService = IoC.Container.Resolve<ICustomerService>();
            GetCustomerResponse cus = customerService.GetCustomer(id);
            return cus;
        }

        [HttpPost]
        [Route("")]
        [ResponseWrapper()]
        public CreateCustomerResponse CreateCustomer(CreateCustomerRequest request)
        {
            ICustomerService customerService = IoC.Container.Resolve<ICustomerService>();
            CreateCustomerResponse customer = customerService.Create(request);
            return customer;
        }
    }
}