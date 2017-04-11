namespace App.Service.Impl.CustomerManagement
{
    using System.Collections.Generic;
    using System;
    using App.Common.DI;
    using App.Repository.CustomerManagement;
    using App.Service.CustomerManagement;
    using App.Common;
    using Entity.CustomerManagement;
    using App.Common.Helpers;
    using App.Common.Validation;

    internal class CustomerService : ICustomerService
    {
        public CreateCustomerResponse Create(CreateCustomerRequest request)
        {
            this.ValidateCreateCustomerRequest(request);
            using (App.Common.Data.IUnitOfWork uow = new App.Common.Data.UnitOfWork(new App.Context.AppDbContext(IOMode.Write)))
            {
                ICustomerRepository cusRepository = IoC.Container.Resolve<ICustomerRepository>(uow);
                Customer item = new Customer(request.Name, request.Location);
                cusRepository.Add(item);
                uow.Commit();
                return ObjectHelper.Convert<CreateCustomerResponse>(item);
            }
        }

        private void ValidateCreateCustomerRequest(CreateCustomerRequest request)
        {
            IValidationException validationException = ValidationHelper.Validate(request);
            ICustomerRepository repo = IoC.Container.Resolve<ICustomerRepository>();
            Customer item = repo.GetByName(request.Name);
            if (item != null)
            {
                validationException.Add(new App.Common.Validation.ValidationError("customerManagemnet.addCustomer.validation.nameAlreadyExist"));
            }
            validationException.ThrowIfError();
        }

        public GetCustomerResponse GetCustomer(Guid id)
        {
            ICustomerRepository customerRepo = IoC.Container.Resolve<ICustomerRepository>();
            return customerRepo.GetById<GetCustomerResponse>(id.ToString());
        }

        public IList<CustomerListItem> GetCustomers()
        {
            ICustomerRepository customerRepo = IoC.Container.Resolve<ICustomerRepository>();
            return customerRepo.GetCustomers<CustomerListItem>();
        }
    }
}
