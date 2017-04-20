namespace App.Event.Order
{
    using App.Common.Event;
    using System;

    public class OnOrderLineItemAdded : IEvent
    {
        public Guid OrderId { get; set; }
        public decimal Price { get; set; }
        public OnOrderLineItemAdded(Guid orderId, decimal price)
        {
            this.OrderId = orderId;
            this.Price = price;
        }
    }
}
