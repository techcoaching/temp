namespace App.Repository.Order
{
    using App.Common.Data;
    public interface IOrderRepository : IBaseRepository<App.Aggregate.Order.OrderAggregate>{}
}
