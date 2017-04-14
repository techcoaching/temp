namespace App.Common.Aggregate
{
    using App.Common.Data;
    public abstract class BaseAggregateRoot : BaseEntity, IBaseAggregateRoot
    {
        public virtual void Save()
        {
            throw new System.NotImplementedException();
        }
    }
}
