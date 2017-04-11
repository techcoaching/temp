﻿namespace App.Service.CustomerManagement
{
    using App.Common.Data;
    using App.Common.Mapping;
    using App.Entity.CustomerManagement;
    public class CreateCustomerResponse : BaseEntity, IMappedFrom<Customer>
    {
        public string Name { get; set; }
        public string Location { get; set; }
    }
}