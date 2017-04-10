﻿namespace App.Entity.Registration
{
    using System;
    using App.Common.Configurations;
    using App.Common.Data;
    using App.Common.Helpers;
    using App.Entity.Common;

    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime LastLoggedInDate { get; set; }
        public string Token { get; set; }
        public DateTime TokenExpiredAfter { get; set; }
        public string Password { get; set; }
        public string LanguageCode { get; set; }
        public Language Language { get; set; }
        public User()
        {
        }

        public User(string email, string pwd)
        {
            this.Email = email;
            this.Password = EncodeHelper.EncodePassword(pwd);
            this.Id = Guid.NewGuid();
            this.LastLoggedInDate = DateTime.Now;
            this.TokenExpiredAfter = DateTime.Now;
            this.FirstName = "firstname";
            this.LastName = "lastname";
            this.LanguageCode = Configuration.Current.Localization.DefaultLanguageCode;
        }

        public User(string email, string pwd, string firstName, string lastName) : this(email, pwd)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }
    }
}
