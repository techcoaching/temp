namespace App.Service.CustomerManagement
{
    using App.Common.Data;
    using App.Common.Mapping;
    using Entity.CustomerManagement;

    public class CustomerListItem : BaseEntity, IMappedFrom<Customer>
    {
        public string Name { get; set; }
        public string Location { get; set; }
    }
}