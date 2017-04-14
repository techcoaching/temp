namespace App.Aggregate.Order
{
    using App.Common.Data;
    public class OrderLine : BaseEntity
    {
        public OrderLine(decimal price)
        {
            this.Price = price;
        }

        public decimal Price { get; set; }
    }
}
