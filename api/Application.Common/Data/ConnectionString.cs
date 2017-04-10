﻿namespace App.Common.Data
{
    using System.Linq;

    public class ConnectionString : IConnectionString
    {
        public string Name { get; set; }
        public string Database { get; set; }
        public string Server { get; set; }
        public int Port { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DatabaseType DbType { get; set; }
        public ConnectionString()
        {
        }

        public ConnectionString(DatabaseType dbtype, string connectionName = "")
        {
            System.Console.WriteLine(Configurations.Configuration.Current.Databases.Count);
            App.Common.Configurations.ConnectionStringElement connectionString = Configurations.Configuration.Current.Databases.ToList().Where(item => item.DbType == dbtype && ((string.IsNullOrWhiteSpace(connectionName) && item.IsDefault) || item.Name == connectionName)).FirstOrDefault();
            if (string.IsNullOrWhiteSpace(connectionName) && connectionString == null)
            {
                throw new App.Common.Validation.ValidationException("CommonMessage.ConnectionStringNoDefaultItem");
            }

            if (!string.IsNullOrWhiteSpace(connectionName) && connectionString == null)
            {
                throw new App.Common.Validation.ValidationException("CommonMessage.ConnectionStringInvalidName", connectionName);
            }

            this.Apply(connectionString);
        }

        private void Apply(App.Common.Configurations.ConnectionStringElement connectionString)
        {
            this.Name = connectionString.Name;
            this.Database = connectionString.Database;
            this.Server = connectionString.Server;
            this.Port = connectionString.Port;
            this.UserName = connectionString.UserName;
            this.Password = connectionString.Password;
            this.DbType = connectionString.DbType;
        }
    }
}