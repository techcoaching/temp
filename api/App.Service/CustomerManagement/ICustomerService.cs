namespace App.Service.CustomerManagement
{
    using System;
    using System.Collections.Generic;
    public interface ICustomerService
    {
        IList<CustomerListItem> GetCustomers();
        GetCustomerResponse GetCustomer(Guid id);
        CreateCustomerResponse Create(CreateCustomerRequest request);
    }
}
