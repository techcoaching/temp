namespace App.Service.CustomerManagement
{
    using App.Common.Validation.Attribute;
    using System;
    public class UpdateCustomerRequest
    {
        [Required("customerManagement.addOrUpdateCustomer.validation.invalidId")]
        public Guid Id { get; set; }
        [Required("customerManagement.addOrUpdateCustomer.validation.nameIsRequired")]
        public string Name { get; set; }
        public string Location { get; set; }
    }
}