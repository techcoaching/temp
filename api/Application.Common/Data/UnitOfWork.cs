﻿namespace App.Common.Data
{
    using System;

    public class UnitOfWork : IUnitOfWork
    {
        public IDbContext Context { get; private set; }
        public UnitOfWork(IDbContext context)
        {
            this.Context = context;
        }

        public void Commit()
        {
            this.Context.SaveChanges();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}