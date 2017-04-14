namespace App.Aggregate.Order
{
    using App.Common.Data;
    public class CustomerDetail : BaseEntity
    {
        public CustomerDetail(string name)
        {
            this.Name = name;
        }

        public string Name { get; set; }
    }
}
