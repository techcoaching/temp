namespace App.EventHandler.Impl.Order
{
    using Event.Order;
    using App.EventHandler.Order;
    using Common.Event;
    using System;

    public class OrderEventHandler : BaseEventHandler<OnCustomerDetailChanged>, IOrderEventHandler
    {
        public override void Execute(OnCustomerDetailChanged ev)
        {
            Console.WriteLine("OnCustomerDetailChanged", ev.CustomerName);
        }
    }
}
