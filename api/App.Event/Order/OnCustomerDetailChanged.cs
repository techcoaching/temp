namespace App.Event.Order
{
    using System;
    using App.Common.Event;
    public class OnCustomerDetailChanged : IEvent
    {
        public Guid OrderId { get; set; }
        public string CustomerName { get; set; }
        public OnCustomerDetailChanged(Guid orderId, string customerName)
        {
            this.OrderId = orderId;
            this.CustomerName = customerName;
        }
    }
}
