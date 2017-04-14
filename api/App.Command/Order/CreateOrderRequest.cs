using App.Common.Command;

namespace App.Command.Order
{
    public class CreateOrderRequest : BaseCommand
    {
        public string CustomerName { get; set; }
    }
}
