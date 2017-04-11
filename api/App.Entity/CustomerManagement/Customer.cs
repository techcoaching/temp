using App.Common.Data;

namespace App.Entity.CustomerManagement
{
    public class Customer: BaseEntity
    {
        public string Name { get; set; }
        public string Location { get; set; }
        public Customer(){}
        public Customer(string name, string location)
        {
            this.Name = name;
            this.Location = location;
        }
    }
}
