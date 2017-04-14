namespace App.Command.Impl.Order
{
    using System;
    using App.Command.Order;
    public class OrderCommandHandler : IOrderCommandHandler
    {
        public void Handle(CreateOrderRequest command)
        {
            throw new NotImplementedException("Congratulation, the command handler flow is ok.");
        }
    }
}
