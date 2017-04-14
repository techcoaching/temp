namespace App.Command.Order
{
    using App.Common.Command;
    using System.Collections.Generic;
    public class CreateOrderRequest : BaseCommand
    {
        public string CustomerName { get; set; }
        public CustomerDetail OrderDetail { get; set; }
        public IList<OrderLine> OrderLines { get; set; }
    }
}
