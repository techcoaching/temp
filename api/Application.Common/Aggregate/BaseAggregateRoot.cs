namespace App.Common.Aggregate
{
    using App.Common.Data;
    using DI;
    using Event;
    using System.Collections.Generic;

    public abstract class BaseAggregateRoot : BaseEntity, IBaseAggregateRoot
    {
        protected IList<IEvent> Events { get; set; }
        public BaseAggregateRoot()
        {
            this.Events = new List<IEvent>();
        }
        public void PublishEvents()
        {
            if (this.Events == null || this.Events.Count == 0) { return; }
            IEventManagerStrategy eventStrategyManager = IoC.Container.Resolve<IEventManagerStrategy>();
            foreach (IEvent ev in this.Events)
            {
                eventStrategyManager.Publish(ev);
            }
        }
        protected void AddEvent(IEvent ev)
        {
            this.Events.Add(ev);
        }
        public virtual void Save()
        {
            throw new System.NotImplementedException();
        }
    }
}
