namespace App.Common.Aggregate
{
    using App.Common.Data;
    using System;

    public interface IBaseAggregateRoot : IBaseEntity<Guid>
    {
    }
}
