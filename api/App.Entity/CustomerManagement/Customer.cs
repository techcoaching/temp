using App.Common.Data;

namespace App.Entity.CustomerManagement
{
    public class Customer: BaseEntity
    {
        public string Name { get; set; }
        public string Location { get; set; }
    }
}
