namespace App.Repository.Impl.CustomerManagement
{
    using System.Collections.Generic;
    using System.Linq;
    using App.Common.Data;
    using App.Common.Mapping;
    using App.Entity.CustomerManagement;
    using App.Repository.CustomerManagement;
    using App.Common.Data.MSSQL;
    using System;

    internal class CustomerRepository : BaseRepository<Customer>, ICustomerRepository
    {
        public CustomerRepository() : base(new App.Context.AppDbContext(App.Common.IOMode.Read))
        {
        }
        public CustomerRepository(IUnitOfWork uow) : base(uow.Context as IMSSQLDbContext)
        {
        }

        public Customer GetByName(string name)
        {
            return this.DbSet.AsQueryable().FirstOrDefault(item => item.Name == name);
        }

        public IList<TEntity> GetCustomers<TEntity>() where TEntity : IMappedFrom<Customer>
        {
            return this.GetItems<TEntity>();
        }

        public bool IsNameExisted(string name, string id = default(string))
        {
            return this.DbSet.AsQueryable().Any(item => item.Name == name && (id == default(string) || item.Id.ToString() != id));
        }
    }
}
