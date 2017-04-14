﻿namespace App.Command.Impl.Order
{
    using App.Command.Order;
    using Aggregate.Order;
    using Common.Aggregate;
    using Common.Data;
    using Common;
    using Context;
    using Repository.Order;
    using Common.DI;

    public class OrderCommandHandler : IOrderCommandHandler
    {
        public void Handle(CreateOrderRequest command)
        {
            OrderAggregate order = AggregateFactory.Create<OrderAggregate>();
            order.AddCustomerDetail(command.OrderDetail);
            order.AddOrderLineItems(command.OrderLines);
            using (IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                IOrderRepository repository = IoC.Container.Resolve<IOrderRepository>(uow);
                repository.Add(order);
            }
        }
    }
}
