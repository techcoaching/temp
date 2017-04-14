namespace App.Aggregate.Order
{
    using App.Common.Aggregate;
    using System.Collections.Generic;
    using System;

    public class OrderAggregate : BaseAggregateRoot
    {
        public CustomerDetail CustomerDetail { get; set; }
        public IList<OrderLine> OrderLines { get; set; }
        public OrderAggregate()
        {
            this.OrderLines = new List<OrderLine>();
        }

        public void AddOrderLineItems(IList<App.Command.Order.OrderLine> orderLines)
        {
            foreach (App.Command.Order.OrderLine item in orderLines)
            {
                OrderLine orderLine = new OrderLine(item.Price);
                this.OrderLines.Add(orderLine);
            }
        }

        public void AddCustomerDetail(App.Command.Order.CustomerDetail customerDetail)
        {
            this.CustomerDetail = new CustomerDetail(customerDetail.Name);
        }
    }
}
