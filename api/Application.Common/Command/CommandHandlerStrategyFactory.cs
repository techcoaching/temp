﻿namespace App.Common.Command
{
    using Aggregate;
    using Configurations;
    using Configurations.CommandHandler;
    using Handlers;

    public class CommandHandlerStrategyFactory
    {
        internal static ICommandHandlerStrategy Create<TAggregate>() where TAggregate : IBaseAggregateRoot
        {
            string className = typeof(TAggregate).FullName;
            CommandHandlerOption option = Configuration.Current.CommandHandlerSettings[className];
            switch (option.Type)
            {
                //case CommandHandlerStategyType.External:
                //    return new ExternalCommandHandlerStategy();
                case CommandHandlerStategyType.InApp:
                default:
                    return new InAppCommandHandlerStategy();
            }
        }
    }
}
