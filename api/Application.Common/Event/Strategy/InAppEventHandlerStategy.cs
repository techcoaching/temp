namespace App.Common.Event.Strategy
{
    using DI;
    public class InAppEventHandlerStategy : IEventHandlerStrategy
    {
        public void Publish<TEventType>(TEventType ev) where TEventType : IEvent
        {
            IEventManager eventManager = IoC.Container.Resolve<IEventManager>();
            eventManager.Publish<TEventType>(ev);
        }
    }
}
