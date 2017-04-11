namespace App.Service.Impl.CustomerManagement
{
    using System.Collections.Generic;
    using System;
    using App.Common.DI;
    using App.Repository.CustomerManagement;
    using App.Service.CustomerManagement;

    internal class CustomerService : ICustomerService
    {
        public GetCustomerResponse GetCustomer(Guid id)
        {
            ICustomerRepository customerRepo = IoC.Container.Resolve<ICustomerRepository>();
            return customerRepo.GetById<GetCustomerResponse>(id.ToString());
        }

        public IList<CustomerListItem> GetCustomers()
        {
            ICustomerRepository customerRepo = IoC.Container.Resolve<ICustomerRepository>();
            return customerRepo.GetCustomers<CustomerListItem>();
        }
    }
}
