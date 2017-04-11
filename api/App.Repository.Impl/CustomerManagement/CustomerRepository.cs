namespace App.Repository.Impl.CustomerManagement
{
    using System.Collections.Generic;
    using App.Common.Data;
    using App.Common.Mapping;
    using App.Entity.CustomerManagement;
    using App.Repository.CustomerManagement;
    internal class CustomerRepository : BaseRepository<Customer>, ICustomerRepository
    {
        public CustomerRepository() : base(new App.Context.AppDbContext(App.Common.IOMode.Read))
        {
        }
        public IList<TEntity> GetCustomers<TEntity>() where TEntity : IMappedFrom<Customer>
        {
            return this.GetItems<TEntity>();
        }
    }
}
