namespace App.Service.Impl.CustomerManagement
{
    using System.Collections.Generic;
    using App.Service.CustomerManagement;
    using App.Common.DI;
    using App.Repository.CustomerManagement;
    internal class CustomerService : ICustomerService
    {
        public IList<CustomerListItem> GetCustomers()
        {
            ICustomerRepository customerRepo = IoC.Container.Resolve<ICustomerRepository>();
            return customerRepo.GetCustomers<CustomerListItem>();
        }
    }
}
