namespace App.Common.Command
{
    using App.Common.Command.Exceptions;
    using App.Common.DI;
    public class CommandHandlerController : BaseApiController
    {
        protected void Execute<TCommand>(TCommand command) where TCommand : IBaseCommand
        {
            IBaseCommandHandler<TCommand> handler = IoC.Container.Resolve<IBaseCommandHandler<TCommand>>();
            if (handler == null)
            {
                throw new CommandHandlerNotFound<TCommand>();
            }
            handler.Handle(command);
        }
    }
}
