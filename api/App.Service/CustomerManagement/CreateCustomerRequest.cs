namespace App.Service.CustomerManagement
{
    using App.Common.Data;
    using App.Common.Validation.Attribute;

    public class CreateCustomerRequest : BaseEntity
    {
        [Required("customerManagement.addCustomer.validation.nameIsRequired")]
        public string Name { get; set; }
        public string Location { get; set; }
    }
}