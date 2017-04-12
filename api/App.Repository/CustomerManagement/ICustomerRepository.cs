namespace App.Repository.CustomerManagement
{
    using App.Common.Data;
    using App.Common.Mapping;
    using App.Entity.CustomerManagement;
    using System.Collections.Generic;

    public interface ICustomerRepository : IBaseRepository<Customer>
    {
        IList<TEntity> GetCustomers<TEntity>() where TEntity : IMappedFrom<Customer>;
        Customer GetByName(string name);
        bool IsNameExisted(string name, string id = default(string));
    }
}
