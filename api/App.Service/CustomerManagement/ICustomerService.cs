namespace App.Service.CustomerManagement
{
    using System.Collections.Generic;
    public interface ICustomerService
    {
        IList<CustomerListItem> GetCustomers();
    }
}
