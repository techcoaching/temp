namespace App.Api.Features.Order
{
    using Command.Order;
    using App.Common.Command;
    using App.Common.MVC.Attributes;
    using System.Web.Http;
    using Aggregate.Order;

    [RoutePrefix("api/orders")]
    public class OrdersController : CommandHandlerController<OrderAggregate>
    {
        [Route("")]
        [HttpPost()]
        [ResponseWrapper()]
        public void CreateOrder(CreateOrderRequest request)
        {
            this.Execute(request);
        }
    }
}
